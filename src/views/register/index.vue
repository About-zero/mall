<!--  -->
<template>
  <div class="login reg">
    <van-nav-bar
      title="登录和注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-uploader :after-read="afterRead" v-if="!imgUrl" />
    <img :src="imgUrl" alt="" v-else />
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="nickName"
        type="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { reqRegister } from "../../api/user";
import { Toast } from "vant";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      userName: "",
      password: "",
      imgUrl: "",
      nickName: "",
      // avatar: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgUrl = file.content;
    },
    async onSubmit(obj) {
      console.log("submit", obj);
      const result = await reqRegister({ ...obj, avatar: this.imgUrl });
      console.log(result);
      if (result.status == 200) {
        Toast.success("注册成功");
        this.$router.replace("/login");
      }
    },
  },
  created() {},
  //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 5px 0;
}
/* .van-uploader__input {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 5px 0;
} */
button {
  background-color: red;
  border: 0;
}
.reg {
  text-align: center;
}
/* .tit{
  : 7rem;
} */
</style>
