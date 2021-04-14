<!--  -->
<template>
  <div class="cart">
    <div class="head gradient">
      <div class="text clear">
        <div class="left">
          购物车(
          <span>{{sumnum}}</span>)
        </div>
        <div class="right" @click="manage()">{{a}}</div>
      </div>
      <p class="total">
        共
        <span>{{sumnum}}</span>件宝贝
      </p>
    </div>

    <div class="page-content">
      <div class="shop" v-for="(item,index) in goodslist" :key="item._id">
        <div class="sp">
          <van-checkbox v-model="item.checked" class="checkbox">
            <div class="picwrap">
              <img :src="item.product.coverImg" alt />
            </div>
          </van-checkbox>
          <div class="detailwrap">
            <div class="detail">
              <p>{{item.product.name}}</p>
            </div>
            <div class="price">
              <span>￥{{item.product.price}}</span>
              <div class="x">
                <input type="button" value="-" @click="sub(index)" />
                <input type="text" :value="item.quantity" />
                <input type="button" value="+" @click="add(index)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar v-if="flag" :price="sumPrice*100" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar v-else button-text="删除" @submit="onDelete">
      <van-checkbox class="allselect" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <!-- <van-popup v-model="show">内容</van-popup> -->
  </div>
</template>

<script>
import { reqCartDetail } from "../../api/cart";
import { reqRemoveProductMany } from "../../api/cart";
import { Dialog } from "vant";

// Dialog({ message: '提示' });
// import {reqAddCart} from "../../api/cart"
// import {reqRemoveProduct} from "../../api/cart"
export default {
  components: {},
  data() {
    return {
      // flag:false,
      goodslist: [],
      a: "管理",
      flag: true,
      show: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    sumnum() {
      return this.goodslist.reduce(function (pre, cur) {
        return pre + cur.quantity;
      }, 0);
    },
    checked: {
      set(flag) {
        return this.goodslist.forEach((item) => (item.checked = flag));
      },
      get() {
        return (
          this.goodslist.length ==
          this.goodslist.filter((item) => item.checked == true).length
        );
      },
    },
    sumPrice() {
      return this.goodslist
        .filter((item) => item.checked == true)
        .reduce(function (pre, cur) {
          console.log(cur.quantity);
          console.log(cur.product.price);
          return pre + cur.product.price * cur.quantity;
        }, 0);
    },
  },
  //监控data中的数据变化
  watch: {},

  methods: {
    async initCartList() {
      let res = await reqCartDetail();
      console.log(res);
      this.goodslist = res.data;
      console.log(this.goodslist);
    },
    onSubmit() {
      let arr = this.goodslist.filter((item) => item.checked == true);
      console.log(arr);
      this.$router.push({ path: "/buy", query: { arr } });
    },
    onDelete() {
      Dialog.confirm({
        title: "确认将这一个宝贝删除？",
        message: "确认删除吗",
      })
        .then(async () => {
          // on confirm
          let arr = this.goodslist.filter((item) => item.checked == true);
          console.log(arr);
          let idArr = [];
          arr.forEach((v) => {
            idArr.push(v._id);
          });
          console.log(idArr);
          let res = await reqRemoveProductMany({ ids: idArr });
          console.log(res);
          if (res.status == 200) {
            this.initCartList();
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    sub(index) {
      this.goodslist[index].quantity -= 1;
      let num1 = this.goodslist[index].quantity;
      if (num1 < 1) {
        this.goodslist[index].quantity = 0;
      }
      // let indexid = this.goodslist[index]._id;
      // let res = await reqAddCart({product:indexid,quantity:-1})
      // console.log(res);
      // this.initCartList()
    },
    add(index) {
      this.goodslist[index].quantity += 1;
      // let indexid = this.goodslist[index]._id;
      // let res = await  reqAddCart({product:indexid,quantity:this.goodslist[index].quantity});
      // console.log(res);
      // this.initCartList()
    },
    manage() {
      this.flag = !this.flag;
      this.a = this.flag ? "管理" : "完成";
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initCartList();
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
<style  scoped>
.van-submit-bar__bar {
  width: 300px;
  position: fixed;
  bottom: 45px;
  background-color: white;
  width: 372px;
}
.disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
.x {
  float: right;
}
.x input {
  outline: none;
  border: 1px #ccc solid;
  text-align: center;
}
.total span {
  text-align: center;
}
.text .left span {
  font-size: 15px;
}
html body {
  background-color: #f2f2f2 !important;
}
.cart {
  width: 400px;
  /* height: 500px; */
  background-color: #f2f2f2;
  position: relative;
}
.head {
  height: 177px;
  background-color: tomato;
  box-sizing: border-box;
}
.text {
  color: white;
  width: 388px;
  height: 52px;
  font-size: 22px;
  box-sizing: border-box;
  padding: 20px 22px 10px 12px;
}
.text .left {
  float: left;
  line-height: 1;
  font-weight: 800;
}
.text .right {
  float: right;
  font-weight: 500;
  font-size: 16px;
  /* margin-right: 50px; */
}
.total {
  color: white;
  margin-left: 13px;
}
.total span,
.left span {
  width: 20px;
  display: inline-block;
}

.page-content {
  width: 360px;
  left: 21px;
  top: 30px;
  background-color: #f2f2f2;
  position: absolute;
  margin-bottom: 20px;
  margin-top: 85px;
  border-radius: 12px;
  padding-bottom: 100px;
}

.shop {
  background-color: white;
  min-height: 150px;
  border-radius: 10px;
  border-radius: 12px;
  overflow: hidden;
  padding: 10px;
  margin-bottom: 10px;
}

.sp {
  /* background-color: rgb(64, 62, 192); */
  margin-top: 20px;
  display: flex;
  height: 140px;
  flex-direction: row;
}
.sp .picwrap {
  width: 100px;
  height: 100px;
  background-color: yellow;
}
.sp .detailwrap {
  width: 100px;
  height: 100px;
  /* background-color: yellowgreen; */
  margin-top: 20px;
  width: 164px;
  height: 120px;
  margin-left: 10px;
}
.detailwrap .detail {
  width: 164px;
  height: 100px;
  /* background-color: violet; */
}
.detailwrap .price {
  width: 164px;
  height: 20px;
  /* background-color: turquoise; */
}
.price input {
  display: inline-block;
}
.price input:nth-of-type(2) {
  width: 50px;
}
.price input:nth-of-type(1) {
  margin-left: 20px;
}
.picwrap img {
  width: 100px;
  height: 100px;
}
.detail p {
  font-size: 1px;
}
.price span {
  font-size: 1px;
  color: tomato;
}
.van-submit-bar__bar {
  justify-content: space-around;
}
</style>