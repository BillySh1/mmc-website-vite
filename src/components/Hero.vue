<template>
  <div class="box">
    <div class="left">
      <div class="title">Memory coin</div>
      <div>
        <div class="subTitle">
          <div>Discovery</div>
          <div>Collect</div>
          <div>Extraordinary story NFT</div>
          <div class="secondary">in the world's first story NFT Market</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div>TIME COURSE</div>
      <div>CORE PLATES</div>
      <div>NFT-RICH</div>
      <div>智能聚合交易</div>
    </div>
    <div class="go2Swap">
      <div class="title">Go to SWAP</div>
      <div class="sub">Create your own value</div>
      <img src="../assets/images/yellowArrow.png" alt="arrow">
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
  background-image: url("../assets/images/herobg.png");
  background-size: 100% 110%;
  background-repeat: no-repeat;
  position: relative;
  min-height: 80vh;
  z-index: 100;
  padding: 2rem 5% 4rem 5%;
  display: flex;
  justify-content: space-between;
}
.title {
  color: white;
  font-size: 7rem;
  font-weight: bold;
  text-shadow: 10px 0 10px rgba(255, 255, 255, 0.3);
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subTitle {
  font-size: 5rem;
  font-family: Arial;
  font-weight: 900;
  color: #f1f1f1;
  .secondary {
    font-size: 2rem;
    font-weight: normal;
    font-style: italic;
  }
}
.right {
  font-size: 3rem;
  font-family: Arial;
  font-weight: 900;
  color: #f1f1f1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 16rem;
}
.go2Swap {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #29bca6;
  padding: 3.5rem;
  font-family: Arial;
  cursor: pointer;
  .title {
    font-size: 3rem;
    font-weight: normal;
    color: #ffffff;
  }
  .sub {
    font-size: 1.5rem;
    font-weight: 400;
    color: #f0ff49;
    margin: 0.5rem 0;
  }
}
</style>
