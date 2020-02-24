<template>
  <div class="side-nav-wrapper"
  :class="{'is-open': $store.state.sideBarOpen}">

    <div class="panel-top" @click="toggleSideNav">
      <div class="panel-top__icon">
        <menu-icon  />
      </div>
      <img class="panel-top__img" v-show="$store.state.isShown"
           src="../../../assets/img/admin-logo.svg" alt="sensata-logo" />
    </div>

    <ul class="side-nav-options">
      <side-bar-button to="/" currentIcon="DashboardIcon" title="Dashboard" />
      <side-bar-button to="/clients" currentIcon="ClientIcon" title="Clients" />
      <side-bar-button to="/reports" currentIcon="ReportIcon" title="Reports" />
      <!-- <side-bar-button to="/charts" currentIcon="ChartIcon" title="Charts" />
      <side-bar-button to="/alerts" currentIcon="AlertIcon" title="Alerts" /> -->
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import MenuIcon from 'vue-ionicons/dist/ios-menu.vue';

import SideBarButton from './sidebarButton.vue';

export default {
  components: {
    SideBarButton,
    MenuIcon,
  },
  computed: {
    ...mapState,
  },
  methods: {
    toggleSideNav() {
      this.$store.commit('TOGGLE_SIDEBAR');
      this.$store.state.isShown = !this.$store.state.isShown;
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/components/sidebar.scss";
</style>
