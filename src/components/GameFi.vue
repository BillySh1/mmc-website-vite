<template>
  <div class="box">
    <div class="up">
      <div class="upLeft">
        <img class='cube' src="../assets/images/cube.png" alt="cube" />
        <div class="content">
          我们就是这个世界中的艺术家，不停的创作着不同的故事。MEMORY
          COIN每一个值得珍藏的故事都会在平台制作成一个基于HRC-721的NFT VR卡片。
        </div>
        <div class="more">MORE</div>
      </div>
      <img  class='man' src="../assets/images/man.png" alt="man" />
    </div>
    <div class="down">GAMEFI</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "gameFi",
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
  background-image: url('../assets/images/gamefibg.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10% 0;
}
.up {
  display: flex;
  justify-content: space-between;
  width: 80%;
  .upLeft {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 2rem;
    .content {
        max-width: 80%;
      font-size: 1.5rem;
      font-family: Source Han Sans TC;
      font-weight: 400;
      color: #ffffff;
      margin: 5rem 0;
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid white;
      padding: 0.5rem 0;
      width: 80%;
      font-size: 2rem;
      max-height: 3rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
    }
  }
  img {
    max-width: 700px;
    max-height: 700px;
  }
}
.down {
  width: 85%;
  margin-top: 4rem;
  text-align: end;
  font-size: 3.5rem;
  font-family: Arial;
  font-weight: 900;
  color: #ffffff;
}

@media screen and (max-width: 1024px) {
  .up{
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    .upLeft{
      .content{
        font-size: 1.2rem;
        margin: 2.5rem 0;
      }
      .more{
        border: 10px solid white;
        font-size: 1.5rem;
      }
    }
    .man{
      max-width: 100%;
    }
    .cube{
      max-width: 60%;
      margin: 2rem 0;
    }
  }
  .down{
    font-size: 1.5rem;
  }
  
}

</style>
