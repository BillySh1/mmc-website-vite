<template>
  <div id="nftMining" class="box">
    <div class="content">
      <div class="left">
        <img class="ab" src="../assets/images/zu25.svg" alt="pledge" />
      </div>
      <div class="right">
        <div class="pledgeMining">TOKEN ALLOCATION</div>
        <div class="subMiningContent">
          <div class='fontstyle1'>TOTAL TOKENS： 1 BILLION 400 MILLION</div>
          <div class="fontstyle1">15% PRE-SALE IDO</div>
          <div class="fontstyle2">5% CONVENTIONAL LOANS, NFT LOANS</div>
          <div class="fontstyle1">50% (FARM, POOLS) MINING</div>
          <div class="fontstyle2">5% MACHINE GUN POOL</div>
          <div class="fontstyle1">5% ZClASSIC EXCHANGE</div>
          <div class="fontstyle2">
            0.5% PROMOTION ANGEL OF SWAP 1.5% BASIC ASSOCIATED COMMUNITY
          </div>
          <div class="fontstyle1">5% DEVELOPMENt COMMITTEE</div>
          <div class="fontstyle1">5% NFT ECOLOGY</div>
          <div class="fontstyle1">RESERVED ECOLOGY</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="moreBox">
        <img class="arrow" src="../assets/images/right.png" alt="right" />
        <div class="more">MORE</div>
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
  padding: 5% 0;
  background-image: url("../assets/images/pledgePc.png");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  width: 80%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    .ab {
      width: 80%;
    }
  }
  .right {
    width: 50%;
    .pledgeMining {
      width: 100%;
      text-align: center;
      border: 9px solid white;
      font-size: 4rem;
      font-weight: 900;
      color: #ffffff;
    }
    .subMiningContent {
      color: white;
      margin-top: 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      .fontstyle1 {
        font-size: 1.8rem;
        font-weight: bold;
      }
      .fontstyle2 {
        font-size: 1.5rem;
        font-style: italic;
        font-family: Arial-ItalicMT;
        color: #ffffff;
        opacity: 1;
      }
    }
  }
}
.bottom {
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: 4rem;

  img {
    max-height: 6rem;
  }
  .moreBox {
    width: 40%;
    display: flex;
    align-items: center;
    place-self: flex-end;
    .arrow {
      max-height: 2rem;
      margin-right: 2rem;
    }
    .more {
      border: 7px solid white;
      padding: 1rem 0;
      width: 100%;
      text-align: center;
      font-size: 2rem;
      font-family: zihun143-zhengkuchaojihei;
      font-weight: bold;
      color: #ffffff;
    }
  }
}

@media screen and (max-width: 1280px) {
  .box {
    background-image: url("../assets/images/pledgeBg.jpg");
    height: unset;
    background-size: cover;
    flex-direction: column;
    padding: 5%;
    padding-top: 4rem;
  }
  .content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    .left {
      width: 100%;
      max-width: 30rem;
      justify-content: center;
      .border {
        padding: 3.5rem 3rem;
        img {
          max-width: 5rem;
        }
      }
    }
    .right {
      font-size: 1rem;
      width: 100%;
      margin: 2rem 0rem;
      text-align: center;
      .subMiningContent {
        font-size: 1.2rem;
      }
      .pledgeMining {
        font-size: 2rem;
        border: 0.3rem solid white;
        padding: 0;
      }
    }
    .blue {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  .bottom {
    width: 100%;
    align-items: center;
  }
}
@media screen and(max-width: 768px) {
  .box {
    .left {
      .ab {
        width: 30%;
      }
    }
  }
  .bottom {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .moreBox {
      width: 80%;
      margin-top: 1rem;
      .arrow {
        max-height: 2rem;
      }
      .more {
        font-size: 1rem;
      }
    }
  }
}
@media screen and(max-width: 414px) {
  .box {
    .right {
      .pledgeMining {
        font-size: 16px;
      }
      .subMiningContent {
        .fontstyle1 {
          font-size: 10px;
        }
        .fontstyle2 {
          font-size: 9px;
        }
      }
    }
  }
}
</style>
