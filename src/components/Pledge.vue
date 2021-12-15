<template>
  <div class="box">
    <div class="content">
      <div class="left">
        <div class="border">
          <img src="../assets/images/mofang.png" alt="mofang" />
        </div>
      </div>
      <div class="right">
        <div class="pledgeMining">PLEDGE MINING</div>
        <div class="subMiningContent">
          <div class="top">
            The ecology gradually improved and began to seekmore possibilities.
          </div>
          <br />
          <br />
          <div>
            The ecology gradually improved and began to seekmore
            possibilities.The ecology gradually improved and began to seekmore
            possibilities.
          </div>
        </div>
        <div class="blue">THE ECLOGY GRADUALLY 2022.01</div>
        <div class="bottom">
          <div class="more">MORE</div>
          <img src="../assets/images/right.png" alt="right" />
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
  width: 100%;
  background-image: url("../assets/images/pledgeBg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.content {
  width: 80%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 50%;
    display: flex;
    align-items: center;
    .border {
      width: fit-content;
      display: flex;
      justify-items: center;
      align-items: center;
      padding: 10rem 8rem;
      border: 5px solid white;
    }
  }
  .right {
    width: 50%;
    .pledgeMining {
      width: 100%;
      text-align: center;
      border: 9px solid white;
      padding: 0.5rem 1rem;
      font-size: 4.5rem;
      font-weight: 900;
      color: #ffffff;
      margin-bottom: 2rem;
    }
    .subMiningContent {
      font-size: 1.5rem;
      font-weight: normal;
      font-style: italic;
      color: #ffffff;
      margin-bottom: 3rem;
    }
  }
  .blue {
    font-size: 2rem;
    font-weight: bold;
    color: #0091c9;
    line-height: 1.5rem;
    margin-bottom: 6rem;
  }
  .bottom {
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    img{
        margin-right: 2rem;
    }
    .more {
      border: 10px solid white;
      padding: 0.5rem 0;
      width: 50%;
      text-align: center;
      font-size: 2rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
