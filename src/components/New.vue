<template>
  <div class="box">
    <div class="left">
      <img src="../assets/images/rect.jpg" alt="rect" />
      <div class="leftPara">
        <div class="leftParaContent">
          MMC'S FINANCING FUND WILL BE DIVIDED INTO: FLOW POOL, PROTECTION POOL
          AND LOTTERY POOL
        </div>
        <div></div>
      </div>
    </div>
    <div class="right">
      <img src="../assets/images/divider.png" alt="divider" />
      <a href="https://memoryswap.net" target="_blank" class="link"
        >GO TO <br />MEMORYSWAP</a
      >
      <img class="mmc" src="../assets/images/mmcBlack.png" alt="mmc" />
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
  background-color: white;
  padding: 5rem 7rem;
  display: flex;
  justify-content: space-between;
  font-style: italic;
}

.left {
  display: flex;
  align-items: center;
  img {
    height: 12rem;
    margin-right: 1rem;
  }
}
.leftPara {
  margin-left: 1rem;
}

.leftParaContent {
  text-align: center;
  font-size: 2rem;
  font-family: Arial;
  font-weight: normal;
  color: #16a6ee;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
}
.right {
  display: flex;
  align-items: center;
  .link {
    text-decoration: none;
    cursor: pointer;
    font-size: 3rem;
    font-family: Arial;
    font-weight: normal;
    text-decoration: underline;
    color: #009de8;
    margin: 1rem 4rem 0rem 3rem;
  }
}

@media screen and (max-width: 1280px) {
  .box {
    flex-wrap: wrap;
    padding: 1rem;
    .left {
     
      .leftParaContent {
        font-size: 1rem;
      }
      img {
        height: 6rem;
      }
    }
    .right {
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 1rem;
      gap: 1rem;
      img {
        width: 1rem;
      }
      .link {
        font-size: 1rem;
        margin: 0rem 1rem;
      }
      .mmc {
        width: 4rem;
      }
    }
  }
}
</style>
