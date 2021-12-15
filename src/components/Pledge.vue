<template>
  <div class='box'>
      <div class='content'></div>
  </div>
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
<style  scoped>
.box{
    background-image: url('../assets/images/pledgeBg.png');
    background-size: cover;
    display: flex;
    position: relative;    
    height: 100vh;
}
.content{
    position: absolute;
    margin: auto;
}
</style>