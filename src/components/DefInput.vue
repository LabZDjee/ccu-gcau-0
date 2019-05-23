<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="5" class="bcol">
          <label :for="ccuConfigId">{{title}}</label>
        </b-col>
        <b-col :sm="unit? 6 : 7" class="bcol">
          <b-form-input :id="ccuConfigId" :value="value" @change="inputHasChanged"></b-form-input>
        </b-col>
        <b-col sm="1" v-if="unit" class="bcol">{{unit}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ccuConfig } from "../main";

export default {
  name: "default-input",
  data() {
    return { ccuConfig };
  },
  props: ["ccuConfigId", "title", "unit", "check"],
  computed: {
    value: {
      get() {
        return this.ccuConfig[this.ccuConfigId];
      },
    },
  },
  methods: {
    inputHasChanged(value) {
      if (typeof this.check === "function") {
        this.ccuConfig[this.ccuConfigId] = this.check(
          value,
          this.ccuConfig[this.ccuConfigId],
        );
      } else {
        // this.value = value;
      }
    },
  },
};
</script>

<style scoped>
.bcol {
  padding: 2px;
}
</style>
