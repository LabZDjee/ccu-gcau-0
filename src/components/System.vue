<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <default-input ccuConfigId="systemRoomTemperature" title="room temperature" unit="°C"></default-input>
          <default-input ccuConfigId="systemAltitude" title="altitude" unit="m"></default-input>
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

export default {
  name: "system-view",
  data() {
    return {
      languages: ["French", "English", "Spanish", "Portuguese"],
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
