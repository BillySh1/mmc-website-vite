<template>
  <div class="box">
      <div>
          INTELLIGENT AGGREGATION
      </div>
      <div class='followUs'>FOLLOW US</div>
      <div class='metaBox'>
          <a href="">
              <img src="../assets/images/twitter.png" alt="twitter">
          </a>
          <a href="">
              <img src="../assets/images/telegram.png" alt="telegram" style='margin-left:2rem'>
          </a>
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
<style scoped>
.box {
  background-color: #d326e3;
  height: 180px;
  z-index: 10;
  position: relative;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  padding: 3rem 4rem 0px 6rem;

}
.followUs{
    margin-left: 4rem;
}
.metaBox{
    display: flex;
}
</style>
