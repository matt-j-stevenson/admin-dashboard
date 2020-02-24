import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: true,
    isShown: true,
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
});
