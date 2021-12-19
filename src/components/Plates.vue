<template>
  <div class="box">
    <div class="left">
      <div class="content">
        <div class="content1">{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
        <br />
        <br />
        <div>{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
        <div>{{ leftContent }}</div>
      </div>
      <img class='line' src="../assets/images/line.png" alt="line" />
      <div class="more">MORE</div>
    </div>
    <div class="right">
      <div class="grid">
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/circle.png" alt="circle" />
            <div class="vcenter">MMC机制</div>
          </div>
          <div>
            <p>买入</p>
            <p>卖出</p>
            <p>护盘</p>
            <p>抽奖</p>
          </div>
        </div>
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/border2.jpg" alt="border2" />
            <div class="vcenter">NFT市场</div>
          </div>
          <div>
            <p>用户铸造NFT</p>
            <p>NFT交易MMC销毁</p>
            <p>全网征集故事</p>
          </div>
        </div>
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/trai.png" alt="trai" />
            <div class="vcenter">IDO</div>
          </div>
          <div>
            <p>IDO项目方案</p>
            <p>优质项目首次代币发行</p>
          </div>
        </div>
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/radius.png" alt="radius" />
            <div class="vcenter">理财收益</div>
          </div>
          <div>
            <p>LP质押挖矿</p>
            <p>单币无损挖矿</p>
          </div>
        </div>
        <div class="item">
          <div class="itemLeft">
            <img src="../assets/images/rect.png" alt="rect" />
            <div class="vcenter">NFT生态</div>
          </div>
          <div>
            <p>MMC抽取盲盒</p>
            <p>NFT生态收益</p>
            <p>高等级卡牌售卖</p>
          </div>
        </div>
        <div class="item">
          <img class="infinity" src="../assets/images/infinity.png" alt="ini" />
        </div>
      </div>
      <div class="bottom">CORE PLATES</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
export default {
  name: "Plates",
  setup() {
    console.log("1-开始创建组件-setup");
    const data: DataProps = reactive({
      leftContent: "In the world's first story NFT Market",
    });
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
  height: 100vh;
}
.left {
  width: 20%;
  background: #eedd22;
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
    .content1 {
      font-size: 1.2rem;
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
  background-image: url("../assets/images/platesBg.jpg");
  background-size: 100% 100%;
  padding: 5rem;
  .grid {
    font-size: 1.2rem;
    font-family: Source Han Sans TC;
    font-weight: bold;
    text-decoration: underline;
    color: #ffffff;
    width: 100%;
    padding-right: 10rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    .item {
      text-align: right;
      width: 80%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        position: relative;
        .vcenter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .bottom {
    font-size: 3.5rem;
    font-family: Arial;
    font-weight: 900;
    color: #ffffff;
    text-align: right;
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
    .line{
      max-width: 80%;
    }    
  }
  .right {
    width: 100%;
    padding: 5%;
    background-size: cover;
    .bottom {
      font-size: 2rem;
      margin: 1rem 0;
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .right {
    padding: 10% 0;
    .grid {
      grid-template-columns: repeat(1, 1fr);
      padding:0;
      .item {
        width: 100%;
        flex-direction: column;
        text-align: center;
        .infinity {
          max-width: 80%;
        }
      }
    }
  }
  .bottom{
    margin-top: 2rem !important;
  }
}
</style>
