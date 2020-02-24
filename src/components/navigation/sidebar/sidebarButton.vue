<template>
  <li>
    <router-link :to="to" exact class="side-nav-option">
      <component :is="currentIcon" class="side-nav-option__icon"></component>
      <span class="sidenav-content" v-show="$store.state.isShown">{{ title }}</span>
    </router-link>
  </li>
</template>

<script>
import { mapState } from 'vuex';

import MenuIcon from 'vue-ionicons/dist/ios-menu.vue';
import DashboardIcon from 'vue-ionicons/dist/ios-grid.vue';
import ReportIcon from 'vue-ionicons/dist/ios-book.vue';
import ChartIcon from 'vue-ionicons/dist/ios-pie.vue';
import ClientIcon from 'vue-ionicons/dist/ios-people.vue';
import AlertIcon from 'vue-ionicons/dist/ios-warning.vue';

export default {
  components: {
    MenuIcon,
    DashboardIcon,
    ReportIcon,
    ChartIcon,
    ClientIcon,
    AlertIcon,
  },
  computed: {
    ...mapState,
  },
  props: {
    to: {
      required: false,
      default: '/',
    },
    title: {
      type: String,
      default: 'N/A',
    },
    currentIcon: {
      type: String,
      default: DashboardIcon,
    },
  },
};
</script>

<style>
</style>
