import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ChartChart1 from './plugin/CreateChart1.js'
import ChartChart2 from './plugin/CreateChart2.js'
import RemoveChart from './plugin/RemoveChart.js'

const app = createApp(App);
app.use(store)
app.use(router);
app.use(ChartChart1)
app.use(ChartChart2)
app.use(RemoveChart)
app.mount('#app');
