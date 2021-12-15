<template>
  <div class="box">
    <div class="left">
      <img src="../assets/images/rect.jpg" alt="rect"/>
      <div class="leftPara">
        <div class="leftParaTitle">NEWS</div>
        <div class="leftParaContent">
          MMC launches the platform whitelist for IDO.MMC launches the platform
          whitelist for IDO
        </div>
      </div>
    </div>
    <div class='right'>
        <div class='divider'></div>
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
<style lang='less' scoped>
.box {
  background-color: white;
  padding: 5rem 7rem;
  display: flex;
  justify-content: space-between;
}

.left{
    display: flex;
    align-items: center;
    img{
        height: 12rem;
        margin-right: 1rem;
    }
}
.leftPara {
  width: 50%;
  margin-left: 1rem;
}
.leftParaTitle {
  font-size: 3rem;
  font-family: Arial;
  font-weight: normal;
  color: #16a6ee;
  line-height: 3rem;
  margin-bottom: 1.5rem;
}
.leftParaContent {
  font-size: 2rem;
  font-family: Arial;
  font-weight: normal;
  color: #0b152b;
  line-height: 1.2;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
}
</style>
