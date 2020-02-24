<template>
  <div class="dash-content-client-panel toned">
    <div class="dash-content-client-panel__intro">
      <span class="dash-content-client-panel__desc">{{ title }}</span>
      <span class="dash-content-client-panel__desc-dark">{{ subtitle }}</span>
      <span class="dash-content-client-panel__stats">
        <img :src="src"
        class="dash-content-client-panel__img" />
      </span>
      <div class="dash-content-client-panel__stats__desc">
        <span class="dash-content-client-panel__stats__desc__text">{{ desc }}</span>
      </div>
    </div>
    <div class="chart-canvas">
      <canvas ref="chart" class="cover" />
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
export default {
/* eslint-disable  */
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    currentImg: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    }
  },
};
</script>

<style>
</style>
