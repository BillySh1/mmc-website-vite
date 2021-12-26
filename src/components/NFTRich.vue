<template>
  <div id="nftRich" class="box">
    <div class="container">
      <div class="inner">
        <div class="up">
          <div>
            <div class="title">NFT-RICH</div>
            <div class="content">In the world's first story NFT Market</div>
            <div class="content">In the world's first story NFT Market</div>
          </div>
          <div class="more">MORE</div>
        </div>
        <div class="down">
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
        </div>
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
  height: 100vh;
  background-image: url("../assets/images/nftrichBg.png");
  background-size: 100% 100%;
}
.container {
  background-image: url("../assets/images/grid.png");
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 80%;
  .up {
    display: flex;
    margin-bottom: 6rem;
    justify-content: space-between;
    .title {
      font-size: 3rem;
      font-family: Arial;
      font-weight: 900;
      color: #ffffff;
    }
    .content {
      font-size: 1.8rem;
      font-family: Arial;
      font-weight: normal;
      color: #f1f1f1;
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 7px solid white;
      padding: 0.5rem 0;
      width: 25%;
      font-size: 2rem;
      max-height: 3rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
      place-self: end;
    }
  }
  .down {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .border {
      border: 20px solid #000000;
      background-color: white;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .border1 {
      width: 400px;
      height: 400px;
      background-image: url("../assets/images/nft2.jpg");
    }
    .border2 {
      width: 300px;
      height: 400px;
      background-image: url("../assets/images/nft1.png");
    }
    .border3 {
      width: 300px;
      height: 400px;
      background-image: url("../assets/images/nft3.png");
    }
  }
}
@media screen and (max-width: 1280px) {
  .box {
    height: unset;
    background-size: cover;
    .container {
      height: unset;
      padding: 5%;
      background-size: cover;
      .inner {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .down {
    flex-direction: column;
    padding: 5%;
    .border1 {
      max-width: 300px;
      max-height: 300px;
    }
    .border2 {
      max-width: 300px;
      max-height: 300px;
    }
    .border3 {
      max-width: 300px;
      max-height: 300px;
    }
  }
}
@media screen and (max-widh: 768px) {
  .inner {
    width: 100%;
    .up {
      .title {
        font-size: 2rem;
      }
      .content {
        font-size: 1.8rem;
      }
    }
  }
}
</style>
