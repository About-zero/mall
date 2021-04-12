<template>
  <div class="all">
    <van-search v-model="value" show-action label="地址" placeholder="搜索全部订单" @search="onSearch">
      <template #action>
        <div @click="onSearch" class="search">搜索</div>
      </template>
    </van-search>

    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
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
    </van-card>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      value: "",
      ifor: [1, 2, 3, 4],
    };
  },
  components: {},
  methods: {
    onSubmit() {},
    onClickEditAddress() {},
    onSearch() {},
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
.all {
  background: rgb(243, 241, 241);
  /* margin: 10px; */
  padding: 10px;
}
.van-search--show-action {
  /* border-radius: 20px; */
  padding: 0;
}
.van-search__content--square {
  border-radius: 20px;
}
.van-search__content--square {
  background: white;
}
</style>