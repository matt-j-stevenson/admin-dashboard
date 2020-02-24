<template>
      <router-link :to="to" class="dash-content-xlg" :class="colour">
        <div class="dash-content-xlg__icon">
        <component :is="currentIcon" class="dash__icon"></component>
        <span class="dash-content-xlg__title">
          {{ title }}
        </span>
        </div>
        <div class="dash-content-xlg__desc">
          {{ num }}
        </div>
        <div class="dash-content-xlg__month">
          {{ desc }}
        </div>
      </router-link>
</template>

<script>
import ChartIcon from 'vue-ionicons/dist/ios-pie.vue';
import ReportIcon from 'vue-ionicons/dist/ios-book.vue';
import ClientIcon from 'vue-ionicons/dist/ios-people.vue';
import AlertIcon from 'vue-ionicons/dist/ios-warning.vue';

export default {
  components: {
    ClientIcon,
    ChartIcon,
    ReportIcon,
    AlertIcon,
  },
  props: {
    to: {
      required: false,
      default: '/',
    },
    colour: {
      type: String,
      default: 'indigo',
    },
    title: {
      type: String,
      default: 'N/A',
    },
    num: {
      type: String,
      default: '0',
    },
    desc: {
      type: String,
      default: 'Nothing to show',
    },
    currentIcon: {
      type: String,
      default: 'ClientIcon',
    },
  },
};
</script>

<style>
</style>
