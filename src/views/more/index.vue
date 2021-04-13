<template>
  <div class="more">
    <van-button type="primary" color="#bbb">特色导购</van-button>
    <van-button type="primary" color="pink">功能服务</van-button>
    <!-- <van-button type="info">功能服务</van-button> -->
    <h1>特色市场</h1>
    <div class="moreMenu">
      <div v-for="(v,i) in ifor" :key="i" class="moreMenuDiv">
        <img src="https://gw.alicdn.com/tps/i1/TB1EJmgKVXXXXXOXFXXazxJIVXX-144-144.png" alt />
        <span>腔调</span>
      </div>
    </div>
    <h1>主题市场</h1>
    <div class="moreMenu">
      <div v-for="(v,i) in ifor2" :key="i" class="moreMenuDiv">
        <img src="https://gw.alicdn.com/tps/i1/TB1EJmgKVXXXXXOXFXXazxJIVXX-144-144.png" alt />
        <span>腔调</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      value: "",
      ifor: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
      ],
      ifor2: [1, 2, 3, 4, 5],
    };
  },
  components: {},
};
</script>

<style scoped>
.van-button--normal {
  width: 50%;
}
h1 {
  font-family: Heiti SC;
  color: #5f646e;
  height: 1.8rem;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 2.3rem;
  font-weight: 300;
  font-size: 14px;
}
.moreMenuDiv {
  color: #5f646e;
  font-size: 12px;
  display: flex;
  flex-direction: column; /* 通过给父元素设置主轴方向，控制字元素的排列方式 */
  flex-wrap: wrap;
  margin: 20px;
  /* width: 25%; */
  /* box-sizing: border-box; */
  text-align: center;
}
.moreMenu {
  display: flex;
  justify-content: start;
  border: 1px solid #ccc;
  flex-wrap: wrap;
  /* 设置子元素是否换行 */
}

img {
  width: 47px;
  margin-bottom: 10px;
}
</style>