<template>
  <div class="all">
    <van-search v-model="value" show-action label="地址" placeholder="搜索全部订单" @search="onSearch">
      <template #action>
        <div @click="onSearch" class="search">搜索</div>
      </template>
    </van-search>

    <!-- <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      @click="goDetail"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">删出订单</van-button>
        <van-button size="mini">查询余额</van-button>
        <van-button size="mini">再次充值</van-button>
      </template>
    </van-card>-->
    <div class="orderCenter" v-for="(v,i) in ifor" :key="i">
      <ul class="orderAllul">
        <li>
          <span class="orderLeft10">充值中心</span>
          <span class="orderRight11">充值成功</span>
        </li>
        <li>
          <img src="https://img.alicdn.com/tfs/TB1.2hkSFXXXXblapXXXXXXXXXX-184-184.png_200x200" alt />
          <div class="orderLeft23">
            <div class="orderRight20">
              <span>话费充值-河南联通</span>
              <span class="span1">9.97</span>
            </div>
            <div class="orderRight20 fontcolor">
              <span>充值号码:17634430748</span>
              <span class="span1">*1</span>
            </div>
          </div>
        </li>
        <li class="ordeRight30">
          <span class="fontcolor">总价￥10.00</span>
          <span>实付款￥10.00</span>
        </li>
        <li class="buttons">
          <van-button round type="primary" size="small">删出订单</van-button>
          <van-button round type="primary" size="small">查询余额</van-button>
          <van-button round type="primary" size="small">再次充值</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getOrderList } from "../../../api/order";
export default {
  data() {
    return {
      checked: true,
      value: "",
      ifor: [1, 2, 3],
    };
  },
  components: {},
  methods: {
    onSearch() {},
    goDetail() {
      this.$router.push({
        path: `twodetail`,
      });
    },
    async orderLists() {
      const result = await getOrderList();
      console.log(result);
    },
  },
  created() {
    this.orderLists();
  },
};
</script>

<style>
.search {
  background: #ff5000;
  width: 75px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-left: 12px;
  box-sizing: border-box;
  border-radius: 15px;
}
.orderLeft10 {
  float: left;
}
.orderRight11 {
  float: right;
}
.orderAllul li {
  overflow: hidden;
  margin: 10px;
}
img {
  width: 90px;
  float: left;
}
.orderRight20 {
  width: 200px;
  float: right;
  font-size: 12px;
}
.span1 {
  float: right;
}
.fontcolor {
  color: rgb(153, 153, 153);
}
.ordeRight30 {
  font-size: 12px;
  float: right;
}
.ordeRight30 span {
  margin: 0 10px;
}
.buttons {
  float: right;
  /* color: rgb(102, 102, 102); */
}
.buttons button {
  color: rgb(102, 102, 102);
  background: white;
  border: 1px solid #ccc;
}
.orderCenter {
  overflow: hidden;
}
</style>