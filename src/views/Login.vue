<template>
  <div id="app-login">
    <el-col :span="6">
      <div shadow="hover" class="login-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">

          <div class="login-container-title">后台管理系统</div>

          <el-form-item prop="username" class="login-username-container">
            <el-input
              placeholder="请输入账号"
              v-model="ruleForm.username"
              clearable
            ></el-input>
          </el-form-item>


          <el-input
            class="login-password-container"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            show-password
          ></el-input>


          <el-button
            class="login-submit-container"
            type="primary"
            @click="submitForm('ruleForm')"
          >L o g i n</el-button>
          
        </el-form>
      </div>
    </el-col>
    <div class="footer">
      <div class="provider">design by chapter</div>
    </div>
  </div>
</template>

<script>
let usernameResolve = null;
let usernamePromise = null;
let submiting = false;

function validateUsername(rule, value, callback) {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (submiting) {
    submiting = false;
    usernameResolve(callback);
  }
}

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            validator: validateUsername,
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //没有后端，只能模拟一下
      let loginInfo = {};
      loginInfo.username = this.ruleForm.username;
      usernamePromise = new Promise((resolved, rejected) => {
        usernameResolve = resolved;
      });
      submiting = true;
      this.$refs[formName].validate(() => {});
      usernamePromise.then((callback) => {
        this.$http.get('http://localhost:3000/login?username='+this.ruleForm.username)
            .then((data)=>{
                if(data.data.length==0){
                    callback(new Error('用户名不存在'))
                }else{
                    let info = data.data[0]
                    let token = info && info.token
                    callback()
                    //api的封装
                    //cookie持久存储
                    //动态路由处理
                }
            })
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$margin-between-div: 15px;

#app-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../src/assets/login/timg.jpg");
  filter: blur(0px);

  .login-container {
    filter: blur(0px);

    .login-container-title {
      color: white;
      margin: $margin-between-div auto;
      font-size: 25px;
      letter-spacing: 10px;
      text-align: center;
    }

    .login-username-container {
      margin: $margin-between-div 0;
    }

    .login-password-container {
      margin: $margin-between-div 0;
    }

    .login-submit-container {
      margin: $margin-between-div 0;
      width: 100%;
    }
  }
}

.footer {
  height: 5vh;
  position: fixed;
  bottom: 0;
  width: 100%;

  .provider {
    float: right;
    font-size: 18px;
    letter-spacing: 4px;
    margin: 0 20px;
    color: white;
  }
}
</style>