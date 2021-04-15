<template>
  <div class="all">
    <van-search
      v-model="value"
      show-action
      label="地址"
      placeholder="搜索全部订单"
      @search="onSearch"
    >
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
    <div class="orderCenter" v-for="v in objLists" :key="v._id">
      <ul class="orderAllul">
        <li>
          <span class="orderLeft10">充值中心</span>
          <span class="orderRight11">充值成功</span>
        </li>
        <li>
          <img
            @click="goDetail(v._id)"
            src="https://img01.yzcdn.cn/vant/ipad.jpeg"
            alt
          />
          <div class="orderLeft23">
            <div class="orderRight20">
              <span>话费充值-河南联通</span>
              <span class="span1">{{ v.price }}</span>
            </div>
            <div class="orderRight20 fontcolor">
              <span>充值号码:17634430748</span>
              <span class="span1">*1</span>
            </div>
          </div>
        </li>
        <li class="ordeRight30">
          <span class="fontcolor">总价￥{{ v.price }}</span>
          <span>实付款￥{{ v.price }}</span>
        </li>
        <li class="buttons">
          <van-button round type="primary" size="small" @click="delOrder(v._id)"
            >删出订单</van-button
          >
          <van-button round type="primary" size="small">查询余额</van-button>
          <van-button round type="primary" size="small">再次充值</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getOrderList, deleteOrder } from "../../../api/order";
export default {
  data() {
    return {
      checked: true,
      value: "",
      ifor: [1, 2, 3],
      objLists: null,
    };
  },
  components: {},
  methods: {
    onSearch() {},
    goDetail(id) {
      this.$router.push({
        path: `twodetail`,
        query: { id },
      });
    },
    async orderLists() {
      const obj = {
        per: 1000000000,
      };
      const result = await getOrderList(obj);
      console.log(result);
      console.log(result.data.totalCount);

      this.objLists = result.data.orders;
      console.log(this.objLists);
    },
    async delOrder(id) {
      const result = await deleteOrder(id);
      console.log(result);
      this.orderLists();
    },
  },
  created() {
    this.orderLists();
  },
};
</script>

<style>
.all {
  padding-bottom: 80px;
}
.search {
  /* background: #ff5000; */
  width: 75px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-left: 12px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: red;
}
.orderLeft10 {
  float: left;
  font-size: 12px;
}
.orderRight11 {
  color: orangered;
  float: right;
  font-size: 12px;
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
  background-color: #fff;
  margin: 10px 0;
  border-radius: 20px;
  padding: 20px;
}
</style>