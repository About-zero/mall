<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooterTag"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
</style>
