<template>
  <div class="dash-content-pie-chart toned">
    <div class="dash-content-pie-chart__intro">
      <span class="dash-content-pie-chart__desc">{{ title }}</span>
      <span class="dash-content-pie-chart__desc-dark">{{ subtitle }}</span>
      <span class="dash-content-pie-chart__stats">
        <div class="dash-content-pie-chart__num-stats">
           <span>{{ num1 }}</span>
           <span class="dash-content-pie-chart__num-stats__text">{{ priority1 }}</span>
        </div>
        <div class="dash-content-pie-chart__num-stats">
           <span>{{ num2 }}</span>
           <span class="dash-content-pie-chart__num-stats__text">{{ priority2 }}</span>
        </div>
        <div class="dash-content-pie-chart__num-stats">
           <span>{{ num3 }}</span>
           <span class="dash-content-pie-chart__num-stats__text">{{ priority3 }}</span>
        </div>
      </span>
    </div>
    <div class="chart-canvas-pie">
      <canvas ref="chart" class="cover-pie" />
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
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
    num1: {
      type: String,
      default: '',
    },
    num2: {
      type: String,
      default: '',
    },
    num3: {
      type: String,
      default: '',
    },
    priority1: {
      type: String,
      default: '',
    },
    priority2: {
      type: String,
      default: '',
    },
    priority3: {
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
      type: 'doughnut',
      data: this.chartData,
      options: {
        legend: { display: false, labels: { fontColor: '#606a96' } },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ display: false, ticks: { fontColor: '#606a96' } }],
          yAxes: [{ display: false, ticks: { max: 20, fontColor: '#606a96' } }],
        },
      },
    });
  },
};
</script>

<style>
</style>
