const root = [{
  path: '/',
  name: 'home',
  component: () => import('@/components/index/Index')
}, {
  path: '/index',
  name: 'Index',
  component: () => import('@/components/index/Index')
}]
export default root
