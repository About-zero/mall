<template>
  <div class="order">
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item to="/order/all">全部</van-tabbar-item>
      <van-tabbar-item to="/order/daifukuan">待付款</van-tabbar-item>
      <van-tabbar-item to="/order/daifahuo">待发货</van-tabbar-item>
      <van-tabbar-item to="/order/daishouhuo">待收货</van-tabbar-item>
      <van-tabbar-item to="/order/daipingjia">待评价</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {},
};
</script>

<style scoped >
.van-tabbar-item {
  font-size: 14px;
}
.van-tabbar-item--active {
  color: orangered;
}
</style>
