<template>
  <div>
    <b-jumbotron>
      <div class="def-flex">
        <img src="../assets/logo.png">
        <h3>{{header}}</h3>
      </div>
    </b-jumbotron>
    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <default-input ccuConfigId="projectName" title="name"></default-input>
          <default-input ccuConfigId="projectOrigin" title="origin"></default-input>
         </b-col>
        <b-col sm="3">
          <default-input ccuConfigId="projectOrder" title="order"></default-input>
          <default-input ccuConfigId="project" title="project"></default-input>
        </b-col>
        <b-col sm="6">
          <b-form-textarea rows="3" v-model="ccuConfig.projectNotes"></b-form-textarea>
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
import { ccuConfig, eventBus } from "../main";

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
      ccuConfig,
    };
  },
  methods: {},
  created() {
    eventBus.$on("item-should-update", (item) => {
      ccuConfig[item.id] = item.contents;
    });
  },
};
</script>

<style scoped>
.def-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  margin: 10px;
}
</style>
