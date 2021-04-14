<!--  -->
<template>
  <div class="editAddress">
    <van-nav-bar
      title="我的收货地址"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      :show-postal="false"
      
      show-delete
      :address-info="obj"
      show-set-default
      show-search-result
      :area-placeholder="obj.address"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { addressUpdate } from "../../api/address";
import { addressSingle } from "../../api/address";
// import { addressAdd } from "../../api/address";
const areaList = {
  province_list: {
    110000: "北京市",
    120000: "天津市",
  },
  city_list: {
    110100: "北京市",
    120100: "天津市",
  },
  county_list: {
    110101: "东城区",
    110102: "西城区",
  },
};
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      areaList,
      searchResult: [],
      obj:{},
      id:null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/address");
    },
    async init(value) {
    
      
    let id = this.$route.query.id;
    console.log(id);
    this.id=id;
    let res = await addressSingle(id);
    console.log(res);
    

      //   id: "1",
      //   name: "张三",
      //   tel: "13000000000",
      //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
      //   isDefault: true,
      // },
      /*
      id: element._id,
          name: element.receiver,
          tel: element.mobile,
          address: element.address,
          isDefault: element.isDefault,
      */
      let obj = {
        name: res.data.receiver,
        tel: res.data.mobile,
        address: res.data.address,
        isDefault: res.data.isDefault,
        regions:res.data.regions
      };
      this.obj = obj
      console.log(obj);

      console.log(value);
    },
    async onSave(content) {
        console.log(content);
    //   console.log(this.id);
    //   Toast("save");
    //   console.log(111, content);
    //   // this.id = content.id;
    //   this.name = content.name;
    //   this.phone = content.tel;
    //   this.province = content.province;
    //   this.city = content.city;
    //   this.region = content.county;
    //   this.detail_addr = content.addressDetail;
    //   this.isDefault = content.isDefault;
    //   this.areaCode = content.areaCode;
      // console.log(this.areaCode);
      // console.log(content);
      var newObj = {
        // id: this.id,
        receiver: content.name,
        mobile: content.tel,
        regions: content.province + content.city+content.county,
        address: content.addressDetail,
        isDefault: content.isDefault,
        // address: this.city + this.region + this.detail_addr + "",
      };
      console.log(newObj);
    console.log(this.id);
      const res = await addressUpdate(this.id,newObj);
      console.log(res);
      if(res.status===200){
          Toast.success("修改成功");
        // this.$router.push('/address')
      }
      
    

      // console.log(222222, res);
      // console.log(res.config.data);
      // let data = res.config.data;
      // let arr = [res.config.data];
      // console.log(arr);
      // console.log(data);

      //   if (res.status == 200) {
      //     this.$router.push({
      //       path: `/address`,
      //     });
      //   }
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.init();
  },
};
</script>
<style scoped></style>
