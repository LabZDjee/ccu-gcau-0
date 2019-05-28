<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="5" class="bcol">
          <label :for="tdsKey" :class="{'text-danger': entryNotOk}">{{title}}</label>
        </b-col>
        <b-col :sm="unit ? 6 : 7" class="bcol">
          <b-form-input
            :class="{'text-danger': entryNotOk}"
            :id="tdsKey"
            v-model="editedValue"
            @change="inputHasChanged"
          ></b-form-input>
        </b-col>
        <b-col sm="1" v-if="unit" class="bcol">{{unit}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { tdsData, eventBus, defineReactWatcher } from "../main";

export default {
  name: "default-input",
  data() {
    return {
      editedValue: undefined,
    };
  },
  props: ["tdsKey", "title", "unit", "check"],
  methods: {
    inputHasChanged(value) {
      const filteredValue =
        typeof this.check === "function"
          ? this.check(value, tdsData[this.tdsKey])
          : value;
      this.editedValue = filteredValue;
      if (filteredValue !== tdsData[this.tdsKey]) {
        eventBus.dataChanged({ id: this.tdsKey, contents: value });
      }
    },
  },
  computed: {
    entryNotOk() {
      return typeof this.check !== "function"
        ? false
        : this.check(this.editedValue, tdsData[this.tdsKey]) !==
            this.editedValue;
    },
  },
  created() {
    defineReactWatcher.call(this, this.tdsKey, "editedValue");
  },
};
</script>

<style scoped>
.bcol {
  padding: 2px;
}
</style>
