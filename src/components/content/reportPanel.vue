<template>
  <div class="dash-content-report-panel toned">
    <div class="dash-content-report-panel__intro">
      <!-- <span class="dash-content-report-panel__desc">{{ title }}</span> -->
      <span class="dash-content-report-panel__stats">
        <img :src="src"
        class="dash-content-report-panel__img" />
      </span>
      <div class="subtitle">
         <span class="dash-content-report-panel__desc-dark">{{ subtitle }}</span>
        <span class="dash-content-report-panel__desc-num">{{ subtitleContent }}</span>
      </div>
    </div>
    <table class="dash-content-report-panel__table">
      <tr>
        <th class="dash-content-report-panel__table-heading"></th>
        <th class="dash-content-report-panel__table-heading">{{ status }}</th>
        <th class="dash-content-report-panel__table-heading">{{ reportId }}</th>
        <th class="dash-content-report-panel__table-heading">{{ client }}</th>
        <th class="dash-content-report-panel__table-heading">{{ dateCreated }}</th>
        <th class="dash-content-report-panel__table-heading">{{ daysActive }}</th>
        <th class="dash-content-report-panel__table-heading">{{ gps }}</th>
        <th class="dash-content-report-panel__table-heading">{{ totalAlerts }}</th>
        <th class="dash-content-report-panel__table-heading"></th>
        <!-- <th class="dash-content-report-panel__table-heading"></th> -->
      </tr>
      <tr v-for="td in tableData" :key="td.id">
        <td class="dash-content-report-panel__table-detail">
          <div class="active-status">
            <tick-icon v-if="td.status === 'Active'" class="dash-content-report-panel__icon tick" />
            <idle-icon v-else-if="td.status === 'Idle'"
              class="dash-content-report-panel__icon idle" />
            <cross-icon v-else class="dash-content-report-panel__icon cross" />
            </div>
        </td>
        <td class="dash-content-report-panel__table-detail">
            <div class="active-status-text">
              <span class="dash-content-report-panel__icon__text"><span class="gps" :class="{
          'tick': td.status === 'Active',
          'idle': td.status === 'Idle',
          'cross': td.status === 'Offline' }">
        {{ td.status }}</span></span>
          </div>
        </td>
        <td class="dash-content-report-panel__table-detail">{{ td.id }}</td>
        <td class="dash-content-report-panel__table-detail">{{ td.client }}</td>
        <td class="dash-content-report-panel__table-detail">{{ td.dateCreated }}</td>
        <td class="dash-content-report-panel__table-detail">{{ td.daysActive }}</td>
        <td class="dash-content-report-panel__table-detail"><span class="gps" :class="{
          'tick': td.gps === 'Active',
          'idle': td.gps === 'Inactive' }">
        {{ td.gps }}</span></td>
        <td class="dash-content-report-panel__table-detail">
        <span :class="{
          'plain': td.totalAlerts === 0,
          'idle': td.totalAlerts > 0 && td.totalAlerts <= 5,
          'cross': td.totalAlerts > 5 }">
        {{ td.totalAlerts }}</span>
        </td>
        <td class="dash-content-report-panel__table-detail">
          <div class="dash-content-report-panel__button">
            <button class="dash-content-report-panel__view-btn">
              <search-icon />
            </button>
          </div>
        </td>
        <!-- <td class="dash-content-report-panel__table-detail">
          <div class="dash-content-report-panel__button">
            <button class="dash-content-report-panel__delete-btn"
            @click="deleteReport">
              <trash-icon />
            </button>
          </div>
        </td> -->
      </tr>
    </table>
    <div class="bottom-nav">
      <div class="dash-content-report-panel__page-count">
        <!-- MAKE DYNAMIC -->
        Showing 1 of 3
      </div>
      <div class="dash-content-report-panel__page-buttons">
        <!-- MAKE DYNAMIC -->
        <div class="dash-content-report-panel__page-buttons__all">
        {{ num1 }}
      </div>
      <div class="dash-content-report-panel__page-buttons__all">
        {{ num2 }}
      </div>
      <div class="dash-content-report-panel__page-buttons__all">
        {{ num3 }}
      </div>
      </div>
      <div class="dash-content-report-panel__page-buttons">
      <div class="dash-content-report-panel__page-buttons__back">
        {{ prev }}
      </div>
      <div class="dash-content-report-panel__page-buttons__next">
        {{ next }}
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import TickIcon from 'vue-ionicons/dist/ios-checkmark-circle.vue';
import CrossIcon from 'vue-ionicons/dist/ios-close-circle.vue';
import IdleIcon from 'vue-ionicons/dist/ios-remove-circle.vue';
import TrashIcon from 'vue-ionicons/dist/ios-trash.vue';
import SearchIcon from 'vue-ionicons/dist/ios-search.vue';
/* eslint-disable  */
export default {
  methods: {
    deleteReport() {

    },
  },
  components: {
    TickIcon,
    CrossIcon,
    IdleIcon,
    TrashIcon,
    SearchIcon,
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: '',
    },
    subtitleContent: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Status:"
    },
    reportId: {
      type: String,
      default: "Report ID:"
    },
    client: {
      type: String,
      default: "Client:"
    },
    dateCreated: {
      type: String,
      default: "Date Created:"
    },
    daysActive: {
      type: String,
      default: "Days Active:"
    },
    gps: {
      type: String,
      default: "GPS:"
    },
    totalAlerts: {
      type: String,
      default: "Total Alerts:"
    },
    src: {
      type: String,
      default: '',
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    prev: {
      type: String,
      default: 'Prev',
    },
    next: {
      type: String,
      default: 'Next',
    },
    num1: {
      type: String,
      default: '1',
    },
    num2: {
      type: String,
      default: '2',
    },
    num3: {
      type: String,
      default: '3',
    },
  }
};
</script>

<style>
</style>
