<template>
  <div class="box">
    <div class="left">
      <div class="title ani">Memory Labs</div>
      <div class="middle ani">Swap ecological application of the platform</div>
      <div>
        <div class="subTitle ani">
          <div>NFT trading platform of the creation</div>
          <div>Gamefi platform for resource integration</div>
          <div class="secondary">
            Public blockchain for the development of multiple ecologies <br/>
            Open
            source wallet of integrated blockchains
          </div>
        </div>
      </div>
    </div>

    <a class="go2Swap" href="https://memoryswap.net" target="_blank">
      <div class="title">Go to SWAP</div>
      <div class="sub">Create your own value</div>
      <img class="arrow" src="../assets/images/yellowArrow.png" alt="arrow" />
    </a>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "",
  setup() {
    const data: DataProps = reactive({});
    onBeforeMount(() => {});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  background-image: url("../assets/images/herobg.png");
  background-size: 100% 110%;
  background-repeat: no-repeat;
  position: relative;
  min-height: 80vh;
  z-index: 100;
  padding: 2rem 5% 4rem 5%;
  display: flex;
  justify-content: space-between;
}
.middle {
  font-size: 2.5rem;
  font-weight: normal;
  font-style: italic;
  color: #f1f1f1;
}
.title {
  color: white;
  font-size: 7rem;
  font-weight: bold;
  text-shadow: 10px 0 10px rgba(255, 255, 255, 0.3);
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subTitle {
  font-size: 3rem;
  font-family: Arial;
  font-weight: 900;
  color: #f1f1f1;
  font-style: italic;
  margin-bottom: 4rem;
  .secondary {
    font-size: 1.2rem;
    font-weight: normal;
    font-style: italic;
  }
}

.go2Swap {
  text-decoration: none;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #0b1a37;
  padding: 3.5rem;
  font-family: Arial;
  cursor: pointer;
  .title {
    font-size: 3rem;
    font-weight: normal;
    color: #ffffff;
  }
  .sub {
    font-size: 1.5rem;
    font-weight: 400;
    color: #f0ff49;
    margin: 0.5rem 0;
  }
}
.ani {
  animation: easeIn 3s;
}

@keyframes easeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 1280px) {
  .box {
    padding: 5%;
    background-size: cover;
    flex-direction: column;
  }
  .title {
    font-size: 3rem;
  }
  .middle{
    font-size: 2rem;
  }
  .subTitle {
    font-size: 2rem;
    margin: 3rem 0;
    .secondary {
      margin-top:1rem;
      font-size: 1rem;
    }
  }

  .go2Swap {
    padding: 5%;
    .title {
      font-size: 1.5rem;
    }
    .sub {
      font-size: 1rem;
    }
    .arrow {
      width: 100%;
    }
  }
}
</style>
