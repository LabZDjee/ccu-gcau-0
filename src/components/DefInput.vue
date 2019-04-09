<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="5" class="bcol">
          <label :for="ccuConfigId">{{title}}</label>
        </b-col>
        <b-col :sm="unit? 6 : 7" class="bcol">
          <b-form-input :id="ccuConfigId" :value="ccuConfig[ccuConfigId]" @change="inputHasChanged"></b-form-input>
        </b-col>
        <b-col sm="1" v-if="unit" class="bcol">{{unit}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { eventBus, ccuConfig } from "../main";

export default {
  name: "default-input",
  data() {
    return {
      ccuConfig,
    };
  },
  props: ["ccuConfigId", "title", "unit"],
  methods: {
    inputHasChanged(value) {
      eventBus.dataChanged({ id: this.ccuConfigId, contents: value });
    },
  },
};
</script>

<style scoped>
.bcol {
  padding: 2px;
}
</style>
