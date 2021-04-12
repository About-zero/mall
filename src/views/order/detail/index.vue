<template>
  <div class="detail">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
    goDetail() {
      this.$router.push({
        // path: `/detail/:id`,
      });
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
import { Toast } from "vant";
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