<template>
  <!-- Main Dash Content -->
  <div class="dash" :class="{'is-open': $store.state.sideBarOpen}">
    <div class="dash-view">
      <client-panel
        title="Daseke Inc"
        src="img/clients/daseke.png"
        subtitle="Transport Company"
        desc="33 Reports"
      />
      <client-panel
        title="Swift Transportation"
        src="img/clients/swift.png"
        subtitle="Transport Company"
        desc="29 Reports"
      />
      <client-panel
        title="Pepsico "
        currentImg="daseke.png"
        src="img/clients/pepsico.svg"
        subtitle="Food Company"
        desc="24 Reports"
      />
    </div>
    <div class="dash-view">
      <client-panel
        title="Walmart"
        src="img/clients/walmart.png"
        subtitle="Retail Company"
        desc="0 Reports"
      />
      <client-panel
        title="United Parcel Service (UPS)"
        src="img/clients/ups.png"
        subtitle="Logistics Company"
        desc="0 Reports"
      />
      <client-panel
        title="Verizon Wireless"
        src="img/clients/verizon4.png"
        subtitle="Telecommunications Company"
        desc="0 Reports"
      />
    </div>
    <div class="dash-view">
      <client-panel
        title="Qwest Corportation"
        src="img/clients/qwest.png"
        subtitle="Telecommunications Company"
        desc="0 Reports"
      />
      <client-panel
        title="ComCast"
        src="img/clients/comcast.svg"
        subtitle="Transport Company"
        desc="0 Reports"
      />
      <client-panel
        title="AT&T"
        src="img/clients/at&t.png"
        subtitle="Food Company"
        desc="0 Reports"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
import ClientPanel from "../components/content/clientPanel.vue";

export default {
  components: {
    ClientPanel
  }
};
</script>

<style lang="scss">
@import "../styles/components/dashboard.scss";
</style>
