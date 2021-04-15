<template>
  <div class="footer">
    <van-tabbar v-model="$store.state.footer.active">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="label-o" :to="{ name: 'Order' }"
        >订单列表</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" :to="{ name: 'Mine' }"
        >我的淘宝</van-tabbar-item
      >
      <van-tabbar-item icon="ellipsis" :to="{ name: 'More' }"
        >更多</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    ...mapMutations({
      changeactive: "footer/changeActive",
    }),
  },
  created() {
    console.log(this.$store.state.footer.active);
  },
};
</script>

<style>
</style>
