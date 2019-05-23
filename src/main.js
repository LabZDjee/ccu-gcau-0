/* jshint esversion: 6 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
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
    return isNaN(newValue) ? oldValue : newValue;
  },
  checkLength(valueLength) {
    return newValue => newValue.substr(0, valueLength);
  },
};

export const ccuConfig = {
  projectName: "big business",
  projectOrigin: "turnkey EPC, Ltd",
  projectOrder: "x2xy",
  project: "incredible but true",
  projectNotes: `Nulla voluptate anim cillum ut nulla non amet veniam nulla est ad sit cillum nisi.
Adipisicing quis et irure elit laborum cillum cupidatat sit magna.
Nisi sit consectetur aliquip voluptate est minim exercitation eiusmod aliquip.`,
  systemRoomTemperature: "35",
  systemAltitude: "300",
  systemAcMeter: "true",
  systemLanguage: "French",
  alarmMainsEnabled: true,
  alarmMainsRelay: 4,
  alarmMainsMax: "300",
  alarmMainsMin: "200",
  alarmMainsDisplayLatch: true,
  alarmMainsRelayLatch: false,
  alarmMainsDelay: "4",
  alarmHCVEnabled: true,
  alarmHCVRelay: 5,
  alarmHCVHighrate: "33",
  alarmHCVFloating: "34",
  alarmHCVDisplayLatch: true,
  alarmHCVRelayLatch: false,
  alarmHCVDelay: "60",
  alarmSpare1Enabled: true,
  alarmSpare1Relay: 9,
  alarmSpare1Text: "spare 1",
  alarmSpare1DisplayLatch: true,
  alarmSpare1RelayLatch: false,
  alarmCommonEnbled: true,
  alarmCommonRelayLatch: true,
};

export const languages = ["French", "English", "Spanish", "Portuguese"];

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    App,
  },
  template: "<App/>",
});
