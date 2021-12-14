<!--  -->
<template>
  <div class='box'></div>
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
<style scoped>
.box{
    background-image: url('../assets/images/herobg.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
    z-index: 100;
}
</style>