<template>
  <div class="dash" :class="{'is-open': $store.state.sideBarOpen}">
    <div class="dash-view">
      <report-panel
        title="Daseke Inc"
        src="img/clients/daseke.png"
        subtitle="Total Reports: "
        :subtitleContent="this.dasekeReports"
        :tableData="this.dasekeData"
      />
    </div>
    <div class="dash-view">
      <report-panel
        title="Daseke Inc"
        src="img/clients/swift.png"
        subtitle="Total Reports:"
        :subtitleContent="this.swiftReports"
        :tableData="this.swiftData"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
import axios from 'axios';
import ReportPanel from "../components/content/reportPanel.vue";

export default {
  async mounted() {
    let dasekeResult = await axios.get("http://localhost:3000/dasekeData");
    this.dasekeData = dasekeResult.data;

    let swiftResult = await axios.get("http://localhost:3000/swiftData");
    this.swiftData= swiftResult.data;
  },
  components: {
    ReportPanel,
  },
  data() {
    return {
      dasekeData: [],
      swiftData: [],
    }
  },
  computed: {
    dasekeReports() {
      return this.dasekeData.length;
    },
    swiftReports() {
      return this.swiftData.length;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/components/dashboard.scss";
</style>
