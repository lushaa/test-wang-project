import Vue from 'vue';
import Vuex, { Store } from 'vuex'
// 安装模块
Vue.use(Vuex);
//创建store
let store = new Store({
    state: {
        search: '',
        price: 0
    },
    // 修改方法
    mutations: {
        changeSearchValue(state, value) {
            state.search = value;
        },
        addPrice(state, price) {
            state.price += +price;
        }
    }
})
// 暴露接口
export default store;