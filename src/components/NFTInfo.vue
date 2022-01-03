<template>
  <div class="box">
    <div class="title">Token economy</div>
    <div class="divider">
      <img src="../assets/images/divider.png" alt="divider" />
    </div>
    <div class="content">
      MEMORY SWAP TOKEN (MMC) is an application token issued by MEMORY S WAP,
      which is an important token to prompt the development of MEMORY LABS.
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "",
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
  background-color: white;
  padding: 1rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  .divider{
    max-width: 1rem;
    img{
      width: 100%;
    }
  }
}
.title {
  font-size: 2.5rem;
  font-family: zihun143-zhengkuchaojihei;
  font-weight: bold;
  color: #484848;
  word-break: keep-all;
  width: -webkit-fill-available
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
