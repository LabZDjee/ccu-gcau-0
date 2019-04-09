<template>
  <div>
    <b-container class="border border-info rounded" fluid>
      <b-row class="text-white bg-info">
        <b-col class="title">{{title}}</b-col>
        <b-col>
          <default-checkbox title="enabled" :ccuConfigId="data.enabledId"></default-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="data.th1 || data.th2">
          <default-input
            v-if="data.th1"
            :ccuConfigId="data.th1.id"
            :title="data.th1.title"
            :unit="data.th1.unit"
          ></default-input>
          <default-input
            v-if="data.th2"
            :ccuConfigId="data.th2.id"
            :title="data.th2.title"
            :unit="data.th2.unit"
          ></default-input>
        </b-col>
        <b-col v-if="data.latch">
          <div>latch:</div>
          <default-checkbox
            v-if="data.latch.displayId"
            :ccuConfigId="data.latch.displayId"
            title="display"
          ></default-checkbox>
          <default-checkbox
            v-if="data.latch.relayId"
            :ccuConfigId="data.latch.relayId"
            title="relay"
          ></default-checkbox>
        </b-col>
        <b-col v-if="data.delayId">
          <default-input :ccuConfigId="data.delayId" title="delay" unit="s"></default-input>
          <default-select
            v-if="data.relayNbId"
            :ccuConfigId="data.relayNbId"
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
import { eventBus, ccuConfig } from "../main";

export default {
  name: "alarm",
  data() {
    return {
      ccuConfig,
      relayList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };
  },
  // data: {enabledId, [relayNbId], [th1: {id, title, [unit]}, [th2: {id, title, [unit]}],
  //       [delayId], [latch: {displayId, relayId}]}
  props: ["data", "title"],
  methods: {
    inputHasChanged(value) {
      eventBus.dataChanged({ id: this.ccuConfigId, contents: value });
    },
  },
  components: {
    "default-checkbox": defaultCheckbox,
    "default-input": defaultInput,
    "default-select": defaultSelect,
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
