<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'Cart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name: 'Order' }">订单列表</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name: 'Mine' }">我的淘宝</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name: 'More' }">更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>
