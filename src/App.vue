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
body, html {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    background-color: #f2f2f2;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    top: 0;
}
</style>
