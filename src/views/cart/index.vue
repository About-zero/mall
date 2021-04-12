<!--  -->
<template>
    <div class='cart'>
      <div class="head gradient">
        <div class="text clear">
          <div class="left">购物车(<span></span>)</div>
          <div class="right">管理</div>
        </div>
        <p class="total">共<span></span>件宝贝</p>
      </div>
        <div class="page-content">
          <div class="shop">
            <van-checkbox v-model="checked" class="checkbox">
              <!-- <img src="../../../assets/cat.PNG" alt=""> -->
              复选框</van-checkbox>
              <div class="sp">
                <van-checkbox v-model="checked" class="checkbox">
                  <div class="picwrap">
                    <img src="" alt="">
                  </div>
                 </van-checkbox>
                 <div class="detailwrap">
                    <div class="detail"></div>
                    <div class="price">
                      <span>￥</span>
                        <input type="button" value="-">
                        <input type="text">
                        <input type="button" value="+">
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import {reqCartDetail} from "../../api/cart";
    import {setToken} from "../../utils/util"
export default {
    
    components: {},
    data() {
        
        return {
            checked: true,
            goodslist:[]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    
    methods: {
      async  initCartList(){
        setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDZkZDExOTlhMTg3YjJkNzBlYzI2ZDUiLCJpYXQiOjE2MTgyMjUwODksImV4cCI6MTYxODI2MTA4OX0.8bHz338PP-mA9bhRhU1n-vTvQx189a5lFy5Nt2sxXNs')
        let res = await reqCartDetail();
        console.log(res);
        this.goodslist = res.data;
        console.log(this.goodslist);
        },
        
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.initCartList()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        
    },
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    beforeDestroy() {}, 
    destroyed() {}, 
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}, 
    }
</script>
<style  scoped>
    .cart{
      width: 400px;
      height: 500px;
      background-color: #f2f2f2;
      position: relative;
    }
    .head{
      height: 177px;
      background-color:tomato;
    }
    .text{
      color: white;
      width: 388px;
      height: 52px;
      font-size: 22px;
      box-sizing: border-box;
      padding: 20px 22px 10px 12px;
    }
    .text .left{
      float: left;
      line-height: 1;
      font-weight: 800;
    }
    .text .right{
      float: right;
      font-weight: 500;
      font-size: 16px;
    }
    .total{
      color: white;
      margin-left: 13px;
    }
    .total span,.left span{
      width: 20px;
      display: inline-block;
    }
   
    .page-content{
      width:360px;
      left: 8px;
      top: 30px;
      background-color: #f2f2f2;
      height: 100%;
      position: absolute;
      margin-bottom: 20px;
      margin-top: 85px;
      border-radius: 12px;
    }
    .shop{
      background-color: white;
      min-height: 187px;
      border-radius: 10px;
      border-radius: 12px;
      overflow: hidden;
      padding: 10px;
    }
    
    .sp{
      background-color: rgb(64, 62, 192);
      margin-top: 20px;
      display: flex;
      height: 140px;
      flex-direction: row;
      
    }
    .sp .picwrap{
      width: 100px;
      height: 100px;
      background-color: yellow;
    }
    .sp .detailwrap{
      width: 100px;
      height: 100px;
      background-color: yellowgreen;
      margin-top: 20px;
      width: 164px;
      height: 120px;
      margin-left: 10px;
    }
    .detailwrap .detail{
      width:164px;
      height: 100px;
      background-color: violet;
    }
    .detailwrap .price{
      width: 164px;
      height: 20px;
      background-color: turquoise;
    }
    .price input{
      display: inline-block;
    }
    .price input:nth-of-type(2){
      width: 50px;
    }
    .price input:nth-of-type(1){
      margin-left: 40px;
    }
</style>