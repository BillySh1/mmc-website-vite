<template>
  <div id="nftRich" class="box">
    <div class="container">
      <div class="inner">
        <div class="up">
          <div>
            <div class="title">NFT-RICH</div>
            <div class="content">
              Rich Men in the Three Kingdoms is inspired from one of Chinese
            </div>
            <div class="content">
              four greatest classic novels named the Romance of the Three
              Kingdoms
            </div>
          </div>
          <div class="more" v-if="showImg" @click="toggle">MORE</div>
          <div class="more" v-if="!showImg" @click="toggle">BACK</div>
        </div>
        <div class="down" v-if="showImg">
          <div class="border">
            <img
              src="../assets/nfts/3.png"
              alt="nft1"
              width="100%"
              height="100%"
            />
          </div>
          <div class="border border2">
           <img
              src="../assets/nfts/2.png"
              alt="nft1"
              width="100%"
              height="100%"
            />
          </div>
          <div class="border border2">
           <img
              src="../assets/nfts/1.png"
              alt="nft1"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div class="down" v-if="!showImg">
          <div class="downC">
            It is the first strategic NFT card game incubated by the Memory
            Labs. As an important component in NFT ecology of MMC, Rich Men in
            the Three Kingdoms is operated by players focusing on card
            strategies and random exploration. They can get more MMC earnings by
            scrambling for cities, combatting against other players and
            upgrading the weapons and equipment. Moreover, users can also get
            characters, mounts and weapons of the game by drawing the mystery
            box with the help of MMC token and start your era of play-to-earn.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {
  showImg: boolean;
}
export default {
  name: "",
  setup() {
    const data: DataProps = reactive({ showImg: true });
    const toggle = () => {
      data.showImg = !data.showImg;
    };
    onBeforeMount(() => {});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      toggle,
      ...refData,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 100vh;
  background-image: url("../assets/images/nftrichBg.png");
  background-size: 100% 100%;
}
.container {
  background-image: url("../assets/images/grid.png");
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 70%;
  .up {
    display: flex;
    margin-bottom: 6rem;
    justify-content: space-between;
    .title {
      font-size: 3rem;
      font-family: Arial;
      font-weight: 900;
      color: #ffffff;
    }
    .content {
      font-size: 1.5rem;
      font-family: Arial;
      font-weight: normal;
      color: #f1f1f1;
    }
    .more {
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 7px solid white;
      padding: 0.5rem 0;
      width: 25%;
      font-size: 2rem;
      max-height: 3rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
      place-self: end;
    }
  }
  .down {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .border {
      border: 1rem solid #000000;
      background-color: whitesmoke;
      color: grey;
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
      line-height: 300px;
      width: 300px;
      height: 300px;
      min-height: 300px;
      color: #454748;
    }
    .border2 {
      width: 250px;
    }
    .downC {
      font-size: 1.8rem;
      font-family: Arial;
      font-weight: normal;
      color: #ffffff;
      opacity: 1;
      font-style: it;
    }
  }
}
@media screen and (max-width: 1280px) {
  .box {
    height: unset;
    background-size: cover;
    .container {
      height: unset;
      padding: 5%;
      background-size: cover;
      .inner {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .inner {
    .down {
      padding: 2%;
      .border {
        height: 100px;
        font-size: 1rem;
        border: 0.5rem solid #000000;
        line-height: 100px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .inner {
    width: 100%;
    .up {
      margin-bottom: 4rem;
      .title {
        font-size: 1.2rem;
      }
      .content {
        font-size: 1rem;
      }
      .more {
        border: 0.2rem solid white;
        font-size: 1rem;
      }
    }
    .down {
      .border {
        min-height: 200px;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .inner {
    .up {
      .more {
        font-size: 10px;
      }
    }
    .down {
      .border {
        min-height: 100px;
      }
      .downC {
        font-size: 1rem;
      }
    }
  }
}
</style>
