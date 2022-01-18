<template>
  <div class="box">
    <div>INTELLIGENT</div>
    <div class='middle'>AGGREGATION</div>
    <div class="followUs">FOLLOW US</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "",
  setup() {
    const data: DataProps = reactive({});
    onBeforeMount(() => {
    });
    onMounted(() => {
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
  background-color: #29BCA6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  padding: 2rem 4rem 2rem 6rem;
}


@media screen and (max-width: 1280px) {
  .box {
    display: flex;
    flex-wrap: wrap;
    word-break: keep-all;
    justify-content: space-between;
    font-size: 1.5rem;
  }
  .metaBox {
    display: flex;
    .meta {
      width: 3rem;
    }
  }
  .middle{
    margin: 1rem 0;
  }
}
@media screen and (max-width: 375px) {
  .box{
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
