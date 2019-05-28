<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="5">{{title}}</b-col>
        <b-col sm="7">
          <b-form-select
            :id="tdsKey"
            :options="options"
            :value="selected"
            @change="selectionHasChanged"
          ></b-form-select>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { eventBus, defineReactWatcher } from "../main";

export default {
  name: "default-select",
  data() {
    return {
      selected: undefined,
    };
  },
  props: ["tdsKey", "title", "options"],
  methods: {
    selectionHasChanged(value) {
      eventBus.dataChanged({ id: this.tdsKey, contents: value });
    },
  },
  created() {
    defineReactWatcher.call(this, this.tdsKey, "selected");
  },
};
</script>

<style scoped>
</style>
