<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="6">
          <alarm title="mains out-of-range" :data="alarmData[0]"></alarm>
          <alarm title="high charge voltage" :data="alarmData[1]"></alarm>
        </b-col>
        <b-col sm="6">
          <alarm title="spare 1" :data="alarmData[2]"></alarm>
          <alarm title="common alarm" :data="alarmData[3]"></alarm>
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
      alarmData: [
        // data: {enabledId, [relayNbId], [th1: {id, title, [unit]}, [th2: {id, title, [unit]}],
        //       [delayId], [latch: {displayId, relayId}]}
        {
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
        {
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
        {
          enabledId: "alarmSpare1Enabled",
          relayNbId: "alarmSpare1Relay",
          th1: { id: "alarmSpare1Text", title: "text" },
          delayId: "alarmSpare1Delay",
          latch: {
            displayId: "alarmSpare1DisplayLatch",
            relayId: "alarmSpare1RelayLatch",
          },
        },
        {
          enabledId: "alarmCommonEnbled",
          latch: {
            relayId: "alarmCommonRelayLatch",
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
