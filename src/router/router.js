import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/home.vue";
import List from "../components/list.vue";
import Product from "../components/product.vue";
import Detail from "../components/detail.vue";
import Introdu from "../components/introdu.vue";
import Item from "../components/item.vue";
Vue.use(Router)

let routes = [
    // 首页
    {
        path: '/list',
        component: List
    },
    {
        path: '/list/product/:id',
        component: Product
    },
    // 详情页
    //
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/detail/introdu/:id',
        component: Introdu
    },
    // 默认首页
    {
        path: '*',
        component: Home
    },
    {
        path: '/item',
        component: Item
    }
]
// 实例化
let router = new Router({ routes });
export default router