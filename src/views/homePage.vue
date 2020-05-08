<template>
  <div class="homePage">
    <div class="header-title">
      <div class="header-title-banner">
        <img src="@/assets/img/logo_03.png" alt="" />
        <img src="@/assets/img/logo_05.png" alt="" />
      </div>
    </div>
    <div class="header-title-bg">
      <div class="header-nav-box">
        <div v-for="item in navList" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        '首页',
        '品牌介绍',
        '分龄课程',
        '课程优势',
        '教学模式',
        '授课名师',
        '精彩图集',
        '原创文章',
        '联系我们',
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.homePage {
  .header-title {
    // position: relative;
    overflow: auto;
    background-color: rgb(47, 172, 228);
    padding-top: 10px;
    .header-title-banner {
      width: 90%;
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }
    .header-title-nav {
      position: absolute;
      left: 50%;
      width: 90%;
      margin-left: -600px;
      margin: 0 auto;
      /deep/.el-menu {
        display: flex;
        /deep/.el-menu-item {
          font-size: 16px;
          flex: 1;
          text-align: center;
        }
      }
    }
  }
  .header-title-bg {
    background-image: url(../assets/img/png_18.png);
    height: 65px;
    position: absolute;
    z-index: 3;
    width: 100%;
    .header-nav-box {
      width: 90%;
      margin: 0 auto;
      display: flex;
      height: 43px;
      div {
        flex: 1;
        text-align: center;
        line-height: 43px;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
  .main {
    // margin-top: -20px;
    z-index: 2;
  }
}
</style>
