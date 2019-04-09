<template>
  <div>
    <b-form-checkbox
      :id="ccuConfigId"
      :name="ccuConfigId"
      v-model="status"
      value="true"
      unchecked-value="false"
      @change="checkHasChanged"
    >{{title}}</b-form-checkbox>
  </div>
</template>

<script>
import { eventBus, ccuConfig } from "../main";

export default {
  name: "default-checkbox",
  data() {
    return {
      ccuConfig,
      status: ccuConfig[this.ccuConfigId],
    };
  },
  props: ["ccuConfigId", "title"],
  methods: {
    checkHasChanged(value) {
      eventBus.dataChanged({ id: this.ccuConfigId, contents: value });
    },
  },
};
</script>

<style scoped>
</style>
