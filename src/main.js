import Vue from 'vue'
import axios from "axios";
import router from './router/router.js'
import store from './store/store.js';
import   '../remCounted.js';
import   "../app.less";
import elementUi from '../node_modules/element-ui';
import mintUi from '../node_modules/mint-ui';
import '../node_modules/element-ui//lib/theme-chalk/index.css'
import '../node_modules/mint-ui//lib/style.css'
Vue.use(elementUi);
Vue.use(mintUi);
Vue.prototype.$http = axios;
new Vue({
    router,
    store,
    el: '#app',
    data: {
        msg: ''
    },
    template: '#tpl',
    methods: {
        showSearchResult() {
            this.$store.commit('changeSearchValue', this.msg);
            // 清空搜索框
            this.msg = ''
        }
    }
})
