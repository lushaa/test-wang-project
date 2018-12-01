<template>
    <div class="detail">
        <ul class="list">
            <li v-for="(item, index) in good" :key="index">
                <img :src="item.src" alt="">
            </li>
        </ul>
        <h3>专享1重礼·全场满38元包邮</h3>
        <ul class="twolist">
            <router-link v-for="(item, index) in sast" :key="index" tag="li" :to="'/detail/introdu/' + item.id">
                <img :src="'imgs/ziluyou2/' + item.img" alt="">
                <p>{{item.title}}</p>
            </router-link>
        </ul>
        <h4>专享2重礼 · 新人专享 限时秒杀</h4>
        <ul class="threelist">
            <li v-for="(item, index) in select" :key="index">
                <img :src="'imgs/ziluyou2/' + item.img" alt="">
                <div class="bottom">
                    <p class="first">{{item.title}}</p>
                    <p class="two">满<span>{{item.originPrice}}</span>减<span>{{item.price}}</span></p>
                    <p class="four">￥{{item.tcv}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<style type="text/css" lang="less">
    .detail {
        .list {
            li {
                width: 100%;
                img {
                    display: block;
                    width: 100%;
                    height: 180px;
                }
            }
        }
        h3 {
            height: 50px;
            width: 100%;
            line-height: 50px;
            color: #d98849;
            text-align: center;
            font-size: 16px;
        }
        .twolist {
            background-color: #fffab8;
            overflow: hidden;
            padding: 10px 5px;
            li {
                float: left;
                width: 31%;
                margin-right: 8px;
                margin-bottom: 5px;
                &:nth-child(3) {
                    margin-right: 0;
                }
                 &:first-child {
                    margin-left: 4px;
                }
                &:nth-child(6) {
                    margin-right: 0;
                }
                &:nth-child(9) {
                    margin-right: 0;
                }
                img {
                    width: 100%;
                    height: 130px;
                    display: block;
                }
                p {
                    width: 100%;
                    height: 20px;
                    background-color: rgba(255,255,255,0.7);
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                    line-height: 20px;
                }
                &:first-child, &:nth-child(4), &:nth-child(7){
                    margin-left: 5px;
                }
            }
        }
        h4 {
            height: 50px;
            width: 100%;
            line-height: 50px;
            color: #d98849;
            text-align: center;
            font-size: 16px;
        }
        .threelist {
            background-color: #ccc;
            li {
                background-color: #fff;
                margin-bottom: 10px;
                img {
                    width: 100%;
                    height: 300px;
                    display: block;
                }
                .bottom {
                    padding: 5px;
                    .first {
                        text-align: center;
                        color: #666;
                        height: 25px;
                        line-height: 25px;
                        font-size: 15px;
                    }
                    .two {
                        text-align: center;
                        height: 20px;
                        font-size: 14px;
                        color: #ccc;
                        span {
                            color: #ec59ab;
                        }
                    }
                    .four {
                        text-align: center;
                        font-size: 16px;
                        color: #ec59ab;
                        height: 20px;
                        line-height: 20px;
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
                    sast: [],
                    select: [],
                    good: [
                        {id: 1, src: 'imgs/2.jpg'}
                    ]
                }
            },
            created() {
            this.$http.get('data/home.json')
            .then(({data}) => {
                this.sast = data.fenlei
                this.select = data.list
            })
        }
    }
</script>