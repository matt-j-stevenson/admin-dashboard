<template>
  <div class="dash"
  :class="[
  this.$store.state.start ? 'is-start' :
  this.$store.state.isOpening ? 'is-open' :
  !this.$store.state.isOpening ? 'is-closed' : ''
  ]">

  <div class="dash-view"></div>

  </div>
</template>

<script>

export default {
};
</script>

<style lang="scss">
@import "../styles/components/dashboard.scss";
</style>
