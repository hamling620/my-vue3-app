<template>
  <div>
    倒计时：{{ count ? count + 's' : '结束' }}!
  </div>
</template>

<script>
import useCountDown from '@/hooks/useCountDown'
export default {
  name: 'CountDown',
  setup () {
    const count = useCountDown(10)
    return {
      count
    }
  }
}
</script>
<style>

</style>