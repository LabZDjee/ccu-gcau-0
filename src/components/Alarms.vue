<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <alarm
            v-for="alarmDef in leftAlarmDefs"
            :title="alarmDef.title"
            :data="alarmDef.data"
            :key="alarmDef.title"
          ></alarm>
        </b-col>
        <b-col sm="6">
          <alarm
            v-for="alarmDef in rightAlarmDefs"
            :title="alarmDef.title"
            :data="alarmDef.data"
            :key="alarmDef.title"
          ></alarm>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import alarm from "./Alarm";
import { checks as ch } from "../main";

export default {
  name: "alarms",
  data() {
    return {
      // data: {enabledId, [relayNbId], [th1: {id, title, [unit]}, [th2: {id, title, [unit]}],
      //       [delayId], [latch: {displayId, relayId}]}
      leftAlarmDefs: [
        {
          title: "mains out-of-range",
          data: {
            enabledId: "Check_TRTHOTB",
            relayNbId: "Combo_TRTHOTB_REL",
            th1: {
              id: "Edit_TRTHOTB_TMAX",
              title: "max",
              unit: "V",
              check: ch.checkPositiveNumber,
            },
            th2: {
              id: "Edit_TRTHOTB_TMIN",
              title: "min",
              unit: "V",
              check: ch.checkPositiveNumber,
            },
            delayId: "Edit_TRTHOTB_TEMP",
            latch: {
              displayId: "Check_TRTHOTB_AFF",
              relayId: "Check_TRTHOTB_REL",
            },
          },
        },
        {
          title: "high charge voltage",
          data: {
            enabledId: "Check_TEOTDFL",
            relayNbId: "Combo_TEOTDFL_REL",
            th1: {
              id: "Edit_TEOTDFL_EG",
              title: "highrate",
              unit: "V",
              check: ch.checkPositiveNumber,
            },
            th2: {
              id: "Edit_TEOTDFL_FL",
              title: "floating",
              unit: "V",
              check: ch.checkPositiveNumber,
            },
            delayId: "Edit_TEOTDFL_TEMPS",
            latch: {
              displayId: "Check_TEOTDFL_AFF",
              relayId: "Check_TEOTDFL_REL",
            },
          },
        },
      ],
      rightAlarmDefs: [
        {
          title: "spare 1",
          data: {
            enabledId: "Check_R1",
            relayNbId: "Combo_R1_REL",
            th1: {
              id: "Edit_R1_TDA",
              title: "text",
              check: ch.checkLength(16),
            },
            delayId: "Edit_R1_TEMPS",
            latch: {
              displayId: "Check_R1_AFF",
              relayId: "Check_R1_REL",
            },
          },
        },
        {
          title: "common alarm",
          data: {
            enabledId: "Check_AC",
            latch: {
              relayId: "Check_AC_REL",
            },
          },
        },
      ],
    };
  },
  components: {
    alarm,
  },
};
</script>

<style scoped>
</style>
