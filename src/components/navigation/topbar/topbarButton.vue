<template>
  <li>
    <router-link :to="to" class="top-nav-option">
      <component :is="currentIcon" class="top-nav-option__icon"
      :class="{ 'topbar-highlight': currentIcon === 'LogoutIcon' }">
      </component>
    </router-link>
  </li>
</template>

<script>
import { mapState } from 'vuex';

import UserIcon from 'vue-ionicons/dist/ios-contact.vue';
import SettingsIcon from 'vue-ionicons/dist/ios-cog.vue';
import LogoutIcon from 'vue-ionicons/dist/ios-log-out.vue';

export default {
  components: {
    UserIcon,
    SettingsIcon,
    LogoutIcon,
  },
  computed: {
    ...mapState,
  },
  props: {
    to: {
      required: false,
      default: '/',
    },
    currentIcon: {
      type: String,
      default: UserIcon,
    },
    colour: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>

</style>
