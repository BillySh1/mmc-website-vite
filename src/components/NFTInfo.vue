<template>
  <div class="box">
    <div class="title">NFT 创作交易平台</div>
    <div class="divider">
      <img src="../assets/images/divider.png" alt="divider" />
    </div>
    <div class="content">
      <div>我们就是这个世界的艺术家， 不停的创作着不同的故事</div>
      <br />
      <div>
        MEMORY COIN每一个值得珍藏的故事都会在平台制作成一个基于HRC_721的NFT-VR卡片。
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
  background-color: white;
  padding: 5rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 2.5rem;
  font-family: zihun143-zhengkuchaojihei;
  font-weight: 400;
  color: #484848;
  line-height: 1.5;
}
.content {
  font-size: 1.5rem;
  font-family: Source Han Sans TC;
  font-weight: 400;
  color: #0b152b;
  line-height: 3rem;
}
</style>
