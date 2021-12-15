<template>
  <div class="box">
    <div class="title">ABOUT US</div>
    <div class="content">
      Memory labs was established in Tokyo in 2019. We are tirelessly
      contributing to the development of professional development of encrypted
      wallets. Our early development led some industry experts to call the
      memory team the "pioneer" of wallet technology. Since its establishment,
      we have been learning and growing as an organization, and our small team
      has grown into a far-reaching and diversified group; At present, our team
      members come from almost all continents. Memory labs is committed to
      providing professional digital asset management tools and services to
      100000 users in more than 40 countries around the world.
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #16a6ee;
  padding: 4.5rem 0 9rem 0;
}
.title {
  font-size: 3.5rem;
  font-family: Arial;
  font-weight: normal;
  color: #ffffff;
  line-height: 1.5;
}
.content {
  max-width: 75%;
  font-size: 1.5rem;
  font-family: Arial;
  font-weight: normal;
  color: #ffffff;
  line-height: 1.5;
  text-align: center;
  word-break: break-all;
}
</style>
