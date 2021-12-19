<template>
  <div class="box">
    <div style="display: flex">
      <div class="logoBox">
        <img
          class="img"
          src="../assets/images/logo.png"
          alt="logo"
          width="60"
        />
        <div class="title">MEMORY</div>
      </div>
      <div class="menuBox">
        <a class="menuItem">NFT铸造</a>
        <a class="menuItem">NFT-RICH</a>
        <a class="menuItem">NFT交易</a>
      </div>
    </div>
    <img class="lang" src="../assets/images/lang.png" width="40" />
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
  padding: 1rem 2rem;
  background-color: #191b27;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logoBox {
  display: flex;
  align-items: center;
}
.title {
  font-size: 2rem;
  word-spacing: 40;
  font-weight: bold;
  margin-left: 2rem;
}
.menuBox {
  margin-left: 5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.menuItem {
  font-size: 1.5rem;
  margin: 0 1.5rem;
  cursor: pointer;
  word-break: keep-all;
}
@media screen and (max-width: 1280px) {
  .box {
    padding: 1% 5%;
  }
  .title {
    font-size: 1rem;
    margin-left: 1rem;
  }
  .img {
    width: 2rem;
  }
  .menuBox {
    margin-left: 1rem;
  }
  .menuItem {
    font-size: 1rem;
    margin: 0 1rem;
  }
  .lang {
    width: 2rem;
    place-self: flex-end  ;
  }
}

</style>
