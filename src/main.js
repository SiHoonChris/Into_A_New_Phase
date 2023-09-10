import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ChartChart from './plugin/CreateChart.js'
import RemoveChart from './plugin/RemoveChart.js'

const app = createApp(App);
app.use(store)
app.use(router);
app.use(ChartChart)
app.use(RemoveChart)
app.mount('#app');
