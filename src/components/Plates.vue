<template>
  <div id="nftExchange" class="box">
    <div class="left">
      <div class="content">
        <div class="contentUp">
          <div class="item" v-for="(item, index) in leftContent" :key="index">
            <div>{{ item.left }}</div>
            <div>
              {{ item.right }}
            </div>
          </div>
        </div>
        <img class="line" src="../assets/images/line.png" alt="line" />
      </div>
      <div class="more">MORE</div>
    </div>
    <div class="right">222</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
interface DataProps {}
export default {
  name: "Plates",
  setup() {
    const data: DataProps = reactive({
      leftContent: [
        { left: "IDO", right: "15" },
        { left: "(FARM, POOLS) MINING", right: "50" },
        { left: "REGULAR LENDING, NFT LENDING", right: "5" },
        { left: "NFT ECOLOGY", right: "10" },
        { left: "MACHINE GUN POOL", right: "5" },
        { left: "CHANGE TO ZERO", right: "3" },
        { left: "SWAP PROMOTION AMBASSADOR", right: "0.5" },
        { left: "COMMUNITY INCENTIVE PROMOTION", right: "1.5" },
        { left: "BOARD OF DIRECTORS", right: "5" },
        { left: "ECOLOGICAL RESERVE", right: "5" },
      ],
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
  background: #29bca6;
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
    .contentUp {
      font-size: 1.2rem;
      color: white;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .item {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
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
  background-image: url("../assets/images/platesPc.jpg");
  background-size: cover;
  padding: 5rem;
}

@media screen and(max-width: 1280px) {
  .box {
    height: unset;
    flex-direction: column-reverse;
  }
  .left {
    width: 100%;
    padding: 5% 0;
    align-items: center;
    .line {
      max-width: 80%;
    }
  }
  .right {
    width: 100%;
    padding: 5%;
  }
}

@media screen and (max-width: 768px) {
  .left {
    display: flex;
    .content {
      .contentUp {
        font-size: 1rem;
        padding: 0 1rem;
      }
      font-size: 0.5rem;
      line-height: unset;
      text-align: center;
    }
    img {
      margin: 2rem 0;
    }
    .more {
      font-size: 1rem;
      border: 0.3rem solid white;
      padding: 1rem 0;
    }
  }
  .right {
    padding: 10% 0;
  }
}
@media screen and (max-width: 375px) {
  .right {
    background-image: url("../assets/images/platesMobile.jpg");
    background-size: 100%;
  }
}
</style>
