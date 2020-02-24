<template>
  <div class="dash"
  :class="[
  this.$store.state.start ? 'is-start' :
  this.$store.state.isOpening ? 'is-open' :
  !this.$store.state.isOpening ? 'is-closed' : ''
  ]">

    <div class="dash-view">
      <div class="dash-content-xlg-thick toned">
        <canvas ref="chartOne" class="cover" />
      </div>
      <div class="dash-content-xlg-thick toned">
        <canvas ref="chartTwo" class="cover" />
      </div>
      <div class="dash-content-xlg-thick toned">
         <canvas ref="chartThree" class="cover" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  /* eslint-disable  */
  async mounted() {
    var ctx = this.$refs.chartOne.getContext("2d");

    this.lineChart = new Chart(ctx, {
      type: "line",

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Low Pressure Alerts',
            data: [12, 9, 8, 1, 3, 0, 0, 2, 4, 5, 13, 14, 26],
            backgroundColor: [
                'rgb(109, 43, 255, 0.5)',
            ],
           
            borderWidth: 1
        },
        {
            label: 'High Pressure Alerts',
            data: [16, 7, 1, 0, 0, 0 , 6, 8, 11, 6, 9, 10],
            backgroundColor: [
                'rgb(250, 32, 255, 0.5)',
            ],
           
            borderWidth: 1
        }
        ]
    },
    options: {
      legend: {
            labels: {
                fontColor: '#fff',
                fontSize: 12,
            }
        },
       elements: {
          point:{
              radius: 0
          }
      },
      hover: { mode: null },
      responsive: true,
      maintainAspectRatio: false,
        //  legend: {
        //     display: false,
        //  },
         tooltips: {
            enabled: false
         },
         scales:{
            xAxes: [{
                display: true,
            }],
           yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                max: 25,
            }
        }]
        }
    }
    });

    var ctx = this.$refs.chartTwo.getContext("2d");

    this.lineChart = new Chart(ctx, {
      type: "line",

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Low Temp Alerts',
            data: [12, 6, 7, 6, 3, 2, 0, 0, 1, 5, 7, 18],
            backgroundColor: [
                'rgb(0, 211, 183, 0.5)',
            ],
           
            borderWidth: 1
        },
        {
            label: 'High Temp Alerts',
            data: [0, 1, 0, 2, 3, 16, 10, 14, 8, 4, 2, 1],
            backgroundColor: [
                'rgb(0, 218, 255, 0.5)',
            ],
           
            borderWidth: 1
        }
        ]
    },
    options: {
      legend: {
            labels: {
                fontColor: '#fff',
                fontSize: 12,
            }
        },
       elements: {
          point:{
              radius: 0
          }
      },
      hover: { mode: null },
      responsive: true,
      maintainAspectRatio: false,
        //  legend: {
        //     display: false,
        //  },
         tooltips: {
            enabled: false
         },
         scales:{
            xAxes: [{
                display: true,
            }],
           yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                max: 25,
            }
        }]
        }
    }
    });

    var ctx = this.$refs.chartThree.getContext("2d");

    this.lineChart = new Chart(ctx, {
      type: "line",

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Annual Alerts',
            data: [32, 21, 14, 12, 17, 14, 22, 12, 10, 5, 9, 16],
            backgroundColor: [
                'rgb(75, 123, 255, 0.25)',
            ],
            borderWidth: 3,
            borderColor: 'rgb(75, 123, 255, 1)',

        },
        ]
    },
    options: {
      legend: {
            labels: {
                fontColor: '#fff',
                fontSize: 12,
            }
        },
       elements: {
          point:{
              radius: 0
          }
      },
      hover: { mode: null },
      responsive: true,
      maintainAspectRatio: false,
        //  legend: {
        //     display: false,
        //  },
         tooltips: {
            enabled: false
         },
         scales:{
            xAxes: [{
                display: true,
            }],
           yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                max: 50,
            }
        }]
        }
    }
    });
  },
  data() {
    return {
      lineChart: null,
    };
  }
};
</script>

<style lang="scss">
@import "../styles/components/dashboard.scss";
</style>
