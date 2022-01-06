<template>
  <div class="box">
    <div style="display: flex">
      <div :class="!isPc ? 'dropdown' : ''">
        <div class="logoBox">
          <img
            class="img"
            src="../assets/images/logo.png"
            alt="logo"
            width="40"
          />
          <div class="title">MEMORY</div>
        </div>
        <div class="dropdown-content">
          <div
            class="dropdown-item"
            v-for="(item, index) in menuItems"
            :key="index"
            @click="() => hrefJump(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div v-if="isPc" class="menuBox">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          @click="() => hrefJump(index)"
          class="menuItem"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
interface DataProps {
  isPc: boolean;
  isShowDrawer: boolean;
  menuItems: string[];
}
import { useI18n } from "vue-i18n";
export default {
  name: "",
  setup() {
    const { t } = useI18n();
    const data: DataProps = reactive({
      isPc: true,
      isShowDrawer: false,
      menuItems: ["TOKEN", "MMC", "NFT-RICH", "ECOLOGY", "ABOUT", "ROUTE"],
    });
    const hrefJump = (index) => {
      const map = ["nftMining", "MMC", "nftRich", "ecology", "about", "route"];
      document
        .getElementById(map[index])
        .scrollIntoView({ behavior: "smooth" });
    };

    onBeforeMount(() => {});
    onMounted(() => {
      if (window.innerWidth < 768) {
        data.isPc = false;
      }
    });
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
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #191b27;
  color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transform: translateY(0.5rem);
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-item {
  font-size: 16px;
  padding: 12px 4px;
  text-align: center;
  font-weight: bold;
}
.dropdown-item:hover {
  background: #16a6ee;
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
