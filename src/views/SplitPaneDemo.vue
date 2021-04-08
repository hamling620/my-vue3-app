<template>
  <div>
    <h3>SplitPane Demo</h3>
    <hr>
    <div class="wrapper">
      <SplitPane v-model:value="value" mode="horizontal">
        <template #left>
          <div class="left">
            left
          </div>
        </template>
        <template #right>
          <div class="right">right</div>
        </template>
      </SplitPane>
    </div>
    <div class="wrapper">
      <SplitPane v-model:value="value" mode="vertical">
        <template #top>
          <div class="top">
            top
          </div>
        </template>
        <template #bottom>
          <div class="bottom">bottom</div>
        </template>
      </SplitPane>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SplitPane from '@/components/SplitPane'
export default {
  name: 'SplitPaneDemo',
  components: {
    SplitPane
  },
  setup () {
    const state = reactive({
      value: 0.5
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 500px;
  height: 300px;
  margin: 20px 0;
  .left,
  .right,
  .top,
  .bottom {
    color: #f44444;
    height: 100%;
  }
}

</style>
