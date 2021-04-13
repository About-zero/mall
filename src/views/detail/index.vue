<template>
  <div class="detail" v-if="obj">
    <van-nav-bar
      left-text=""
      right-text="cart"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="Van"
    />
    <van-swipe @change="onChange" class="custom-img">
      <van-swipe-item
        ><img :src="obj.coverImg" alt="" width="200" height="200"
      /></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <!-- {{ current + 1 }}/4 -->
        </div>
      </template>
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
        <span class="cuxiao">促销</span>
        <span class="jifen">积分</span>
        <span class="goumai">购买可得{{ obj.price / 50 }}积分</span>
      </div></van-cell
    >
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }"
      ><div class="prom-content">
        <span class="cuxiao">促销</span>
        <span class="jifen">积分</span>
        <span class="goumai">购买可得{{ obj.price / 50 }}积分</span>
      </div></van-popup
    >
    <div class="kuang"></div>
    <div class="prom-content">
      <span class="cuxiao">促销</span>
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
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addcart(obj._id, obj.quantity)"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="nowBuy(obj._id)"
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
  components: {},
  data() {
    return {
      obj: null,
      current: 0,
      show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
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
      this.$router.push("/cart");
    },
    async getDetail(id) {
      console.log(id);
      const result = await reqProductDetail(id);
      console.log(result);
      if (result.status === 200) {
        this.obj = result.data;
      }
    },

    addcart(id, quantity) {
      if (isLogined()) {
        console.log(11);
        reqAddCart({ product: id, quantity }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(22);
            Toast.success("加入购物车成功");
          }
        });
      } else {
        this.$router.replace("/login");
      }
    },
    nowBuy(id) {
      console.log(id);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.query.id;
    this.getDetail(id);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
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
  color: red;
}

.prom-content .goumai {
  font-size: 11px;
}
.content {
  padding: 16px 16px 160px;
}
</style>
