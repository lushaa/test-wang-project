<template>
    <div class="introdu">
        <div class="toubu">
            <ul class="good">
                <li v-for="(item, index) in tast" :key="index" @click="orderList(item.id)">
                    <span>{{item.tite}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.sg}}</span>
                </li>
            </ul>
            <ul class="listfu">
                <li v-for="(item, index) in deaList" :key="index">
                    <img :src="'imgs/introdu/' + item.url" alt="">
                    <div class="top">
                        <p>￥{{item.price}} <span>原价{{item.sales}}</span></p>
                        <h4>{{item.title}}</h4>
                        <p class="jia" @click="addNum(item); $store.commit('addPrice', item.price)">+</p>
                        <h3>限时优惠{{item.originPrice}}元</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" lang="less">
    .introdu {
        margin: 10px 0;
        background-color: #fff;
        padding-top: 55px;
        .good {
            // overflow: hidden;
            padding: 5px;
            li {
                float: left;
                font-size: 14px;
                color: #666;
                width: 30%;
                border-right: 1px solid #333;
                box-sizing: border-box;
                margin-right: 5px;
                text-align: center;
            }
        }
        .listfu {
            overflow: hidden;
            padding-left: 3px;
            width: 100%;
            li {
                margin-right: 5px;
                width: 48%;
                float: left;
                padding:10px 5px 10px 10px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                img {
                    width: 100%;
                    height: 170px;
                }
                .top {
                    padding-right: 5px;
                    p {
                        height: 15px;
                        height: 25px;
                        line-height: 25px;
                        color: #f04383;
                        span {
                            color: #666;
                            font-size: 13px;
                        }
                    }
                    h4 {
                        color: #666;
                        line-height: 18px;
                        font-size: 12px;
                        font-weight: normal;
                    }
                    h3 {
                        color: #666;
                        line-height: 25px;
                        font-size: 12px;
                        text-align: right;
                    }
                    .jia {
                        width: 15px;
                        height: 15px;
                        float: left;
                        border: 1px solid #f04383;
                        border-radius: 50%;
                        font-size: 12px;
                        text-align: center;
                        line-height: 13px;
                        margin-top: 5px;
                        color: #666;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
        data() {
            return {
                tast: [
                    {id: 1, tite: '价格'},
                    {id: 2, title: '优惠'},
                    {id: 3, sg: '更多'}
                ],
                zendx: []
            }
        },
        computed: {
            deaList() {
                return this.zendx.filter(
                    item =>
                        item.title.indexOf(this.$store.state.search) >= 0
                )
            }
        },
        created () {
            this.$http.get('data/home.json')
            .then(({data}) => {
                this.zendx = data.pd
            })
        },
        methods: {
            orderList(id) {
                this.zendx.sort((a, b) => {
                    if ( id === 2 ) {
                        return ((a.sales - a.price) - (b.sales - b.price))
                    }
                    return a.price - b.price;
                })
            },
            addNum(item) {
                item.num++
            }
        }
    }
</script>