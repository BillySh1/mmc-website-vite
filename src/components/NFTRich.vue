<template>
  <div class='box'>2</div>
</template>

<script lang='ts'>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
interface DataProps {}
export default {
    name: '',
      setup() {
          console.log('1-开始创建组件-setup')
          const data: DataProps = reactive({

          })
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style lang='less' scoped>
.box{
    height: 100vh;
    background-image: url('../assets/images/nftrichBg.png');
    background-size: 100% 100%;
}
</style>