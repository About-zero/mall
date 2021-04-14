<!--  -->
<template>
  <div class="mine">
    <div class="htm">
      <div class="my-top">
        <div class="top1">
          <ul>
            <li>
              <span class="img" @click="logout">
                <img
                  src="https://img1.baidu.com/it/u=775515149,2448484574&fm=26&fmt=auto&gp=0.jpg"
                  alt
                />
              </span>
            </li>
            <li>
              <span class="name">{{ nickName }}</span>
            </li>
          </ul>
          <ul style="float: right">
            <li>
              <van-icon name="friends-o" size="30" color="wheat" />
            </li>
            <li style="width: 14px"></li>
            <li>
              <van-icon name="setting-o" size="30" color="wheat" />
            </li>
            <li style="width: 14px"></li>
          </ul>
        </div>
        <div class="top2">
          <div>
            <div>53</div>
            <div>收藏夹</div>
          </div>
          <div>
            <div>37</div>
            <div>关注店铺</div>
          </div>
          <div>
            <div>384</div>
            <div>足迹</div>
          </div>
          <div>
            <div>1</div>
            <div>红包卡卷</div>
          </div>
        </div>
      </div>
      <div class="head">
        <div class="head-top">
          <ul class="nav" @click="all">
            <li>
              <h4>我的订单</h4>
            </li>
            <li>
              <span>查看更多订单></span>
            </li>
          </ul>
          <ul class="cont1">
            <van-grid class="cont" :border="false" :column-num="5">
              <van-grid-item
                icon="pending-payment"
                to="/order/daifukuan"
                badge="99+"
                max="99"
                text="待付款"
              />
              <van-grid-item
                icon="send-gift"
                to="/order/daifahuo"
                badge="99"
                max="99"
                text="待发货"
              />
              <van-grid-item
                icon="logistics"
                to="/order/daishouhuo"
                badge="99+"
                max="99"
                text="待收货"
              />
              <van-grid-item
                icon="comment"
                to="/order/daipingjia"
                v-bind:badge="badge4"
                max="99"
                text="评价"
              />
              <van-grid-item icon="balance-list" badge="99+" text="退款/售后" />
            </van-grid>
          </ul>
          <ul class="activity">
            <li class="act-top">
              <span style="float: left">最新物流</span>
              <span style="float: right">04-18</span>
            </li>
            <li class="act-bot">
              <span class="img">
                <img
                  src="https://www.miumiu.com/content/dam/miumiu_products/5/5BA/5BA200/N88F0118/5BA200_N88_F0118_V_GOO_SLF.png/jcr:content/renditions/miumiu_color_jpg.1280.1280.jpg"
                  alt
                />
              </span>
              <span class="shop">
                <p><van-icon name="send-gift-o" />已下单</p>
                <p>商品已下单</p>
              </span>
            </li>
          </ul>
        </div>
        <div class="head-bot">
          <ul class="nav">
            <li>
              <h4>必备工具</h4>
            </li>
            <li>
              <span>查看全部工具></span>
            </li>
          </ul>
          <ul>
            <van-grid :border="false">
              <van-grid-item icon="gold-coin" text="每日返现" />
              <van-grid-item icon="point-gift" text="领卷中心" />
              <van-grid-item icon="cash-back-record" text="闲置换钱" />
              <van-grid-item icon="smile-o" text="客服小蜜" />
              <van-grid-item icon="alipay" text="花呗" />
              <van-grid-item
                icon="logistics"
                to="/order/daishouhuo"
                text="我的快递"
              />
              <van-grid-item
                icon="comment"
                to="/order/daipingjia"
                text="我的评价"
              />
              <van-grid-item icon="setting" text="主题皮肤" />
            </van-grid>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqUsers } from "../../api/user";
import { Dialog } from "vant";
import { removeToken } from "../../utils/util";
import { getOrderList } from "../../api/order";
import { mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { [Dialog.Component.name]: Dialog.Component },
  data() {
    //这里存放数据
    return {
      username: "",
      nickName: "",
      badge4: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集
  methods: {
    ...mapMutations({
      changactive: "footer/changeActive",
    }),
    async User() {
      const result = await reqUsers();
      console.log(result);
      if (result.status === 200) {
        console.log(result.data.userName);
        this.nickName = result.data.nickName;
      }
    },

    logout() {
      Dialog.confirm({
        message: "是否退出登录",
      })
        .then(() => {
          console.log(localStorage.getItem("token"));
          removeToken();
          this.$router.go(0);
        })
        .catch(() => {});
    },
    all() {
      this.$router.push("/order/all");
    },
    onClickLeft() {},
    onClickRight() {},
    async num() {
      const result = await getOrderList();
      console.log(result);
      if (result.status === 200) {
        console.log(result.data.orders.length);
        if (result.data.orders.length == 0) {
          this.badge4 = "";
        } else {
          this.badge4 = result.data.orders.length;
        }
      }
    },
  },
  created() {
    this.User();
    this.num();
    this.changactive(3);
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
}
.htm {
  width: 100%;
  min-height: 15rem;
  background-color: #f4f4f4a2;
  overflow: hidden;
}
.my-top {
  background-color: orangered;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: white;
}
.top1 {
  height: 81px;
  line-height: 81px;
  position: relative;
}
.top1 img {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: white;
}
.top1 > ul > li {
  float: left;
  height: 81px;
}
.top1 .img {
  display: inline-block;
  height: 81px;
  width: 55px;
}
.top1 .name {
  font-size: 25px;
  font-weight: 900;
  font-family: "楷体";
}
.top2 {
  height: 67px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.top2 > div {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.head {
  width: 100%;
}
.head-top,
.head-bot {
  width: 95%;
  box-sizing: border-box;
  background-color: white;
  margin: 10px;
  border-radius: 15px;
  padding: 8px;
}
.nav {
  padding: 0 10px;
  height: 38px;
  border-bottom: 2px solid #f4f4f4a2;
  display: flex;
  justify-content: space-between;
}
.nav > li {
  height: 38px;
  display: flex;
  align-items: center;
}
.nav > span {
  font-size: 14px;
  color: #ccc;
}
.cont {
  height: 85px;
}
.cont1 {
  height: 85px;
  box-sizing: border-box;
}
.head-top > .van-grid-item {
  height: 76px;
}
.activity {
  overflow: hidden;
  padding: 4px 5px 8px 5px;
  height: 62px;
  background-color: #f4f4f4a2;
  border-radius: 10px;
  width: 95%;
}

.activity img {
  height: 33px;
  width: 33px;
  border-radius: 5px;
}

.activity .img {
  height: 33px;
  width: 33px;
  display: block;
  float: left;
}
.activity .shop {
  float: left;
}

.activity .act-top {
  width: 309px;
  height: 20px;
  font-size: 14px;
  padding: 4px;
}
.activity .act-bot p:nth-child(1) {
  height: 15px;
  font-size: 15px;
  color: blue;
  margin: 0px 8px;
  margin-top: -5px;
}
.activity .act-bot p:nth-child(2) {
  height: 14px;
  font-size: 14px;
  margin: 6px 8px;
}
.head-bot {
  margin-bottom: 2rem;
}
</style>
