<template>
  <div id="login">
    <div class="userLogin">
      <el-form label-position="left" ref="userLog" :rules="rules" :model="user">
        <el-form-item label="账号:" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>

        <el-row :gutter="20">
          <el-col :span="5" :offset="13">
            <el-button type="primary" @click="userLogin()">登录</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="success">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    userLogin() {
      this.$refs.userLog.validate(async v => {
        console.log(v);
        if (v === true) {
          const {
            data: {
              data,
              meta: { status, msg }
            }
          } = await this.$http.post("login", this.user);
          console.log(data);
          if (status === 200) {
            this.$message.success(msg);
            sessionStorage.setItem("token", data.token);
            this.$router.push("/home");
          }
        }
      });
    }
  },
  data() {
    var user = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var pwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      user: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [{ validator: user, trigger: "blur" }],
        password: [{ validator: pwd, trigger: "blur" }]
      }
    };
  }
};
</script>

<style scoped lang="less">
#login {
  height: 100%;
  width: 100%;
  background: url("../assets/img/tu.jpg");
  align-items: center;
  justify-content: center;
  display: flex;
  .userLogin {
    width: 400px;
    height: 350px;
    border: 1px #ccc solid;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    padding: 50px 10px 0px;
    border-radius: 20px;
  }
}
</style>
