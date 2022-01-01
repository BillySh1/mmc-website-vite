<template>
  <div class="box">
    <div>INTELLIGENT</div>
    <div class='middle'>AGGREGATION</div>
    <div class="followUs">FOLLOW US</div>
    <div class="metaBox">
      <a href="https://twitter.com/BTCJod?s=09" target="_blank">
        <img class="meta" src="../assets/images/twitter.png" alt="twitter" />
      </a>
      <a href="https://t.me/MemorySwap1" target="_blank">
        <img class="meta" src="../assets/images/telegram.png" alt="telegram" />
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
  line-height: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  padding: 3rem 4rem 3rem 6rem;
}
.followUs {
  margin-left: 4rem;
}
.metaBox {
  display: flex;
  gap: 2rem;
}
@media screen and (max-width: 1280px) {
  .box {
    display: flex;
    flex-wrap: wrap;
    word-break: keep-all;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 5%;
  }
  .metaBox {
    display: flex;
    .meta {
      width: 3rem;
    }
  }
  .followUs{
    margin: 0rem 1rem 0rem 0;
  }
  .middle{
    margin: 1rem 0;
  }
}
@media screen and (max-width: 320px) {
  .metaBox{
    margin-top: 1rem;
  }
}
</style>
