<template>
  <div class="lodash">
  </div>
</template>
<script type="text/ecmascript-6">
  import _ from 'lodash'
  export default {
    name: `lodash`,
    created () {
      let array = ['a', 'b', 'c', 'a', 'b', 'c']
      _.pull(array, 'a', 'c')
      console.log(array)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
