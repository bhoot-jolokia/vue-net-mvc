import Vue from 'vue'
import Add from "@/pages/add/Add";

Vue.config.productionTip = false

new Vue({
  render: h => h(Add, {apiBaseUrl: 'http://localhost:5000', firstValue: 1, secondValue: 2}),
}).$mount('#addContainer')
