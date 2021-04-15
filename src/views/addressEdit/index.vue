<!--  -->
<template>
  <div class="addressEdit">
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
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { addressAdd } from "../../api/address";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
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
    return { areaList, searchResult: [] };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onClickLeft() {
      // this.$router.push("/address");
       history.back(-1);
    },
    async onSave(content) {
      // console.log(content.id);
      Toast("save");
      console.log(111, content);
      // this.id = content.id;
      this.name = content.name;
      this.phone = content.tel;
      this.province = content.province;
      this.city = content.city;
      this.region = content.county;
      this.detail_addr = content.addressDetail;
      this.isDefault = content.isDefault;
      this.areaCode = content.areaCode;
      // console.log(this.areaCode);
      // console.log(content);
      var obj = {
        // id: this.id,
        receiver: this.name,
        mobile: this.phone,
        regions: this.city + this.region + this.detail_addr + "",
        address: this.city + this.region + this.detail_addr + "",
        isDefault: this.isDefault,
        // address: this.city + this.region + this.detail_addr + "",
      };

      const res = await addressAdd(obj);
      // console.log(res);

      // console.log(222222, res);
      // console.log(res.config.data);
      // let data = res.config.data;
      // let arr = [res.config.data];
      // console.log(arr);
      // console.log(data);

      if (res.status == 200) {
        this.$router.push({
          path: `/address`,
          // query: { data },
        });
      }
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
  created() {},
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
<style scoped></style>
