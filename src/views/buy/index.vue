<!--  -->
<template>
  <div class="buy">
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @click-item="a"/>
    <div class="buylist">
      <div class="page-content">
        <div class="shop" v-for="(item) in buylist" :key="item._id">
          <div class="sp">
            <!-- <van-checkbox v-model="item.checked" class="checkbox"> -->
            <div class="picwrap">
              <img :src="item.product.coverImg" alt />
            </div>
            <!-- </van-checkbox> -->
            <div class="detailwrap">
              <div class="detail">
                <p>{{item.product.name}}</p>
              </div>
              <div class="price">
                <span>￥{{item.product.price}}</span>
                <br />
                <span>x{{item.quantity}}</span>
              </div>
            </div>
          </div>
          <div class="text">
            <p class="ps1">
              <span>配送方式</span>
              <span>普通配送</span>
              <span>快递 免邮</span>
              <span>></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar class="tijiao" :price="sumPrice*100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import Vue from "vue";
import { SubmitBar } from "vant";
import { Toast } from "vant";
import {addressSingle} from "../../api/address"
Vue.use(SubmitBar);
import { reqSubmitOrder } from "../../api/order";
// import { Toast } from 'vant';
export default {
  components: {},
  data() {
    return {
      buyarr: [],
      buylist: [],
      chosenAddressId:1,
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          regions:'浙江省',
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        }]
        };
    },
    //监听属性 类似于data概念
    computed: {
        sumPrice(){
            return this.buylist.reduce(
                function(pre,cur) {
                    return pre+cur.product.price*cur.quantity
                    },0)
        }
    },
    //监控data中的数据变化
    watch: {},
    
    methods: {
      a(item,index){
      console.log(item,index);
      this.$router.push('/address')
      },
       async initbuy(){
        
          this.buylist = JSON.parse(localStorage.getItem('productStr'));
           this.buylist.forEach(v=>{
                let obj={
                    quantity:v.quantity,
                    product :v._id,
                    price:v.product.price
                }
                this.buyarr.push(obj)
            })
           console.log(this.buyarr);
           let aaa = localStorage.getItem('addressId');
            console.log(aaa);
            let res = await addressSingle(aaa);
            console.log(res);
            let obj1 = {
              id: res.data._id,
              name: res.data.receiver,
              tel: res.data.mobile,
              regions:res.data.regions,
              address: res.data.address,
              isDefault: res.data.isDefault,
            }
            this.chosenAddressId = obj1.id;
            console.log(this.idd);
            console.log(obj1);
            this.list = [obj1];
            /*
            data:
address: "杭州市西湖区 黄龙万科中心"
createdAt: "2021-04-14T08:03:46.545Z"
isDefault: false
mobile: "13456786543"
receiver: "宋志康康"
regions: "北京市北京市东城区"
updatedAt: "2021-04-14T10:51:34.947Z"
user: "60755b01bc1200350079cd1e"
__v: 0
_id: "6076a1e2cad4792700a110b6"
__proto__: Object
            */
        },
     async onSubmit() {
       console.log(this.list[0]);
      let objdata = {
        receiver: this.list[0].name,
        regions: this.list[0].regions,
        address: this.list[0].address,
        orderDetails: this.buyarr,
      };
      let res = await reqSubmitOrder(objdata);
      console.log(res);
      Toast.success("订单生成成功");
      this.$router.push({
        path: `/order`,
      });
    }, 
  },


  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initbuy();
    // console.log(this.$route.query.id);
    console.log(this.chosenAddressId);
    
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
<style  scoped >
.price span:nth-of-type(1) {
  font-size: 15px;
}
.price span:nth-of-type(2) {
  font-size: 1px;
  display: block;
  float: right;
  color: #aaa;
}
.buylist {
  width: 352px;
  min-height: 100px;
  margin: 0 auto;
  margin-bottom: 50px;
  /* background-color: wheat; */
}

.buy .van-address-list {
  padding-bottom: 10px;
}
.van-address-list__add {
  display: none;
}
.van-address-item__edit{
  display: none;
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
.text {
  padding-left: 38px;
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
  margin-top: 20px;
  background-color: yellow;
}
.sp .detailwrap {
  height: 100px;
  /* background-color: yellowgreen; */
  margin-top: 20px;
  width: 214px;
  height: 120px;
  margin-left: 10px;
  display: flex;
}
.detailwrap .detail {
  width: 214px;
  height: 100px;
  /* background-color: violet; */
}
.picwrap img {
  width: 100px;
  height: 100px;
}
.detail p {
  font-size: 1px;
}
.ps1 {
  font-size: 10px;
}
.ps1 span:nth-of-type(2),
.ps1 span:nth-of-type(4) {
  color: #bbb;
  margin-left: 10px;
}
.ps1 span:nth-of-type(3) {
  margin-left: 117px;
}
</style>