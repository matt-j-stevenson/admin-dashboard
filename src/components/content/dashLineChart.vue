<template>
  <div class="dash-content-xlg-thick toned">
    <div class="dash-content-xlg-thick__intro">
      <span class="dash-content-xlg-thick__desc">{{ title }}</span>
      <span class="dash-content-xlg-thick__desc-dark">{{ subtitle }}</span>
      <span class="dash-content-xlg-thick__stats">{{ num }}</span>
      <span class="dash-content-xlg-thick__stats__desc">
        <span class="dash-content-xlg-thick__stats__desc__text">{{ desc }}</span>
      </span>
      <span class="dash-content-xlg-thick__stats__desc__detail-pos">
        {{ stat }}
        <arrow-down-icon class="dash-content-xlg-thick__icon" />
      </span>
    </div>
    <div class="chart-canvas">
      <canvas ref="chart" class="cover" />
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';
import ArrowDownIcon from 'vue-ionicons/dist/ios-arrow-dropdown-circle.vue';

export default {
  components: {
    ArrowDownIcon,
  },
  data() {
    return {
      lineChart: null,
    };
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    num: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    stat: {
      type: String,
      default: '',
    },
    chartData: {
      type: Object,
      default: () => {},
    },
  },

  async mounted() {
    Chart.defaults.global.elements.point.radius = 0;
    this.lineChart = new Chart(this.$refs.chart, {
      type: 'line',
      data: this.chartData,
      options: {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false, ticks: { max: 25 } }],
        },
      },
    });
  },
};
</script>

<style>
</style>
