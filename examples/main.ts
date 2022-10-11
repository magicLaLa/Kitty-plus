import Vue from 'vue';
import App from './app.vue';
import MedexComponents from "medex-plus";

Vue.config.productionTip = false;

Vue.use(MedexComponents);

new Vue({
  render: (h: any) => h(App)
}).$mount('#app');