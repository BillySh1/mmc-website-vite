<template>
  <div class="box">
    <div class="left">
      <div class="content">
        <div class="content1">{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
        <br />
        <br />
        <div>{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
      </div>
      <img src="../assets/images/line.png" alt="line" />
      <div class="more">MORE</div>
    </div>
    <div class="right">
      <div class="grid">
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/circle.png" alt="circle" />
            <div class="vcenter">MMC机制</div>
          </div>
          <div>
            <p>买入</p>
            <p>卖出</p>
            <p>护盘</p>
            <p>抽奖</p>
          </div>
        </div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">1</div>
      </div>
      <div class="bottom">CORE PLATES</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "Plates",
  setup() {
    console.log("1-开始创建组件-setup");
    const data: DataProps = reactive({
      leftContent: "In the world's first story NFT Market",
    });
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
  display: flex;
  height: 100vh;
}
.left {
  width: 25%;
  background: #eedd22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial;
  font-weight: normal;
  color: #3f4243;
  font-style: italic;
  text-align: left;
  padding: 0 2rem;
  img {
    margin: 8rem 0 8rem 0;
  }
  .content {
    text-align: left;
    line-height: 1.5rem;
    .content1 {
      font-size: 1.2rem;
    }
  }
  .more {
    border: 5px solid #ffffff;
    font-size: 2rem;
    font-family: zihun143-zhengkuchaojihei;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 2rem 0;
    width: 60%;
    font-style: normal;
    place-self: center;
  }
}
.right {
  width: 100%;
  background-image: url("../assets/images/platesBg.jpg");
  background-size: 100% 100%;
  padding: 5rem;
  .grid {
    font-size: 1.2rem;
    font-family: Source Han Sans TC;
    font-weight: bold;
    text-decoration: underline;
    color: #ffffff;
    width: 100%;
    padding-right: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    .item {
      width: 80%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        position: relative;
        .vcenter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .bottom {
    font-size: 3.5rem;
    font-family: Arial;
    font-weight: 900;
    color: #ffffff;
    text-align: right;
  }
}
</style>
