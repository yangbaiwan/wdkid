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
    <div class="age-group">
      <div class="age-group-title">
          0-6岁低幼 分龄体系课程
      </div>
      <div class="age-group-describe">
        每个宝宝都是爸妈，心里的唯一，眼中的天才 <br/>
        鼓励他、引导他，陪他用英语去看世界，看过世界的宝宝更自信！
      </div>
      <div class="age-group-body-list">
        <div class="body-one" v-for="(item, index) in babyInfo" :key="index">
          <img :src="item.pic" alt="">
          <div class="body-one-describe">
            <div class="age" style="font-size: 30px;color: #323232;padding:5px">{{ item.age }}</div>
            <div style="font-size: 24px;padding:5px">{{ item.text }}</div>
            <div style="font-size: 16px;padding:5px">{{ item.des }}</div>
            <div class="link" style="font-size: 16px;color: #323232;padding:15px">MORE>></div>
          </div>
          <div class="bg"></div>
        </div>
      </div>
      <div class="original-article">
        <div class="original-article-title">原创文章</div>
        <div class="original-article-main">
          <div class="original-article-main-title">
            南方都市报撰文推荐英语小神童...
          </div>
          <div class="original-article-main-subtitle">孩子大脑发育最关键的几年，妈妈要做这件事婴儿刚出生时，脑的重量仅有350-400克，大约是成人脑重的...
          </div>
          <div class="original-article-main-list" v-for="(item, index) in articleList" :key="index">
            <img src="../assets/img/ico_37.png" alt="">
            <div class="original-article-hover" style="flex:1;">{{ item.text }}</div>
            <div style="width:128px;">{{ item.time }}</div>
          </div>
          <div class="original-article-btn">查看更多原创</div>
        </div>
      </div>
      <div class="wdkid-advantage">
        <div class="wdkid-advantage-title">英语小神童优势</div>
        <div class="wdkid-advantage-list">
          <div class="wdkid-advantage-listOnce" v-for="(item, index) in advantage" :key="index">
            <img class="display:block;" :src="item.pic" alt="">
            <div style="font-size: 18px;heigth:35px;line-height: 35px;margin-top:7px">{{ item.title }}</div>
            <div style="margin:5px">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="wdkid-feedback">
        <div class="wdkid-feedback-title">用户心得反馈</div>
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
      babyInfo: {
        one: {
          age: '0-2岁',
          text: '语言准备期',
          des: '培养英文好感度，肢体互动游戏',
          pic: require('../assets/img/png_08.png')
        },
        twe: {
          age: '2-4岁',
          text: '语言表达期',
          des: '绘本儿歌常用语，张开嘴巴讲英语',
          pic: require('../assets/img/png_03.png')
        },
        there: {
          age: '4-6岁',
          text: '语言完整期',
          des: '词汇句型拓展，幼小衔接准备',
          pic: require('../assets/img/png_05.png')
        },
      },
      articleList: [
        { text: '南方都市报撰文推荐英语小神童', time: '2019-08-29' },
        { text: ' 二胎妈妈“暑假课程表”刷屏：所有牛娃背后，都站着苦', time: '2019-07-23' },
        { text: ' 孩子一放暑假，我就想爆炸！', time: '2019-07-13' },
        { text: ' 高中辍学，却在40岁时培养出国民偶像，这位妈妈凭什', time: '2019-06-06' },
        { text: ' 孩子爱分享=情商高？哪有这么简单！', time: '2019-06-03' },
        { text: ' 黄多多13岁就染紫发，黄磊到底是怎么想的？', time: '2019-05-24' },
        { text: ' 学英语固然重要，但千万别逼宝宝背单词!', time: '2018-03-23' },
        { text: '  英语启蒙没效果，孩子无助、家长崩溃，到底谁的过错？', time: '2018-02-06' },
      ],
      advantage: [
        { pic: require('../assets/img/ok_19.png'), title: '知名启蒙机构', text: '专注深耕0-6岁婴幼儿英语启蒙' },
        { pic: require('../assets/img/ok_22.png'), title: '优秀教育团队', text: '专注深耕0-6岁婴幼儿英语启蒙' },
        { pic: require('../assets/img/ok_24.png'), title: '家庭式启蒙教学', text: '专注深耕0-6岁婴幼儿英语启蒙' },
        { pic: require('../assets/img/ok_19.png'), title: '多元化教学模式', text: '专注深耕0-6岁婴幼儿英语启蒙' },
        { pic: require('../assets/img/ok_19.png'), title: '趣味性体验课程', text: '专注深耕0-6岁婴幼儿英语启蒙' },
      ]
    }
  },
}
</script>
<style lang="less" scoped>
.el-carousel__item img {
  display: block;
  // width: 100%;
  // height: 100%;
}

.onePage-title {
  position: absolute;
  left: 50%;
  width: 90%;
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
  height: 360px;
  background: url(../assets/img/banner_08.png) center right no-repeat;
  background-color: #f4e8d8;
  .onePage-describe-box {
    width: 90%;
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
.age-group {
  width: 100%;
  // height: 500px;
  overflow: auto;
  .age-group-title {
    background: url(../assets/img/index_07.png) center no-repeat;
    margin: 50px auto 0;
    font-size: 26px;
    width: 473px;
    line-height: 75px;
    text-align: center;
    color: #1eade3;
  }
  .age-group-describe {
    font-size: 16px;
    text-align: center;
    line-height: 32px;
  }
  .age-group-body-list {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    .body-one {
      width: 308px;
      // height: 416px;
      // border: 1px solid red;
      margin: 0 35px;
      img {
        display: block;
        margin: 0 auto;
      }
      .body-one-describe {
            text-align: center;
            background: #EAE8E9;
            height: 255px;
            margin-top: -101px;
            padding-top: 100px;
            box-sizing: border-box;
            
      }
      .bg {
              background: url(../assets/img/1.jpg) center no-repeat;
              width: 237px;
              height: 17px;
              margin: 0 auto;
            }
      .body-one-describe:hover {
            text-align: center;
            background: #2FACE4;
            height: 253px;
            margin-top: -100px;
            padding-top: 100px;
            box-sizing: border-box;
            color: #ffffff!important;
            div {
              color: #ffffff!important;
            }
      }
      
    }
  }
  .original-article {
    // height: 281px;
    vertical-align: top;
    background-color: rgb(244, 244, 244);
    overflow: auto;
    .original-article-title {
      background: url(../assets/img/index_11.png) center no-repeat;
      margin: 30px auto 0;
      font-size: 26px;
      width: 473px;
      line-height: 75px;
      text-align: center;
      color: #1eade3;
    }
    .original-article-main {
      width: 90%;
      margin: 0 auto;
      margin-top: 50px;
      .original-article-main-title {
        font-size: 22px;
        color: #6b6b6b;
        line-height: 50px;
      }
      .original-article-main-subtitle {
        width: 600px;
        line-height: 25px;
        color: #999999;
        font-size: 14px;
      }
      .original-article-main-list {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          width: 660px;
          font-size: 14px;
          height: 34px;
          .original-article-hover {
            cursor: pointer;
          }
          .original-article-hover:hover {
            color: #2face4;
          }
      }
      .original-article-btn {
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        display: block;
        line-height: 37px;
        width: 160px;
        margin-top: 15px;
        font-size: 16px;
        text-align: center;
        border-bottom: 1px solid #00a0ea;
        background-color: #00a0ea;
        color: #fff;
        margin-bottom: 30px;
      }
      .original-article-btn:hover {
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        display: block;
        line-height: 37px;
        width: 160px;
        margin-top: 15px;
        font-size: 16px;
        text-align: center;
        border-bottom: 1px solid #fec206;
        background-color: #fec206;
        color: #fff;
        transition: all .5s;
      }
    }
  }
  .wdkid-advantage {
    text-align: center;
    .wdkid-advantage-title {
       background: url(../assets/img/index_07.png) center no-repeat;
        margin: 30px auto 0;
        font-size: 26px;
        width: 473px;
        line-height: 75px;
        text-align: center;
        color: #1eade3;
    }
    .wdkid-advantage-list {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 50px;
      .wdkid-advantage-listOnce {
        width: 202px;
        margin: 0 10px;
      }
    }
  }
  .wdkid-feedback {
    .wdkid-feedback-title {
       background: url(../assets/img/index_07.png) center no-repeat;
        margin: 30px auto 0;
        font-size: 26px;
        width: 473px;
        line-height: 75px;
        text-align: center;
        color: #1eade3;
    }
  }
}
</style>
