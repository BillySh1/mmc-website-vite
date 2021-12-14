<template>
  <div class="main">
    <Topbar />
    <Hero />
    <JoinUs />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Topbar from "./Topbar.vue";
import Hero from './Hero.vue'
import JoinUs from './JoinUs.vue'
interface DataProps {}
export default {
  name: "layout",
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
  components: {
    Topbar,
    Hero,
    JoinUs
  },
};
</script>
<style scoped>
.main {
  height: 100vh;
}
</style>
