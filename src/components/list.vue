<template>
    <div class="list">
        <ul class="ul">
            <li v-for="(item, index) in image" :key="index">
                <img :src="item.src">
            </li>
        </ul>
        <ul class="ullist">
            <li v-for="(item, index) in lists" :key="index">
                <p>{{item.title}}</p>
            </li>
        </ul>
        <h4 class="hufu">护肤优选</h4>
        <ul class="detail">
            <router-link v-for="(item, index) in list" :key="index" :to="'/list/product/' + item.id" tag="li">
                <div class="imgs">
                    <img :src="'imgs/ziluyou/' + item.url" alt="">
                </div>
                <div class="right">
                    <p class="title">{{item.title}}</p>
                    <p class="qian">￥{{item.price}} <span>新人秒杀价</span></p>
                    <p class="huiyuan">原唯品会员价 ￥{{item.sales}}</p>
                    <p class="span">
                        <span class="first"></span>
                        <span class="last">以抢{{item.originPrice}}件</span>
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<style type="text/css" lang="less">
    .list {
        padding-top: 55px;
        background-color: #f3f4f5;
        .ul {
            margin-bottom: 1px;
            li {
                width: 100%;
                img {
                    width: 100%;
                    height: 200px;
                    display: block;
                }
            }
        }
        .ullist {
            overflow: hidden;
            background-color: #333333;
            li {
                background-color: #000;
                margin-right: 1px;
                margin-bottom: 1px;
                width: 16.4%;
                float: left;
                height: 30px;
                line-height: 30px;
                text-align: center;
                box-sizing: border-box;
                color: #fff;
                font-size: 14px;
                &:nth-child(6) {
                    margin-right: 0;
                }
                &:last-child {
                    margin-right: 0;
                }
                &:first-child {
                    background-color: #fff;
                    color: #000;
                }
            }
        }
        .hufu {
            height: 40px;
            line-height: 40px;
            font-size: 15px;
            color: #f08986;
            text-align: center;
            background-color: #fff;
            margin-bottom: 10px;
        }
        .detail {
            li {
                paddding: 10px 0 0 10px;
                background-color: #fff;
                margin-bottom: 10px;
                overflow: hidden;
                width: 100%;
                .imgs {
                    padding: 20px;
                    padding-right: 0;
                    margin-right: 10px;
                    width: 122px;
                    float: left;
                    img {
                    width: 120px;
                    height: 130px;
                    }
                }
                .right {
                    padding-top: 42px;
                    float: left;
                    p {
                        font-size: 12px;
                        width: 149.63px;
                    }
                    .title {
                        color: #000;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    .qian {
                        color: #de91d7;
                        font-size: 16px;
                        height: 25px;
                        line-height: 25px;
                        span {
                            font-size: 13px;
                        }
                    }
                    .huiyuan {
                        font-size: 13px;
                        height: 20px;
                        line-height: 20px;
                        color: #585c64;
                    }
                    .span {
                        height: 20px;
                        overflow: hidden;
                        .first {
                            display: block;
                            width: 65px;
                            height: 5px;
                            background-color: #f54b50;
                            float: left;
                            border-radius: 70px;
                            position: relative;
                            top: 7.5px;
                        }
                        .last {
                            margin-left: 7px;
                            color: #a4a4c6;
                            text-align: center;
                        }
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
                lists: [
                    {id: 1, title: '护肤'},
                    {id: 2, title: '彩妆'},
                    {id: 3, title: '内衣'},
                    {id: 4, title: '母婴'},
                    {id: 5, title: '鞋包'},
                    {id: 6, title: '零食'},
                    {id: 7, title: '家电'},
                    {id: 8, title: '家用'},
                    {id: 9, title: '女装'},
                    {id: 10, title: '男装'},
                    {id: 11, title: '超市'},
                    {id: 12, title: '海淘'}
                ],
                image: [
                    {id: 1, src: 'imgs/8.jpg'}
                ],
                list: []
            }
        },
        created() {
            this.$http.get('data/home.json')
            .then(({data}) => {
                this.list = data.ad
            })
        }
    }
</script>