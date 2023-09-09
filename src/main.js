import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ChartTools from './plugin/ChartTools.js'

const app = createApp(App);
app.use(store)
app.use(router);
app.use(ChartTools)
app.mount('#app');
