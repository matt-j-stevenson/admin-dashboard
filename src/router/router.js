import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardView from '../views/dashboard.vue';
import ClientsView from '../views/clients.vue';
import ReportsView from '../views/reports.vue';
import ChartsView from '../views/charts.vue';
import AlertsView from '../views/alerts.vue';

import ProfileView from '../views/profile.vue';
import SettingsView from '../views/settings.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: DashboardView },

  { path: '/dash', component: DashboardView },
  { path: '/clients', component: ClientsView },
  { path: '/reports', component: ReportsView },
  { path: '/charts', component: ChartsView },
  { path: '/alerts', component: AlertsView },

  { path: '/profile', component: ProfileView },
  { path: '/settings', component: SettingsView },
];

export default new VueRouter({ routes, mode: 'history' });
