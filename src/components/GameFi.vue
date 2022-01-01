<template>
  <div class="box">
    <div class="up"></div>
    <img class="gamefi" src="../assets/images/gameFi.png" alt="gamefi" />
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
}
.gamefi {
  width: 100%;
}
.up {
  display: flex;
  justify-content: space-between;
  width: 80%;
  .upLeft {
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid white;
      padding: 0.5rem 0;
      width: 80%;
      font-size: 2rem;
      max-height: 3rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
    }
  }
  img {
    max-width: 700px;
    max-height: 700px;
  }
}

@media screen and (max-width: 1024px) {
  .box {
    background-image: url("../assets/images/gameFiMobile.png");
    background-size: 100%;
    .up {
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
      gap: 2rem;
    }
  }
}
</style>
