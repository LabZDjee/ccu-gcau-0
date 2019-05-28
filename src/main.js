/* jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import axios from "axios";
import ReacTer from "@labzdjee/reac-ter";
import App from "./App";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

export const eventBus = new Vue({
  methods: {
    dataChanged(item) {
      this.$emit("item-should-update", item);
    },
  },
});

export const checks = {
  noCheck(newValue) {
    return newValue;
  },
  checkNumber(newValue, oldValue) {
    if (typeof newValue !== "string") {
      return newValue;
    }
    if (newValue.trim() !== newValue) {
      return oldValue;
    }
    return isNaN(newValue) ? oldValue : newValue;
  },
  checkPositiveNumber(newValue, oldValue) {
    if (typeof newValue !== "string") {
      return newValue;
    }
    if (newValue.trim() !== newValue || isNaN(newValue)) {
      return oldValue;
    }
    const v = parseFloat(newValue);
    return isNaN(v) || v < 0.0 ? oldValue : newValue;
  },
  checkPositiveInteger(newValue, oldValue) {
    if (typeof newValue !== "string") {
      return newValue;
    }
    return newValue.match(/^\d+$/) ? newValue : oldValue;
  },
  checkLength(valueLength) {
    return newValue => newValue.substr(0, valueLength);
  },
};

export const tsvMap = {};
export const tdsData = new ReacTer();

export function defineReactWatcher(tdsKey, dataProp) {
  tdsData.$watchers[tdsKey].push(v => {
    this[dataProp] = v;
  });
  // also initialises $data
  this[dataProp] = tdsData[tdsKey];
}

const privateTdsData = {};

function initTdsData() {
  Object.keys(tsvMap).forEach(key => {
    privateTdsData[key] = null;
    tdsData.addProperty(privateTdsData, key);
  });
}

export function processTdsFile(fileContents) {
  const lines = fileContents.toString().split("\n");
  const pattLabel = /<Label>(.*)<\/Label>/i;
  const pattData = /<Donnee>(.*)<\/Donnee>/i;
  const commaFloatPattern = /(\d*),(\d*)/;
  let label;
  let data;
  lines.forEach(line => {
    const resultLabel = line.match(pattLabel);
    if (resultLabel) {
      label = resultLabel[1];
    }
    const resultData = line.match(pattData);
    if (resultData) {
      data = resultData[1];
      if (label.startsWith("Check_") && data !== "true" && data !== "false") {
        if (data === "1") {
          data = "true";
        } else {
          data = "false";
        }
      }
      if (tsvMap[label].P0Type === "float") {
        const matches = data.match(commaFloatPattern);
        if (matches) {
          data = `${matches[1]}.${matches[2]}`;
        }
      }
      tdsData[label] = data;
    }
  });
}

function initVue() {
  /* eslint-disable no-new */
  new Vue({
    el: "#app",
    components: {
      App,
    },
    template: "<App/>",
  });
}

axios
  .get(`/static/TDSP0APPMap.tsv`)
  .then(response => {
    const tsv = response;
    const lines = tsv.data.split("\n");
    const headers = lines[0].replace(/\r$/, "").split("\t");
    let key;
    let object;
    for (let i = 1; i < lines.length; i++) {
      object = {};
      const currentline = lines[i].replace(/\r$/, "").split("\t");
      for (let j = 0; j < headers.length; j++) {
        object[headers[j]] = currentline[j];
        if (headers[j] === "TDSTag") {
          key = currentline[j];
        }
      }
      if (key.length > 0 && key.startsWith("x--") === false) {
        tsvMap[key] = object;
      }
    }
    initTdsData();
    initVue();
  })
  .catch(error => {
    // eslint-disable-next-line
    console.log(error);
  });

export const languages = ["French", "English", "Spanish", "Portuguese"];
