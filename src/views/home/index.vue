<template>
  <div class="home">
    <van-row class="header">
      <van-col span="4">
        <!-- <img :src="logoImg" alt="" /> -->
        <img src="../../assets/logo.png" alt="" />
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
        <img :src="item.coverImg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <ul class="eyLbbH">
      <li v-for="(item, index) in iconList" :key="index">
        <a href="javascript:;">
          <img :src="item.src" alt="" />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
    <ul class="advertising">
      <li>
        <p>聚划算</p>
        <img src="../../assets/avter1.png" alt="" />
      </li>
      <li>
        <img src="../../assets/avter2.png" alt="" />
      </li>
      <li>
        <img src="../../assets/avter3.png" alt="" />
      </li>
      <li>
        <img src="../../assets/avter4.png" alt="" />
      </li>
    </ul>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul class="products">
        <li v-for="item in list" :key="item._id" @click="godetail(item._id)">
          <img :src="item.coverImg" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.price }}元</p>
        </li>
      </ul>
    </van-list>
    >>>>>>> 9fb9d7cf26069bc4a9c2cdc4909dc23eb4ebaa80
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
import { reqSwiper, reqProducts } from "../../api/product";
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
      value: "",
      swiperList: null,
      list: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  methods: {
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
  },
  created() {
    this.initSwiper();
  },
};
</script>

<style>
.home {
  padding-bottom: 50px;
}
.header {
  background-color: rgb(255, 133, 42);
}
.van-col img {
  height: 37px;
  margin: 7px 14px;
}
.van-search__content {
  background-color: rgb(255, 78, 34);
}
.my-swipe img {
  width: 100%;
  height: 150px;
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
.advertising {
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
}
.advertising li {
  width: 25%;
}
.advertising li:first-child p {
  line-height: 1px;
  font-weight: 800;
}
.advertising li:nth-child(2) {
  padding-top: 32px;
}
.advertising li:nth-child(3) {
  padding-top: 10px;
}
.advertising li:nth-child(4) {
  padding-top: 25px;
}
.products {
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: wrap;
}
.products li {
  width: 45%;
  margin: 0 5px;
}
.products li img {
  width: 171px;
  height: 171px;
}
.products li p:nth-child(3) {
  color: red;
}
.products li p:nth-child(2) {
  font-size: 11px;
}
</style>
