<template>
  <div class="box">
    <div class="left">
      <img src="../assets/images/rect.jpg" alt="rect" />
      <div class="leftPara">
        <div class="leftParaContent">
          <div style="color: #0b152b">
            Distribution of financing assets in MemorySwap
          </div>
          <div>Liquid pool Rewarding pool Stock protection pool</div>
        </div>
        <div></div>
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
  background-color: white;
  padding: 1rem 4rem;
  display: flex;
  justify-content: center;
  font-style: italic;
}

.left {
  display: flex;
  align-items: center;
  img {
    height: 10rem;
    margin-right: 1rem;
  }
}
.leftPara {
  margin-left: 1rem;
}

.leftParaContent {
  text-align: center;
  font-size: 2rem;
  font-family: Arial;
  font-weight: normal;
  color: #16a6ee;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
}

@media screen and (max-width: 1280px) {
  .box {
    flex-wrap: wrap;
    padding: 1rem;
    .left {
      .leftParaContent {
        font-size: 1rem;
      }
      img {
        height: 6rem;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .box{
    .left{
      img{
        max-height: 4rem;
      }
      .leftParaContent{
        font-size: 12px;
      }
    }
  }
}
</style>
