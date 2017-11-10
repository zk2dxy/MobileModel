<template>
  <div class="Index">
    <!--<i class="icon icon-home"></i>-->
    <!--<mt-button-->
    <!--type="primary"-->
    <!--@click="sheetVisible = true">-->
    <!--Button-->
    <!--</mt-button>-->
    <!--<mt-actionsheet-->
    <!--cancel-text=""-->
    <!--:actions="actions"-->
    <!--v-model="sheetVisible"-->
    <!--&gt;-->
    <!--</mt-actionsheet>-->
    <img style="margin:0 auto;display: block" v-lazy="imgSrc" width="240" height="120"/>
  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  import AppApi from 'api/api.js'

  export default {
    name: 'Index',
    mounted () {
      // Test the Api for the app
      AppApi.test()
    },
    data () {
      return {
        imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      }
    },
    methods: {
      showToast () {
        Toast('这是一个 Toast')
      },
      showMsgbox () {
        MessageBox('提示', '这是一个 Message Box')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/mixin.styl"
</style>
