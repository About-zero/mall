<template>
  <div class="detail" v-if="obj">
    <van-nav-bar
      left-text=""
      right-text="按钮"
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
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { reqProductDetail } from "../../api/product";
import { reqAddcart } from "../../api/cart";
import { isLogined } from "../../utils/util";
export default {
  components: {},
  data() {
    return {
      obj: null,
      current: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
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
        reqAddcart({ product: id, quantity }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(22);
            this.$router.push("/cart");
          }
        });
      } else {
        this.$router.replace("/login");
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.params.id;
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
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.custom-img {
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
}
.big-title {
  width: 300px;
  height: 40px;
}
</style>
