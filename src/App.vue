<template>
  <div id="app">
    <top-bar />
    <main class="content-main">
      <side-bar />
      <router-view></router-view>
    </main>
    </div>
</template>

<script>
import topBar from './components/navigation/topbar/topbar.vue';
import sideBar from './components/navigation/sidebar/sidebar.vue';

export default {
  components: {
    topBar,
    sideBar,
  },
};
</script>

<style lang="scss">
@import "./styles/global/global.scss";

main {
  display: flex;
  max-width: 100%;
}
</style>
