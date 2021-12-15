<template>
  <div class='box'>
      <div class='left'></div>
      <div class='right'></div>
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
<style lang='less' scoped>
.box{
    display: flex;
    height: 100vh;
}
.left{
    width: 25%;
    background: #EEDD22,
}
.right{
    width: 100%;
    background-image: url('../assets/images/platesBg.jpg');
    background-size: 100% 100%;
}
</style>