<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <alarm v-for="alarmDef in leftAlarmDefs" :title="alarmDef.title" :data="alarmDef.data" :key="alarmDef.title"></alarm>
        </b-col>
        <b-col sm="6">
          <alarm v-for="alarmDef in rightAlarmDefs" :title="alarmDef.title" :data="alarmDef.data" :key="alarmDef.title"></alarm>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import alarm from "./Alarm";

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
            enabledId: "alarmMainsEnabled",
            relayNbId: "alarmMainsRelay",
            th1: { id: "alarmMainsMax", title: "max", unit: "V" },
            th2: { id: "alarmMainsMin", title: "min", unit: "V" },
            delayId: "alarmMainsDelay",
            latch: {
              displayId: "alarmMainsDisplayLatch",
              relayId: "alarmMainsRelayLatch",
            },
          },
        },
        {
          title: "high charge voltage",
          data: {
            enabledId: "alarmHCVEnabled",
            relayNbId: "alarmHCVRelay",
            th1: { id: "alarmHCVHighrate", title: "highrate", unit: "V" },
            th2: { id: "alarmHCVFloating", title: "floating", unit: "V" },
            delayId: "alarmHCVDelay",
            latch: {
              displayId: "alarmHCVDisplayLatch",
              relayId: "alarmHCVRelayLatch",
            },
          },
        },
      ],
      rightAlarmDefs: [
        {
          title: "spare 1",
          data: {
            enabledId: "alarmSpare1Enabled",
            relayNbId: "alarmSpare1Relay",
            th1: { id: "alarmSpare1Text", title: "text" },
            delayId: "alarmSpare1Delay",
            latch: {
              displayId: "alarmSpare1DisplayLatch",
              relayId: "alarmSpare1RelayLatch",
            },
          },
        },
        {
          title: "common alarm",
          data: {
            enabledId: "alarmCommonEnbled",
            latch: {
              relayId: "alarmCommonRelayLatch",
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
