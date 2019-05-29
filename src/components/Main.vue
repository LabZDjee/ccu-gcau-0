<template>
  <div>
    <b-jumbotron>
      <div class="def-flex">
        <img src="../assets/logo.png">
        <h3>{{header}}</h3>
      </div>
      <div class="def-flex">
        <b-form-file accept=".tdsa, .tdsn" v-model="file" v-on:change="onFileChange"></b-form-file>
      </div>
    </b-jumbotron>
    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <default-input tdsKey="Text_Nom" title="name" :check="checks.checkLength(16)"></default-input>
          <default-input tdsKey="Text_Origine" title="origin" :check="checks.noCheck"></default-input>
        </b-col>
        <b-col sm="3">
          <default-input tdsKey="Text_Commande" title="order" :check="checks.noCheck"></default-input>
          <default-input tdsKey="Text_Projet" title="project" :check="checks.noCheck"></default-input>
        </b-col>
        <b-col sm="6">
          <b-form-textarea rows="3" v-model="projectNotes" @change="inputHasChanged"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>&nbsp;</b-col>
      </b-row>
    </b-container>

    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="System" active>
            <b-card-text>
              <system-view></system-view>
            </b-card-text>
          </b-tab>
          <b-tab title="Battery">
            <b-card-text>View on Battery (To Be Defined)</b-card-text>
          </b-tab>
          <b-tab title="Alarm">
            <b-card-text>
              <alarms></alarms>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import defaultInput from "./DefInput";
import alarms from "./Alarms";
import systemView from "./System";
import { tdsData, eventBus, checks, defineReactWatcher, processTdsFile } from "../main";

export default {
  name: "Main",
  components: {
    "default-input": defaultInput,
    "system-view": systemView,
    alarms,
  },
  data() {
    return {
      header: "CCU to GCAU Configuration Translator",
      subTitle: "from tdsa to agc...",
      projectNotes: undefined,
      file: undefined,
    };
  },
  computed: {
    checks() {
      return checks;
    },
  },
  created() {
    const that = this;
    eventBus.$on("item-should-update", item => {
      if (tdsData[item.id] !== item.contents) {
        that.file = undefined;
      }
      tdsData[item.id] = item.contents;
    });
    defineReactWatcher.call(this, "Edit_COMMENT", "projectNotes");
  },
  methods: {
    inputHasChanged(value) {
      tdsData.Edit_COMMENT = value;
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = e => {
        const fileContents = e.target.result;
        processTdsFile(fileContents);
      };
    },
  },
};
</script>

<style scoped>
.def-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: auto;
}
.container {
  margin: 10px;
}
</style>
