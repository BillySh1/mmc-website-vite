<template>
  <div class="box">
    <div style="display: flex">
      <div class="logoBox">
        <img
          class="img"
          src="../assets/images/logo.png"
          alt="logo"
          width="40"
        />
        <div class="title">MEMORY</div>
      </div>
      <div class="menuBox">
        <a @click="() => hrefJump(0)" class="menuItem">TOKEN</a>
        <a @click="() => hrefJump(1)" class="menuItem">MMC</a>
        <a @click="() => hrefJump(2)" class="menuItem">NFT-RICH</a>
        <a @click="() => hrefJump(3)" class="menuItem">ECOLOGY</a>
        <a @click="() => hrefJump(4)" class="menuItem">ABOUT</a>
        <a @click="() => hrefJump(5)" class="menuItem">ROUTE</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {}
import { useI18n } from "vue-i18n";
export default {
  name: "",
  setup() {
    const { t } = useI18n();
    const data: DataProps = reactive({});
    const hrefJump = (index) => {
      const map = ["nftMining", "MMC", "nftRich", "ecology", "about", "route"];
      document
        .getElementById(map[index])
        .scrollIntoView({ behavior: "smooth" });
    };
    onBeforeMount(() => {});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
      hrefJump,
      t,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  padding: 1rem 2rem;
  background-color: #191b27;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logoBox {
  display: flex;
  align-items: center;
}
.title {
  font-size: 1.5rem;
  word-spacing: 40;
  font-weight: bold;
  margin-left: 2rem;
}
.menuBox {
  margin-left: 5rem;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
  }
}
.menuItem {
  font-size: 1rem;
  font-weight: bold;
  margin: 0 1.5rem;
  cursor: pointer;
  word-break: keep-all;
}

@media screen and (max-width: 1280px) {
  .box {
    padding: 1% 5%;
  }
  .title {
    font-size: 1rem;
    margin-left: 1rem;
  }
  .img {
    width: 2rem;
  }
  .menuBox {
    margin-left: 1rem;
  }
  .menuItem {
    font-size: 1rem;
    margin: 0 1rem;
  }
}

@media screen and (max-width: 540px) {
  .box {
    .title {
      font-size: x-small;
    }
    .img {
      width: 1rem;
    }
    .menuBox {
      margin-left: 0.5rem;
    }
    .menuItem {
      font-size: x-small;
    }
  }
}
@media screen and (max-width: 320px) {
  .box {
    .title {
      margin-left: 0;
    }
    .menuItem {
      margin: 0 4px;
    }
  }
}
</style>
