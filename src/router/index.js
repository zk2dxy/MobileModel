import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import {Toast} from 'mint-ui'

// 路由模块
import Root from '@/router/module/root'
import Pages from '@/router/module/pages'

Vue.use(Router)

// 根目录
const rootRouter = [{
  path: '/lodash',
  name: 'lodash',
  component: () => import('@/components/lodash/lodash')
}]

// 合并所有路由
let router = _.concat(rootRouter, Root, Pages)

const Routers = new Router({
  routes: router
})

// 遍历 router 的有效性
Routers.beforeEach((to, from, next) => {
  if (to.matched.length > 0) {
    next()
  } else {
    Toast('Page 404...')
    Routers.replace('/')
  }
})

export default Routers
