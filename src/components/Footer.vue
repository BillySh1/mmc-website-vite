<template>
  <div class="box">
    <div class="title">
      <div style="margin-right: 2rem">TIME COURSE</div>
      <img class='colorBall' src="../assets/images/colorBall.png" alt="color" />
    </div>
    <img class="rightTop" src="../assets/images/rightTop.png" alt="rightTop" />
    <img class="star" src="../assets/images/en_star.png" alt="en" />
    <div class="footer">
      <img class='logo' src="../assets/images/mmcBlack.png" alt="logo" />
      <div class="content">GAME FI | NFT-THE THREE KINDOMS  MMC | AGAINST </div>
      <div class="content">MMC | INTELLIGENT AGGREGATION TRANSACTION</div>
      <div class="sub">©2021 MMC LABs. All Rights Reserved. “MEmory” is a registered trademark of MMC LABs in various territories worldwide.</div>
      <div class="icons">
          <a href="https://twitter.com/BTCJod?s=09" target="_blank">
          <img class='item' src="../assets/images/twitterGreen.png" alt="green1">
          </a>
          <a href="https://t.me/MemorySwap1" target="_blank">
          <img class='item' src="../assets/images/teleGreen.png" alt="green2">
          </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data: DataProps = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  background-image: url("../assets/images/footerBg.png");
  background-size: cover;
  padding: 6rem 7% 4rem 7%;
  position: relative;
}
.title {
  display: flex;
  align-items: center;
  font-size: 3.8rem;
  font-family: Arial;
  font-weight: 900;
  color: #ffffff;
}
.rightTop {
  position: absolute;
  right: 7%;
  top: 2rem;
}
.star {
  width: 100%;
  margin-top: 4rem;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 3rem;
    font-size: 2rem;
    font-family: Arial;
    font-weight: 900;
    color: #ffffff;
    font-style: italic;
  }
  .sub {
    margin-top: 5rem;
    text-align: center;
    max-width: 80%;
    font-size: 1.5rem;
    font-family: Arial;
    font-weight: 400;
    color: #ffffff;
  }
  .icons {
    display: flex;
    margin-top: 3rem;
    gap: 3rem;
    .item {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 760px) {
  .title{
    font-size: 2rem;
    .colorBall{
      max-width: 2rem;
    }
  }
  .rightTop{
    max-width: 6rem;
  }
  .footer{
    .logo{
      max-width: 5rem;
    }
    .content{
      font-size: 1.5rem;
    }
    .sub{
      font-size: 1rem;
    }
    .icons{
      img{
        max-width: 3rem;
      }
    }
  }
}
</style>
