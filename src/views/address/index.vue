<!--  -->
<template>
  <div class="address">
    <van-nav-bar
      title="我的收货地址"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      show-delete
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @click-item="chooseAddress"
    />
  </div>
</template>

<script>
import { addressSearch } from "../../api/address";
// import { addressDel } from "../../api/address";

export default {
  components: {},
  data() {
    //这里存放数据
    return {
      chosenAddressId: "1",
     
      list: [
        // {
        //   id: "1",
        //   name: "张三",
        //   tel: "13000000000",
        //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        //   isDefault: true,
        // },
        // {
        //   id: "2",
        //   name: "李四",
        //   tel: "1310000000",
        //   address: "浙江省杭州市拱墅区莫干山路 50 号",
        // },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    async init() {
      let res = await addressSearch();
      console.log(res);
      let arr = [];
      res.data.addresses.forEach((element) => {
        let obj = {
          id: element._id,
          name: element.receiver,
          tel: element.mobile,
          address: element.address,
          isDefault: element.isDefault,
        };
        arr.push(obj);
      });
      console.log(arr);
      if (res.status == 200) {
        this.list = arr;
      }
      console.log(this.list, 666666666666666);
    },

    onAdd() {
      this.$router.push("/addressEdit");
    },

    // async ondit(id) {
    //   let del = await addressDel(id);
    // },
    onClickLeft() {
      // this.$router.push("/mine");
      history.back(-1);
    },
    onEdit(value) {
      console.log(value);
      let id = value.id;
      // console.log(id);
      // console.log(this);
      // this.$router.push({ path: `/editAdress/${id}` });
      this.$router.push({
        name: "EditAddress",
        query: { id },
      });
    },
    
    chooseAddress(item, index) {
      console.log(item, index);
      localStorage.setItem("addressId", item.id);
      // const str =localStorage.getItem('productStr')

      // let arr = JSON.parse(str);
      // console.log(arr);
      // this.$router.push({path:'/buy',query:{arr}})
      let num = localStorage.getItem("num");
      if(num == 2)
      this.$router.push("/buy");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.list = JSON.parse(localStorage.getItem("address"));
    this.init();
    // alert(this.$route.query.a);
    // this.num = this.$route.query.a;
    // localStorage.setItem("num",this.$route.query.a)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
#app .van-cell--borderless .van-icon .van-icon-edit .van-address-item__edit {
  display: none;
}
</style>
