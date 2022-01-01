<template>
  <div class="box">
    <div class="title">代币经济</div>
    <div class="divider">
      <img src="../assets/images/divider.png" alt="divider" />
    </div>
    <div class="content">
        MEMORY SWAP TOKEN (MMC) 是MEMORY S WAP 发行的应用代币。是推动MEMORY
        SWAP网络发展的重要中介。基于 MEMORY SWAP
        的经济模型，鼓励所有参与者和开发者通过代币的社区治理投资于整体生态网络的维护。
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
  padding: 2rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem
}
.title {
  font-size: 2.5rem;
  font-family: zihun143-zhengkuchaojihei;
  font-weight: bold;
  color: #484848;
  word-break: keep-all;
}
.content {
  font-size: 1.5rem;
  font-family: Source Han Sans TC;
  font-weight: 400;
  color: #0b152b;
}
@media screen and (max-width: 768px) {
  .box {
    padding: 5% 5px;
    gap: 1rem;
    .divider {
      max-width: 1.5rem;
      img {
        width: 50%;
      }
    }
    .title {
      font-size: 1rem;
      font-weight: bold;
    }
    .content {
      font-size: 0.5rem;
    }
  }
}
</style>
