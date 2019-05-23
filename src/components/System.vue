<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <default-input
            ccuConfigId="systemRoomTemperature"
            title="room temperature"
            unit="°C"
            :check="ch.checkNumber"
          ></default-input>
          <default-input
            ccuConfigId="systemAltitude"
            title="altitude"
            unit="m"
            :check="ch.checkNumber"
          ></default-input>
          <default-select ccuConfigId="systemLanguage" title="language" :options="languages"></default-select>
        </b-col>
        <b-col sm="6">
          <default-checkbox ccuConfigId="systemAcMeter" title="AC meter"></default-checkbox>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import defaultInput from "./DefInput";
import defaultCheckbox from "./DefCheckbox";
import defaultSelect from "./DefSelect";
import { checks as ch, languages } from "../main";

export default {
  name: "system-view",
  data() {
    return {
      languages,
      ch,
    };
  },
  components: {
    "default-input": defaultInput,
    "default-checkbox": defaultCheckbox,
    "default-select": defaultSelect,
  },
};
</script>

<style scoped>
</style>
