<template>
  <div class="dash-content-xlg-thicker toned">
    <div class="dash-content-xlg-thicker__intro">
      <span class="dash-content-xlg-thicker__desc">{{ title }}</span>
      <span class="dash-content-xlg-thicker__desc-dark">{{ subtitle }}</span>
    </div>
    <div class="chart-canvas-alt">
      <canvas ref="chart" class="cover-alt" />
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
      type: 'bar',
      data: this.chartData,
      options: {
        legend: { display: true, labels: { fontColor: '#606a96' } },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ display: true, ticks: { fontColor: '#606a96' } }],
          yAxes: [{ display: true, ticks: { max: 15, fontColor: '#606a96', stepSize: 5 } }],
        },
      },
    });
  },
};
</script>

<style>
</style>
