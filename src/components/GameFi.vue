<template>
  <div id='ecology' class="box">
    <div class="up">
      <img src="../assets/gamefi2.png" alt="" />
      <img src="../assets/arrowUp.png" alt="" />
    </div>
    <img class="gamefi" src="../assets/images/gameFi.png" alt="gamefi" />
    <div class="up">
      <img src="../assets/gamefi1.png" alt="" />
      <img src="../assets/gamefi3.png" alt="" />
    </div>
    <div class="content">
      <div class='font1'>NFT ECOLOGY</div>
      <div class="font1">NFT LENDING/NFT MARKET/NFT MINING</div>
      <div class="font1">NFT-RICH GAMEFI</div>
      <div class="font3">ETHEREUM / OEC / FIRECOIN CHAIN</div>
      <div class="border">MEMORYSWAP</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "gameFi",
  setup() {
    const data: DataProps = reactive({});
    onBeforeMount(() => {});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  background-image: url("../assets/images/gamefibg.png");
  background-color: #0b152a;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
}
.gamefi {
  width: 80%;
}
.up {
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 10%;
    height: auto;
  }
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  color: #ffffff;

  .font1 {
    font-size: 1.8rem;
    font-family: Arial-Black;
  }
  .font3 {
    font-size: 1.5rem;
    font-family: Arial-ItalicMT;
  }
  .border {
    cursor: pointer;
    border: 10px solid #ffffff;
    font-size: 1.8rem;
    font-family: Arial-Black;
  }
}

@media screen and (max-width: 1024px) {
  .box {
    background-image: url("../assets/images/gameFiMobile.png");
    background-size: 100%;
    .up {
      width: 100%;
      align-items: center;
      gap: 2rem;
    }
  }
}

@media screen and (max-width: 375px) {
  .box{
    .gamefi{
      width: 100%
    }
    .content{
      .font1{
        font-size: 12px;
      }
      .font2{
        font-size: 21px;
      }
      .font3{
        font-size: 9px;
      }
      .border{
        font-size: 10px;
        border: 5px solid white;
      }
    }
  }
  
}
</style>
