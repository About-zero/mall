<template>
  <div class="detail" v-if="obj" style="margin-bottom:45px">
    <van-nav-bar
      left-text=""
      right-text="cart"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="Van"
      :fixed="true"
      :placeholder="true"
    />
    <van-swipe @change="onChange" class="custom-img">
      <van-swipe-item
        ><img :src="obj.coverImg" alt="" width="200" height="200"
      /></van-swipe-item>
    </van-swipe>
    <!-- 价格详情 -->
    <div class="real-price">
      <span class="Price">￥{{ obj.price }}</span>
      <span class="icon-txt">新品抢购</span>
      <span class="icon-txt">淘金币抵3%</span>
    </div>
    <div class="iten-price">
      <label>价格</label>
      <del>￥{{ obj.price * 1.5 }}</del>
    </div>
    <div class="big-title">
      <span>{{ obj.name }}</span>
    </div>
    <div class="module">
      <span class="postage">快递：免运费</span>
      <span class="sales">月销量 3000+件</span>
      <span class="delcity">广东广州</span>
    </div>
    <div class="kuang"></div>
    <van-cell is-link @click="showPopup"
      ><div class="prom-content">
        <span class="cuxiao">选择</span>
        <span class="jifen">请选择套餐类型</span>
        <span class="goumai">内存容量 颜色分类</span>
      </div></van-cell
    >
    <van-popup v-model="show" position="bottom" :style="{ height: '80%' }"
      ><div class="prom-header">
        <img :src="obj.coverImg" alt="" width="100" height="100" />
        <div class="header-right">
          <p class="a">价格￥{{ obj.price }}.00</p>
          <p class="b">请选择：套餐类型</p>
        </div>
      </div>
      <div class="prom-body">
        <div class="list1">
          <ul>
            <li style="border-color:#ff0036">8GB</li>
            <li>16GB</li>
            <li>32GB</li>
          </ul>
        </div>
        <div class="list2">
          <p>硬盘容量</p>
          <span>512G固态容量</span>
        </div>
        <div class="list3">
          <p>颜色分类</p>
          <span>**色</span>
        </div>

        <div class="list2">
          <p>套餐类型</p>
          <span>加速版</span>
          <span>豪华版</span>
        </div>
        <div class="list4">
          <p>购买数量</p>
          <van-stepper
            v-model="value"
            theme="round"
            button-size="22"
            disable-input
          />
        </div>
      </div>
      <div class="prom-foot">
        <div class="foot-left">
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="addcarTT(obj._id)"
          />
        </div>
        <div class="foot-right">
          <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="nowBuy(obj)"
          />
        </div>
      </div>
    </van-popup>
    <div class="kuang"></div>
    <div class="prom-content">
      <span class="cuxiao">快递</span>
      <span style="font-size:12px">至老城区：</span>
      <span class="goumai">店铺预售 付款后三天内发货</span>
    </div>

    <div class="prom-content">
      <span class="cuxiao">服务</span>
      <span style="font-size:12px">假一赔四 ·</span>
      <span class="goumai">破损包退 ·</span>
      <span style="font-size:11px">退货运费险 ·</span>
      <span style="font-size:11px">极速退款</span>
    </div>
    <div class="kuang"></div>
    <!-- <van-button type="info" block @click="addcart(obj._id, obj.quantity)"
      >添加购物车</van-button
    > -->
    <div class="group-wrap">
      <div class="mui-title">
        <span class="span-lf">商品评价(20470)</span>
        <span class="span-rg">查看全部></span>
      </div>
      <div class="mui-ul">
        <li>好用(999+)</li>
        <li>不卡(999+)</li>
        <li>实惠(999+)</li>
        <li>物流快(9)</li>
      </div>
      <div class="mui-img">
        <img
          src="//img.alicdn.com/tps/TB1l6dkOXXXXXXEXVXXXXXXXXXX-210-210.png_80x80Q90s50.jpg_.webp"
          alt=""
        />
        <span>I***0</span>
        <p class="span1">很好用</p>
      </div>
    </div>
    <div class="newData">{{ currentTime }}</div>
    <div class="kuang"></div>
    <div class="modul-wrap">
      <div class="shop-logo">
        <img
          src="//img.alicdn.com/imgextra//8e/11/TB1dO03w4naK1RjSZFBSuwW7VXa.jpg_120x120Q50s50.jpg_.webp"
          alt=""
        />
      </div>

      <span class="phone-shop">手机旗舰店</span>
      <span class="tianmao">天猫</span>
      <p class="pp">
        宝贝描述4.8
        <span>卖家服务4.9</span>
        <span>物流服务</span>
      </p>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="star" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addcart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="nowBuy(obj)"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { reqProductDetail } from "../../api/product";
import { reqAddCart } from "../../api/cart";
import { isLogined } from "../../utils/util";
import { Toast } from "vant";
Vue.use(Toast);
import { ActionSheet } from "vant";
Vue.use(ActionSheet);
export default {
  component: {},
  data() {
    return {
      obj: null,
      current: 0,
      show: false,
      fixed: "",
      placeholder: "",
      timer: "", //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
      value: 1,
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    appendZero(obj) {
      if (obj < 10) {
        return "0" + obj;
      } else {
        return obj;
      }
    },
    addcart() {
      this.show = true;
    },
    showPopup() {
      this.show = true;
    },
    onChange(index) {
      this.current = index;
    },
    //导航条
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickRight() {
      if (isLogined()) {
        this.$router.push({
          name: `Cart`,
        });
      } else {
        this.$router.push("/login");
      }
    },
    async getDetail(id) {
      console.log(id);
      const result = await reqProductDetail(id);
      console.log(result);
      if (result.status === 200) {
        this.obj = result.data;
      }
    },

    // 加入购物车事件
    addcarTT(id) {
      if (isLogined()) {
        const num = this.value;
        console.log(num);
        reqAddCart({ product: id, quantity: num }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            Toast.success("加入购物车成功");
            this.$router.push("/cart");
          }
        });
      } else {
        this.$router.replace("/login");
      }
    },

    //下方购物车按钮事件
    star() {
      if (isLogined()) {
        console.log(111);
        this.$router.push({
          name: `Cart`,
        });
      } else {
        this.$router.push("/login");
        console.log(222);
      }
    },
    //立即购买事件

    nowBuy(obj) {
      // console.log(quantity,product,price);
      // let arr = {quantity,product,price}
      // console.log(arr);
      // console.log(obj);
      // let product = obj.coverImg;
      if (isLogined()) {
        obj.product = {
          coverImg: obj.coverImg,
          price: obj.price,
        };
        console.log(obj.product);
        let arr = [obj];
        const num = this.value;
        obj.quantity = num;
        let productStr = JSON.stringify(arr);
        localStorage.setItem("productStr", productStr);
        // arr.push({product});
        console.log(arr);
        // this.$router.push({ path: "/buy", query: { arr } });
        this.$router.push('/buy')
      } else {
        this.$router.replace("/login");
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.query.id;
    this.getDetail(id);
    var vm = this;
    vm.timer = setInterval(() => {
      var y = new Date().getFullYear();
      var m = vm.appendZero(new Date().getMonth() + 1);
      var d = vm.appendZero(new Date().getDate());
      var ho = vm.appendZero(new Date().getHours());
      var mi = vm.appendZero(new Date().getMinutes());
      //修改数据date
      vm.currentTime = y + "/" + m + "/" + d + " " + ho + ":" + mi;
    }, 1000);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.kuang {
  width: 100%;
  height: 15px;
  background: #f5f5f5;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.custom-img {
  width: 100%;
  text-align: center;
}
.real-price {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
}
.Price {
  color: #ff0036;
  font-size: 24px;
}
.icon-txt {
  height: 16px;
  background: #fb6878;
  color: #fff;
  font-size: 12px;
  padding: 1px 2px;
  margin-left: 3px;
  align-content: center;
  text-align: center;
}
.iten-price {
  color: #888;
  font-size: 12px;
  margin-left: 5px;
  padding: 5px 0;
}
.big-title {
  width: 350px;
  height: 40px;
  margin-left: 10px;
  padding: 5px 0;
}
.big-title span {
  font-size: 13px;
  font-weight: bold;
}
.module {
  width: 345px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  padding-right: 20px;
  font-size: 12px;
  color: #999;
}
.prom-content {
  width: 345px;
  height: 41px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.prom-content span {
  margin: 0 7px;
  align-content: center;
}
.prom-content .cuxiao {
  font-size: 12px;
  color: #999;
}
.prom-content .jifen {
  font-size: 10px;
}

.prom-content .goumai {
  font-size: 11px;
}
.content {
  padding: 16px 16px 160px;
}
.group-wrap {
  width: 365px;
  height: 128px;
}
.mui-title {
  width: 365px;
  height: 20px;
  padding-top: 10px;
  padding-left: 7px;
  line-height: 20px;
}
.mui-title .span-lf {
  float: left;
  font-size: 14px;
}
.mui-title .span-rg {
  float: right;
  font-size: 12px;
}
.mui-ul {
  height: 35px;
}
.mui-ul li {
  width: 60px;
  height: 14px;
  background: #fee;
  float: left;
  font-size: 12px;
  list-style: none;
  text-align: center;
  margin: 6px 3px;
  padding: 6px 9px;
  color: #666;
  border-radius: 26px;
  line-height: 14px;
}
.mui-img {
  width: 345px;
  height: 50px;
  font-size: 10px;
  float: left;
}
.mui-img img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  margin-left: 10px;
}
.mui-text {
  width: 365px;
  height: 20px;
}
.span1 {
  width: 365px;
  height: 20px;
  font-size: 13px;
  line-height: 16px;
  margin: 10px 10px;
}
.modul-wrap {
  width: 355px;
  height: 139px;
  padding: 10px;
}
.shop-logo img {
  width: 54px;
  height: 54px;
  border: 1px solid rgba(151, 151, 151, 0.5);
  float: left;
  margin-right: 10px;
}
.phone-shop {
  margin: 5px;
}
.tianmao {
  background: red;
  font-size: 13px;
  color: #f5f5f5;
  border-radius: 7px;
  padding: 2px;
}
.van-nav-bar__placeholder {
  opacity: 0.9;
  background: #ccc;
}
.newData {
  font-size: 11px;
  margin-left: 10px;
}
.pp {
  font-size: 9px;
  margin-top: 20px;
  padding-left: 10px;
}
.pp span {
  padding-left: 10px;
}
.prom-header {
  width: 365px;
  height: 105px;
}
.prom-header img {
  border: 1px solid rgba(0, 0, 0, 0.1);
  float: left;
}
.header-right {
  width: 250px;
  height: 54px;
  float: right;
  padding-top: 20px;
  padding-left: 10px;
}
.header-right .a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #ff0036;
}
.header-right .b {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  color: #051b28;
}
.prom-body {
  width: 335px;
  height: 392px;
  padding: 0 15px 10px 15px;
  font-size: 13px;
}
.prom-body .list1 {
  width: 335px;
  min-height: 40px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.prom-body .list1 ul li {
  width: 26px;
  height: 24px;
  border-radius: 8px;
  padding: 3px 12px;
  font-size: 13px;
  line-height: 24px;
  list-style: none;
  float: left;
  margin: 8px 8px 8px 0;
  background-color: #fff5f7;
  color: #ff0036;
}
.prom-body .list2 {
  width: 335px;
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.prom-body .list2 p {
  color: #666;
  font-size: 13px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.prom-body .list2 span {
  width: 100px;
  height: 32px;
  padding: 3px 12px 3px 12px;
  border-radius: 8px;
  margin-right: 5px;
  background-color: #fff5f7;
  color: #ff0036;
  border: 1px solid #ff0036;
}
.prom-body .list3 {
  width: 335px;
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.prom-body .list3 p {
  color: #666;
  font-size: 13px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.prom-body .list3 span {
  width: 80px;
  height: 32px;
  padding: 3px 12px 3px 12px;
  border-radius: 8px;
  background-color: #fff5f7;
  color: #ff0036;
  border: 1px solid #ff0036;
}
.prom-body .list4 {
  width: 335px;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 50px;
}
.prom-body .list4 p {
  color: #666;
  font-size: 13px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.prom-foot .foot-left {
  width: 187px;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #fff;
  font-size: 15px;
  line-height: 48px;
  text-align: center;
}
.prom-foot .foot-right {
  width: 188px;
  height: 48px;
  position: fixed;
  right: 0;
  bottom: 0;
  color: #fff;
  font-size: 15px;
  line-height: 48px;
  text-align: center;
}
.van-stepper--round {
  position: fixed;
  right: 20px;
  bottom: 50px;
}
</style>
