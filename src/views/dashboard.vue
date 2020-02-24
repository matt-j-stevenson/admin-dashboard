<template>
  <!-- Main Dash Content -->
  <div class="dash" :class="{'is-open': $store.state.sideBarOpen}">
    <div class="dash-view">
      <!-- Dash Panels -->
      <!---- Clients -->
      <dash-panel
        to="/clients"
        currentIcon="ClientIcon"
        colour="lightblue"
        title="Clients"
        num="3"
        desc="Total Active Clients"
      />
      <!---- Reports -->
      <dash-panel
        to="/reports"
        currentIcon="ReportIcon"
        colour="altpurple"
        title="Reports"
        num="64"
        desc="Individual Reports"
      />
      <!---- Charts -->
      <dash-panel
        to="/charts"
        currentIcon="ChartIcon"
        colour="altteal"
        title="Charts"
        num="7"
        desc="Analytical Charts"
      />
      <!---- Alerts -->
      <dash-panel
        to="/alerts"
        currentIcon="AlertIcon"
        colour="altpink"
        title="Alerts"
        num="104"
        desc="Total Warning Alerts"
      />
    <!-- !End Dash Panels! -->
    </div>

    <!-- Chart Panels -->
    <div class="dash-view">
      <!---- Pressure Chart -->
      <dash-line-chart
        title="Pressure (PSI) Alerts"
        subtitle="High & Low Pressure Warnings"
        num="21" desc="Pressure Alerts this Year"
        stat="13% Less than Last Year"
        :chartData="pressureData"
       />
       <!---- Temperature Chart -->
       <dash-line-chart
        title="Temperature Alerts"
        subtitle="High & Low Temperature Warnings"
        num="17" desc="Temperature Alerts this Year"
        stat="6% Less than Last Year"
        :chartData="temperatureData"
       />
        <!---- Total Chart -->
        <dash-line-chart
        title="Total Alerts"
        subtitle="All Warning on an Annual Basis"
        num="163" desc="Total Alerts this Year"
        stat="7% Less than Last Year"
        :chartData="totalData"
       />
    </div>
    <div class="dash-view">
      <dash-bar-chart
      title="Pressure & Temperature Alerts"
      subtitle="A Comparison of PSI & Temperature Warnings per Annum"
      :chartData="psiTempData" />
      <dash-pie-chart
      title="Critical Alerts"
      subtitle="A Percentage Comparison of Critical,
      Moderate and Low Priority Alerts Over the Course of a Year"
      num1="15%"
      num2="25%"
      num3="65%"
      priority1="Critical"
      priority2="Moderate"
      priority3="Low"
      :chartData="critAlertData" />
    </div>
  <!-- !End Main Dash Content! -->
  </div>
</template>

<script>
/* eslint-disable  */
import DashPanel from '../components/content/dashPanel.vue';
import DashLineChart from '../components/content/dashLineChart.vue';
import DashBarChart from '../components/content/dashBarChart.vue';
import DashPieChart from '../components/content/dashPieChart.vue';

import { pressureData } from '../data/pressureData';
import { temperatureData } from '../data/tempData';
import { totalData } from '../data/totalData';
import { psiTempData } from '../data/psiTempData';
import { critAlertData } from '../data/critAlertData';

export default {
  data() {
    return {
      pressureData,
      temperatureData,
      totalData,
      psiTempData,
      critAlertData,
      cData: this.critAlertData,
    };
  },
  components: {
    DashPanel,
    DashLineChart,
    DashBarChart,
    DashPieChart,
  },
};
</script>

<style lang="scss">
@import "../styles/components/dashboard.scss";
</style>
