<template>
  <div>
    <b-container class="border border-info rounded" fluid>
      <b-row class="text-white bg-info">
        <b-col class="title">{{title}}</b-col>
        <b-col>
          <default-checkbox title="enabled" :tdsKey="data.enabledId"></default-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="5" v-if="data.th1 || data.th2">
          <default-input
            v-if="data.th1"
            :tdsKey="data.th1.id"
            :title="data.th1.title"
            :unit="data.th1.unit"
            :check="data.th1.check"
          ></default-input>
          <default-input
            v-if="data.th2"
            :tdsKey="data.th2.id"
            :title="data.th2.title"
            :unit="data.th2.unit"
            :check="data.th2.check"
          ></default-input>
        </b-col>
        <b-col v-if="data.latch">
          <div>latch:</div>
          <default-checkbox
            v-if="data.latch.displayId"
            :tdsKey="data.latch.displayId"
            title="display"
          ></default-checkbox>
          <default-checkbox v-if="data.latch.relayId" :tdsKey="data.latch.relayId" title="relay"></default-checkbox>
        </b-col>
        <b-col v-if="data.delayId">
          <default-input
            :tdsKey="data.delayId"
            title="delay"
            unit="s"
            :check="ch.checkPositiveInteger"
          ></default-input>
          <default-select
            v-if="data.relayNbId"
            :tdsKey="data.relayNbId"
            title="relay"
            :options="relayList"
          ></default-select>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import defaultInput from "./DefInput";
import defaultCheckbox from "./DefCheckbox";
import defaultSelect from "./DefSelect";
import { eventBus, checks as ch } from "../main";

export default {
  name: "alarm",
  data() {
    return {
      relayList: [],
      ch,
    };
  },
  // data: {enabledId, [relayNbId], [th1: {id, title, [unit]}, [th2: {id, title, [unit]}],
  //       [delayId], [latch: {displayId, relayId}]}
  props: ["data", "title"],
  methods: {
    inputHasChanged(value) {
      eventBus.dataChanged({ id: this.tdsKey, contents: value });
    },
  },
  components: {
    "default-checkbox": defaultCheckbox,
    "default-input": defaultInput,
    "default-select": defaultSelect,
  },
  created() {
    for (let i = 0; i <= 15; i++) {
      this.relayList[i] = `${i}`;
    }
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
