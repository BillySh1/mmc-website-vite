<template>
  <div id="MMC" class="box">
    <div class="left">
      <div class="content">
        <div class="contentUp">
          
        </div>
        <img class="line" src="../assets/images/line.png" alt="line" />
      </div>
      <div class="more">MORE</div>
    </div>
    <div class="right">
      <div class="title">
        <img class='steam' src="../assets/images/steam.png" alt="steam" />
        <div class="letter">AGAINST MECHANISM</div>
      </div>
      <div class="rContent">
        <div
          class="rContentItem"
          v-for="(item, index) in rightContent"
          :key="index"
        >
          <div class="rLeft">{{ item.left }}</div>
          <div class="rRight">{{ item.right }}</div>
        </div>
      </div>
      <div class="bottom"><img src="../assets/gameFiBottom.png" alt="b" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
interface DataProps {}
export default {
  name: "Plates",
  setup() {
    const data: DataProps = reactive({
     
      rightContent: [
        {
          left: "B U Y",
          right:
            "when buying MMC, burn 10% of the payment tokens, of which 40% enter the lottery pool and 70% protect the plates pool",
        },
        {
          left: "S E L L",
          right:
            "when buying MMC, burn 10% of the payment tokens, of which 40% enter the lottery pool and 70% protect the plates pool",
        },
        {
          left: "AUTOMATIC BUY IN",
          right:
            "when the MMC price is lower than 30% of the initial liquidity price, it will automatically buy in batches, buy half of the usdt in the pool each time, and store the MMC obtained by the MMC in the contract address",
        },
        {
          left: "SPATIOTEMPORAL EGGS",
          right:
            "after 888 transactions, five lucky users with MMC positions of more than 100000 will be selected to share 5% of the lucky draw pool",
        },
      ],
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
  height: 100vh;
}
.left {
  width: 25%;
  background: #29bca6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial;
  font-weight: normal;
  color: #3f4243;
  font-style: italic;
  text-align: left;
  padding: 0 2rem;
  img {
    margin: 8rem 0 8rem 0;
  }
  .content {
    text-align: left;
    line-height: 1.5rem;
    .contentUp {
      font-size: 1.2rem;
      color: white;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .item {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  .more {
    border: 5px solid #ffffff;
    font-size: 2rem;
    font-family: zihun143-zhengkuchaojihei;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    padding: 2rem 0;
    width: 60%;
    font-style: normal;
    place-self: center;
  }
}
.right {
  width: 100%;
  background-image: url("../assets/images/platesPc.jpg");
  background-size: cover;
  padding: 5rem;
  text-align: center;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    .letter {
      font-size: 1.8rem;
      font-family: Arial-Black;
      color: #ffffff;
      letter-spacing: 2rem;
    }
  }
  .rContent {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #ffffff;
    margin: 5rem 0;
    .rContentItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rLeft {
        min-width: 40%;
        text-align: center;
        font-size: 1.8rem;
        font-family: Arial-Black;
      }
      .rRight {
        font-size: 1rem;
        font-family: Arial-ItalicMT;
        font-style: italic;
        text-align: left;
      }
    }
  }
}

@media screen and(max-width: 1280px) {
  .box {
    height: unset;
    flex-direction: column-reverse;
  }
  .left {
    width: 100%;
    padding: 5% 0;
    align-items: center;
    .line {
      max-width: 80%;
    }
  }
  .right {
    padding: 5% 0;
    width: 100%;
    .title {
      flex-direction: column;
    }
    .rContent {
      align-items: center;
      gap: 2rem;
      .rContentItem {
        max-width: 80%;
        flex-direction: column;
        .rRight {
          text-align: center;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        max-width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .left {
    display: flex;
    .content {
      .contentUp {
        font-size: 1rem;
        padding: 0 1rem;
      }
      font-size: 0.5rem;
      line-height: unset;
      text-align: center;
    }
    img {
      margin: 2rem 0;
    }
    .more {
      font-size: 1rem;
      border: 0.3rem solid white;
      padding: 1rem 0;
    }
  }
  .right {
    padding: 10% 0;
  }
}
@media screen and (max-width: 414px) {
  .right {
    background-image: url("../assets/images/platesMobile.jpg");
    background-size: 100%;
    .title {
      .steam{
        width: 47px
      }
      .letter {
        font-size: 10px;
        letter-spacing: 10px;
      }
    }
    .rContent {
      .rContentItem {
        margin-bottom: 4px;
        .rLeft{
          font-size: 10px;
          margin-bottom: 4px;
        }
        .rRight {
          font-size: 8px;
          line-height: 1.5;
        }
      }
    }
    .bottom{
      img{
        max-width: 80%;
      }
    }
  }
}
</style>
