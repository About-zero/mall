<template>
  <div class="home">
    <van-row class="header">
      <van-col span="4">
        <!-- <img :src="logoImg" alt="" /> -->
        <img src="../../assets/logo.png" alt />
      </van-col>
      <van-col span="20">
        <van-search
          v-model="value"
          placeholder="寻找宝贝店铺"
          input-align="center"
          background="rgb(255, 133, 42)"
        />
      </van-col>
    </van-row>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item._id">
        <img :src="item.coverImg" alt />
      </van-swipe-item>
    </van-swipe>

    <van-swipe
      class="my-swipe"
      :autoplay="5000"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item>
        <ul class="eyLbbH">
          <li v-for="(item, index) in iconList" :key="index">
            <a href="javascript:;">
              <img :src="item.src" alt />
              <p>{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="eyLbbH">
          <li v-for="(item, index) in iconList1" :key="index">
            <a href="javascript:;">
              <img :src="item.src" alt />
              <p>{{ item.title }}</p>
            </a>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>

    <ul class="advertising">
      <li>
        <p>聚划算</p>
        <img src="../../assets/avter1.png" alt />
      </li>
      <li>
        <img src="../../assets/avter2.png" alt />
      </li>
      <li>
        <img src="../../assets/avter3.png" alt />
      </li>
      <li>
        <img src="../../assets/avter4.png" alt />
      </li>
    </ul>
    <ul class="advertising1">
      <li>
        <img src="../../assets/avter5.png" alt />
      </li>
      <li>
        <img src="../../assets/avter6.png" alt />
      </li>
      <li>
        <img src="../../assets/avter7.png" alt />
      </li>
      <li>
        <img src="../../assets/avter3.png" alt />
      </li>
    </ul>
    <ul class="advertising1 advLast">
      <li>
        <img src="../../assets/avter5.png" alt />
      </li>
      <li>
        <img src="../../assets/avter6.png" alt />
      </li>
      <li>
        <img src="../../assets/avter7.png" alt />
      </li>
      <li>
        <img src="../../assets/avter3.png" alt />
      </li>
    </ul>
    <div class="live">
      <img src="../../assets/live.png" alt />
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul class="products">
        <li v-for="item in list" :key="item._id" @click="godetail(item._id)">
          <img :src="item.coverImg" alt />
          <p>{{ item.name }}</p>
          <span>￥ {{ item.price }}元 <i>66人购买</i></span>
        </li>
      </ul>
    </van-list>
    <div class="top" v-show="flag_scroll" @click="backTop">
      <van-icon name="back-top" size="28" color="#ccc" />
      <p>顶部</p>
    </div>
  </div>
</template>

<script>
import src1 from "../../assets/icon-img/1.png";
import src2 from "../../assets/icon-img/2.png";
import src3 from "../../assets/icon-img/3.png";
import src4 from "../../assets/icon-img/4.png";
import src5 from "../../assets/icon-img/5.png";
import src6 from "../../assets/icon-img/6.png";
import src7 from "../../assets/icon-img/7.png";
import src8 from "../../assets/icon-img/8.png";
import src9 from "../../assets/icon-img/9.png";
import src10 from "../../assets/icon-img/10.png";
import src11 from "../../assets/icon-img/11.png";
import src12 from "../../assets/icon-img/12.png";
import src13 from "../../assets/icon-img/13.png";
import src14 from "../../assets/icon-img/14.png";
import src15 from "../../assets/icon-img/15.png";
import src16 from "../../assets/icon-img/16.png";
import src17 from "../../assets/icon-img/17.png";
import src18 from "../../assets/icon-img/18.png";
import src19 from "../../assets/icon-img/19.png";
import src20 from "../../assets/icon-img/20.png";
import { reqSwiper, reqProducts } from "../../api/product";
import Vue from "vue";
import { Icon } from "vant";
import { mapMutations } from "vuex";
Vue.use(Icon);
export default {
  data() {
    return {
      // logoImg: logoImg,
      iconList: [
        {
          src: src1,
          title: "天猫新品",
        },
        {
          src: src2,
          title: "今日爆款",
        },
        {
          src: src3,
          title: "天猫国际",
        },
        {
          src: src4,
          title: "饿了么",
        },
        {
          src: src5,
          title: "天猫超市",
        },
        {
          src: src6,
          title: "充值中心",
        },
        {
          src: src7,
          title: "机票酒店",
        },
        {
          src: src8,
          title: "金币庄园",
        },
        {
          src: src9,
          title: "阿里拍卖",
        },
        {
          src: src10,
          title: "淘宝吃货",
        },
      ],
      iconList1: [
        {
          src: src11,
          title: "天猫超市",
        },
        {
          src: src12,
          title: "分类",
        },
        {
          src: src13,
          title: "天猫美食",
        },
        {
          src: src14,
          title: "阿里健康",
        },
        {
          src: src15,
          title: "口碑生活",
        },
        {
          src: src16,
          title: "淘宝吃货",
        },
        {
          src: src17,
          title: "闲鱼",
        },
        {
          src: src18,
          title: "会员中心",
        },
        {
          src: src19,
          title: "造点新货",
        },
        {
          src: src20,
          title: "土货鲜食",
        },
      ],
      value: "",
      swiperList: null,
      list: [],
      loading: false,
      finished: false,
      page: 1,
      flag_scroll: false,
      scroll: 0,
    };
  },
  methods: {
    ...mapMutations({
      changactive: "footer/changeActive",
    }),
    async initSwiper() {
      const result = await reqSwiper();
      console.log(result);
      if (result.status === 200) {
        this.swiperList = result.data.products;
      }
    },
    onLoad() {
      reqProducts({ page: this.page }).then((res) => {
        if (res.status === 200) {
          if (res.data.products < 10) {
            this.finished = true;
          } else {
            this.loading = false;
            ++this.page;
          }
          this.list = this.list.concat(res.data.products);
        }
      });
    },
    godetail(id) {
      this.$router.push({
        name: `Detail`,
        query: { id },
      });
    },
    //返回顶部

    backTop() {
      document.documentElement.scrollTop = 0;
    },

    //滑动超过200时显示按钮
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      //console.log(document.documentElement.scrollTop);
      if (scrollTop > 200) {
        this.flag_scroll = true;
      } else {
        this.flag_scroll = false;
      }
    },
  },
  created() {
    this.initSwiper();
    this.changactive(0);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.home {
  padding-bottom: 50px;
  position: relative;
}
.header {
  background-color: rgb(255, 133, 42);
}
.van-col img {
  width: 49px;
  height: 37px;
  margin: 7px 14px;
}
.van-search__content {
  background-color: rgb(255, 78, 34);
}
.van-swipe-item {
  background-color: #fff;
  padding-top: 15px;
}
.my-swipe img {
  width: 80%;
  height: 180px;
  margin-left: 10%;
}
.eyLbbH {
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
}
.eyLbbH li {
  width: 20%;
}
.eyLbbH li a img {
  margin-left: 5px;
  width: 61px;
  height: 48px;
}
.eyLbbH li a p {
  text-align: center;
  color: rgb(102, 102, 102);
  font-size: 11px;
}
.advertising1,
.advertising {
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.advLast {
  border-radius: 0 0 10px 10px;
}
.advertising {
  margin-top: 10px;
}
.advertising1 li,
.advertising li {
  width: 25%;
}
.advertising li:first-child p {
  line-height: 1px;
  font-weight: 800;
  padding-left: 5px;
}
.advertising li:nth-child(2) {
  padding-top: 32px;
}
.advertising1 li:nth-child(4),
.advertising li:nth-child(3) {
  padding-top: 10px;
}
.advertising li:nth-child(4) {
  padding-top: 25px;
}
.live img {
  width: 161px;
  height: 19px;
  margin-left: 30%;
  margin-top: 20px;
  margin-bottom: 10px;
}
.products {
  display: flex;
  width: 98%;
  overflow-x: auto;
  flex-wrap: wrap;
  margin-left: 2%;
}
.products li {
  width: 45%;
  margin: 0 5px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 10px;
}
.products li img {
  width: 171px;
  height: 171px;
  margin-top: 10px;
}
.products li p,
.products li span {
  margin-left: 15px;
}
.products li span:nth-child(3) {
  font-size: 14px;
  line-height: 16.000000000000004px;
  color: #ff5500;
}
.products li span:nth-child(3) i {
  color: #ccc;
  font-size: 10px;
  line-height: 16.000000000000004px;
  font-style: normal;
}
.products li p:nth-child(2) {
  font-size: 11px;
  color: #333;
  line-height: 18.5px;
  width: 140px; /*限制元素宽度*/
  overflow: hidden; /*文本超出隐藏*/
  display: -webkit-box; /*盒子模型微弹性伸缩模型*/
  -webkit-box-orient: vertical; /*伸缩盒子的子元素垂直排列*/
  -webkit-line-clamp: 2; /*文本显示3行*/
}
.top {
  width: 42px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid #ccc;
  padding-left: 16px;
  position: fixed;
  bottom: 100px;
  right: 10px;
  background-color: #fff;
}
.top p {
  line-height: 1;
  margin: 0;
  font-size: 14px;
  color: #ccc;
}
</style>
