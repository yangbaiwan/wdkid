<template>
  <div class="onePage">
    <div class="onePage-nav">
      <el-carousel height="544px" indicator-position="none">
        <el-carousel-item v-for="item in navImgList" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="onePage-title">
      <div
        v-for="(item, index) in onePageTitle"
        :key="index"
        :style="{ background: item.color }"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="onePage-describe">
      <div class="onePage-describe-box">
        <img src="../assets/img/banner_11.png" alt="" />
        <div>
          <div style="font-size:30px;">英语小神童，让英语启蒙更简单</div>
          <div style="width:100%; margin:0 auto; height:30px;"></div>
          <div style="font-size:18px;  line-height:38px;">
            国内首创的“英语启蒙成长树”体系<br />
            0-6岁宝宝的“分龄分阶”递进式课程<br />
            科学的体系、趣味的儿歌、好玩的游戏、原版的绘本、丰富的动画<br />
            每天15分钟，鼓励他、引导他，陪他用英语去看世界！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navImgList: [require('../assets/img/2018227646517659.png')],
      onePageTitle: {
        one: {
          title: '国内首创的“英语启蒙成长树”体系',
          color: 'rgb(254, 194, 7)',
        },
        twe: {
          title: '专注0-6岁婴幼儿英语在家启蒙课程',
          color: 'rgb(252, 109, 114)',
        },
        three: {
          title: '享誉全球的优质教学资源,用爱启蒙',
          color: 'rgb(32, 213, 196)',
        },
      },
    }
  },
}
</script>
<style lang="less" scoped>
.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
}

.onePage-title {
  position: absolute;
  left: 50%;
  width: 1200px;
  height: 67px;
  margin: -30px auto 0;
  margin-left: -600px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  div {
    flex: 1;
    height: 100%;
    line-height: 67px;
    text-align: center;
    color: #ffffff;
    font-size: 20px;
  }
}
.onePage-describe {
  width: 100%;
  height: 382px;
  background: url(../assets/img/banner_08.png) center right no-repeat;
  background-color: #f4e8d8;
  .onePage-describe-box {
    width: 1200px;
    margin: 0 auto;
    height: 242px;
    padding-top: 70px;
    display: flex;
    img {
      width: 235px;
      height: 242px;
    }
    div {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
