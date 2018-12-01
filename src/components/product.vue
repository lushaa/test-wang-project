<template>
    <div class="product">
        <ul class="list">
            <li v-for="(item, index) in list" :key="index">
                <div class="img">
                    <img :src="'imgs/ziluyou/' + item.src" alt="">
                    <div class="button" @click="goBack">
                        <p></p>
                    </div>
                </div>
                <div class="box">
                    <h3>￥{{item.price}}<span>原价￥{{item.originPrice}}</span></h3>
                    <p class="title">{{item.description}}</p>
                </div>
                <div class="type">
                    <p class="first"><span>唯品花</span> <span>{{item.validateTime}}</span></p>
                    <P class="two"><span>满减</span> <span>{{item.useTime}}</span></P>
                    <p class="sethe"><span>唯品币</span> <span>{{item.weipin}}</span></p>
                </div>
                <div class="guige">
                    <h4>规格</h4>
                    <p>均码</p>
                </div>
                <div class="peisong">
                    <h4>配送至</h4>
                    <p>请选择地址</p>
                </div>
                <div class="sanp">
                    <span>唯品会发货</span>
                    <span>七天包退</span>
                    <span>退货返运费</span>
                </div>
                <div class="box1">
                    唯品会郑重承诺百分百正品
                </div>
                <div class="shop">
                    <h2>商品信息</h2>
                    <p>{{item.rules}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<style type="text/css" lang="less">
    .product {
        .list {
            li {
                .img {
                    background-color: #000;
                    position: relative;
                    padding: 10px 10px 5 10px;
                    img {
                        display: block;
                        width: 100%;
                        height: 337px;
                    }
                    .button {
                        position: absolute;
                        top: 6px;
                        left: 10px;
                        background-color: #7d7d7d;
                        height: 10px;
                        padding: 10px 0;
                        width: 30px;
                        border-radius: 50%;
                       p {
                        margin: 0 auto;
                        border-top: 1px solid #fff;
                        border-left: 1px solid #fff;
                        width: 10px;
                        height: 10px;
                        // position: relative;
                        // top: 4px;
                        // left: 5px;
                        transform: rotate(-45deg);
                       }
                    }
                }
                .box {
                    background-color: #fff;
                    padding-left: 8px;
                    padding-right: 10px;
                    h3 {
                        color: #666;
                        height: 40px;
                        line-height: 40px;
                        font-size: 30px;
                        font-weight: normal;
                        span {
                            color: #ccc;
                            font-size: 15px;
                            line-height: 40px;
                            height: 40px;
                            position: relative;
                            top: -5px;
                            left: 8px;
                        }
                    }
                    .title {
                        font-size: 12px;
                        line-height: 20px;
                        color: #333;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #666;
                    }
                }
                .type {
                    padding: 10px;
                    .first {
                        span {
                            padding: 0 3px;
                            &:first-child {
                                color: #e4007f;
                                border: 1px solid #e4007f;
                                font-size: 12px;
                                height: 18px;
                                line-height: 18px;
                                margin-right: 15px;
                            }
                            &:last-child {
                                color: #666;
                                font-size: 12px;
                                line-height: 18px;
                                height: 18px;

                            }
                        }
                    }
                    .two {
                        margin-top: 10px;
                        span {
                            padding: 0 3px;
                            &:first-child {
                                color: #5682c1;
                                border: 1px solid #5682c1;
                                font-size: 12px;
                                height: 18px;
                                line-height: 18px;
                                margin-right: 27px;
                            }
                            &:last-child {
                                color: #666;
                                font-size: 12px;
                                line-height: 18px;
                                height: 18px;

                            }
                        }
                    }
                     .sethe {
                        margin-top: 10px;
                        span {
                            padding: 0 3px;
                            &:first-child {
                                color: #5682c1;
                                border: 1px solid #5682c1;
                                font-size: 12px;
                                height: 18px;
                                line-height: 18px;
                                margin-right: 16px;
                            }
                            &:last-child {
                                color: #666;
                                font-size: 12px;
                                line-height: 18px;
                                height: 18px;

                            }
                        }
                    }
                }
                .guige{
                    padding: 20px;
                    h4 {
                        color:#666;
                        font-size: 14px;
                        height: 20px;
                        line-height: 20px;
                    }
                    p {
                        margin-top: 20px;
                        font-size: 12px;
                        color:#333;
                        height: 30px;
                        line-height: 30px;
                        width: 80px;
                        border: 1px solid #dd3d97;
                        text-align: center;
                    }
                }
                .peisong {
                    padding: 20px;
                    h4 {
                        color:#666;
                        font-size: 14px;
                        height: 20px;
                        line-height: 20px;
                    }
                    p {
                        margin-top: 5px;
                        font-size: 12px;
                        color:#333;
                        height: 30px;
                        line-height: 30px;
                    }
                }
                .sanp {
                    margin-bottom: 30px;
                    padding: 20px;
                    span {
                        font-size: 12px;
                        margin-right: 14px;
                        color: #333;
                    }
                }
                .box1 {
                    padding: 0 10px;
                    width: 80%;
                    margin: 0 auto;
                    border: 1px solid #dac59c;
                    text-align: center;
                    height: 80px;
                    line-height: 80px;
                    color: #c4a15a;
                    background-color: #f7f4ea;
                    font-size: 20px;
                }
                .shop {
                    height: 600px;
                    margin-top: 20px;
                    padding: 20px;
                    h2 {
                        color:#666;
                        font-size: 14px;
                        height: 20px;
                        line-height: 20px;
                    }
                    p {
                        margin-top: 20px;
                        font-size: 12px;
                        color:#333;
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
        data () {
            return {
                list: []
            }
        },
        created() {
            this.$http.get('data/product.json')
            .then(({data}) => {
                this.list = data
            })
        },
        methods: {
            goBack() {
                history.go(-1)
            }
        }
    }
</script>