<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <default-input
            tdsKey="Edit_ENV_TA"
            title="room temperature"
            unit="°C"
            :check="ch.checkNumber"
          ></default-input>
          <default-input tdsKey="Edit_ENV_ALT" title="altitude" unit="m" :check="ch.checkNumber"></default-input>
          <default-select tdsKey="Combo_LANGUE" title="language" :options="languages"></default-select>
        </b-col>
        <b-col sm="6">
          <default-checkbox tdsKey="Check_SDM_TR" title="AC meter"></default-checkbox>
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
