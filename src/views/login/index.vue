<template>
  <div class="login">
    <van-nav-bar
      title="
      登录和注册"
      left-arrow
      fixed="true"
      class="tit"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <van-cell value="注册" @click="goreg" />
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";
import { setToken } from "../../utils/util";
import { Toast } from "vant";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      username: "",
      password: "",
      // imgUrl: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async onSubmit(obj) {
      console.log("submit", obj);
      const result = await reqLogin(obj);
      console.log(result);
      if (result.status === 200) {
        setToken(result.data.token);
        Toast.success("登录成功");
        this.$router.replace("/");
      }
    },
    goreg() {
      this.$router.replace("/register");
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
.login {
  text-align: center;
  padding-top: 7rem;
}
.tit {
  height: 3rem;
  border: 1px #ccc solid;
}
</style>
