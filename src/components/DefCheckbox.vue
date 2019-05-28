<template>
  <div>
    <b-form-checkbox
      :id="tdsKey"
      :name="tdsKey"
      v-model="editedStatus"
      value="true"
      unchecked-value="false"
      @change="checkHasChanged"
    >{{title}}</b-form-checkbox>
  </div>
</template>

<script>
import { eventBus, defineReactWatcher } from "../main";

export default {
  name: "default-checkbox",
  data() {
    return {
      editedStatus: undefined,
    };
  },
  props: ["tdsKey", "title"],
  methods: {
    checkHasChanged(value) {
      eventBus.dataChanged({ id: this.tdsKey, contents: value });
    },
  },
  created() {
    defineReactWatcher.call(this, this.tdsKey, "editedStatus");
  },
};
</script>

<style scoped>
</style>
