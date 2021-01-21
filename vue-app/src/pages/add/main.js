import Vue from 'vue'
import Add from "@/pages/add/Add";

Vue.config.productionTip = false

let elementById = document.getElementById('addContainer');
let {apibaseurl, firstvalue, secondvalue} = elementById.dataset;

new Vue({
    render: h => h(Add, {
        props: {
            baseApiUrl: apibaseurl,
            firstValue: parseInt(firstvalue),
            secondValue: parseInt(secondvalue)
        }
    })
}).$mount('#addContainer')