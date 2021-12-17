<template>
  <div class="main">
    <Topbar />
    <Hero />
    <JoinUs />
    <Pledge />
    <News />
    <Plates />
    <NFTInfo />
    <NFTRich />
    <GameFi />
    <AboutUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Topbar from "./Topbar.vue";
import Hero from "./Hero.vue";
import JoinUs from "./JoinUs.vue";
import Pledge from "./Pledge.vue";
import Footer from "./Footer.vue";
import News from "./New.vue";
import Plates from "./Plates.vue";
import NFTInfo from "./NFTInfo.vue";
import NFTRich from "./NFTRich.vue";
import GameFi from "./GameFi.vue";
import AboutUs from './AboutUs.vue'
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
    JoinUs,
    Pledge,
    News,
    Plates,
    NFTInfo,
    NFTRich,
    GameFi,AboutUs,
    Footer,
  },
};
</script>
<style scoped>
.main {
  height: 100vh;
  overflow-x: hidden;
}
</style>
