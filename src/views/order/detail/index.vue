<template>
  <div class="detail">
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" />
    <van-card
      num="2"
      :price="detail.price"
      desc="他们没有写的数据没有这个"
      title="这个也没有"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      v-if="detail"
    />
  </div>
</template>

<script>
import { orderDetail } from "../../../api/order";
export default {
  data() {
    return {
      checked: true,
      value: "",
      ifor: [1, 2, 3, 4],
      detail: null,
    };
  },
  components: {},
  methods: {
    onSubmit() {},
    onClickEditAddress() {},
    onSearch() {},
    goDetail() {
      this.$router.push({
        // path: `/detail/:id`,
      });
    },
    onClickLeft() {
      // Toast(Toast("返回"));
      this.$router.push({
        path: `all`,
      });
      // this.$route.params.id
      // console.log();
      // alert(this.$router.query.id)
    },

    async getDetail() {
      const id = this.$route.query.id;
      // alert(this.$route.query.id);
      const res = await orderDetail(id);
      this.detail = res.data.order;
      console.log(this.detail);
    },
  },
  created() {
    this.getDetail();
  },
};
// import { Toast } from "vant";
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