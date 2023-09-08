import { createApp } from 'vue'
import App from './FirstDashboard.vue'
import router from './router'
import store from './store'
import ChartTools from './plugin/ChartTools.js'

createApp(App)
  .use(store)
  .use(router)
  .use(ChartTools)
  .mount('#app');
