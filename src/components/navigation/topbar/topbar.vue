<template>
  <div class="top-nav-wrapper">
    <img class="sensata-logo" src="../../../assets/img/sensata-logo.svg" alt="sensata-logo" />
    <ul class="top-nav-options">
      <top-bar-button to="profile" currentIcon="UserIcon" />
      <top-bar-button to="settings" currentIcon="SettingsIcon" />
      <top-bar-button to="logout" currentIcon="LogoutIcon" />
    </ul>
  </div>
</template>
<script>
import TopBarButton from "./topbarButton.vue";

export default {
  components: {
    TopBarButton
  }
};
</script>
<style lang="scss">
@import "../../../styles/components/topbar.scss";
</style>
