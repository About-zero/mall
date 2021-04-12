<template>
  <div class="home">
    <ul>
      <li v-for="item in products" :key="item._id" @click="godetail(item._id)">
        <img :src="item.coverImg" alt="" />
        <van-cell :title="item.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reqProducts } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      active: 0,
      products: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    async initList() {
      const result = await reqProducts();
      console.log(result);
      if (result.status === 200) {
        this.products = result.data.products;
      }
    },
    godetail(id) {
      console.log(id);
      this.$router.push({
        path: `/detail/${id}`,
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initList();
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
.home {
  padding-bottom: 40px;
}
.home img {
  width: 70px;
  height: 70px;
}
.home ul li {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
}
</style>
