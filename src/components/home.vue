<template>
    <div class="home">
        <ul class="li">
            <router-link v-for="(item, index) in lunbotu" :key="index" :to="'/details/'" tag="li">
                <a href="">{{item.title}}</a>
            </router-link>
        </ul>
        <div class="slide">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item,index) in img" :key="index">
                    <img class="img" :src="item.src" alt="">
                    <h3>{{ item }}</h3>
                </el-carousel-item> 
             </el-carousel>
        </div>
        <ul class="icons">
            <router-link v-for="(item, index) in icons" :key="index" :to="'/list/'" tag="li">
                <img :src="'imgs/icon/' + item.src" alt="">
            </router-link>
        </ul>
        <div class="home-list">
            <h2>今日特卖·每天早上十点 晚上八点更新</h2>
            <router-link v-for="(item, index) in list" :key="index" :to="'/detail/'" tag="li">
                <img :src="'imgs/list/' + item.img" alt="">
                <div class="content">
                    <span>{{item.title}}</span>
                    <span class="right">剩{{item.sales}}{{item.time}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style type="text/css" lang="less">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    .home {
        padding-top: 55px;
        .slide .img {
            height: 160px;
        }
    }
    .home-list {
        overflow: hidden;
        background-color: #f3f4f5;
        h2 {
            font-size: 15px;
            text-align: center;
            padding: 10px 0;
            font-weight: normal;
            color: #333;
            background-color: #fff;
        }
        li {
            margin-bottom: 10px;
            background-color: #fff;
            img {
                width: 100%;
                height: 160px;
                display: block;
            }
            .content {
                font-size: 14px;
                height: 30xp;
                line-height: 30px;
                padding: 5px 10px 10px 20px;
                span {
                    font-weight: bold;
                    font-size: 14px;
                }
                span.right {
                    font-weight: normal;
                    float: right;
                    font-size: 12px;
                    color: #ccc;
                }
            }
        }
    }
    .li {
        overflow: hidden;
        width: 100%;
        li {
            float: left;
            font-size: 13px;
            width: 16.5%;
            height: 18px;
            text-align: center;
            padding-bottom: 5px;
            border-bottom: 2px solid #fff;
            &:last-child {
                margin-right: 0;
            }
            &:first-child {
                border-bottom-color: #d34ba8;
            }
            a {
                color: #666;
                width: 100%;
            }
        }
    }
    .slide {
        width: 100%;
        height: 140px;
        overflow: hidden;
        position: relative;
            li {
                position: absolute;
                top: 0;
                left: 0;
                img {
                    width: 100%;
                    height: 130px;
                    display: block;
                }
        }
        .bar {
            position: absolute;
            wdith: 100%;
            margin: 0 auto;
            z-index: 10;
            text-align: center;
            top: 130px;
            right: 6px;
            span {
                width: 5px;
                height: 5px;
                border: 1px solid #ccc;
                display: inline-block;
                margin-right: 10px;
                border-radius: 50%;
                background-color: #ccc;
                &:first-child {
                    background-color: #000;
                }
            }
        }
    }
    .icons {
        overflow: hidden;
        padding: 5px 5px;
        li {
            float: left;
            width: 20%;
            height: 62px;
            margin-bottom: 10px;
            box-sizing: border-box;
            img {
                dispaly: block;
                width: 70px;
                height: 70px;
                text-align: center;
            }
        }
    }
</style>
<script type="text/javascript">
    export default {
    // 绑定数据
    data() {
        return {
            timer: null,
            mark: 0,
            img: [
                {
                    src: 'imgs/item/11.jpg'
                },
                {
                    src: 'imgs/item/14.jpg'
                },
                {
                    src: 'imgs/item/15.jpg'
                },
                {
                    src: 'imgs/item/16.jpg'
                },
                {
                    src: 'imgs/item/17.jpg'
                },
                {
                    src: 'imgs/item/40.jpg'
                }
            ],
            icons: [
                { id: 1, src: '1.png' },
                { id: 2, src: '2.png' },
                { id: 3, src: '3.png' },
                { id: 4, src: '4.png' },
                { id: 5, src: '5.png' },
                { id: 6, src: '6.png' },
                { id: 7, src: '7.png' },
                { id: 8, src: '8.png' },
                { id: 9, src: '9.gif' },
                { id: 10, src: '10.png' }
            ],
            list: [],
            lunbotu: [
                { id: 1, title: '今日推荐'},
                { id: 2, title: '时尚'},
                { id: 3, title: '狂欢周末'},
                { id: 4, title: '美妆'},
                { id: 5, title: '母婴'},
                { id: 6, title: '家居'},
            ],
        }
    },
    methods: {
        autoPlay() {
            this.mark++;
            if (this.mark === 5) {
                this.mark == 0
            }
        },
        play() {
            this.timer = setInterval(this.autoPlay, 2000)
        }
    },
    created() {
        // 发送异步请求
        this.$http.get('data/list.json')
            // 存储数据
            .then(({ data }) => {
                // 存储数据
                this.list = data
            })
        this.play()
    }

}
</script>