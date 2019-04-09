<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="5">{{title}}</b-col>
        <b-col sm="7">
          <b-form-select
            :id="ccuConfigId"
            :options="options"
            :value="ccuConfig[ccuConfigId]"
            @change="selectionHasChanged"
          ></b-form-select>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { eventBus, ccuConfig } from "../main";

export default {
  name: "default-select",
  data() {
    return {
      ccuConfig,
    };
  },
  props: ["ccuConfigId", "title", "options"],
  methods: {
    selectionHasChanged(value) {
      eventBus.dataChanged({ id: this.ccuConfigId, contents: value });
    },
  },
};
</script>

<style scoped>
</style>
