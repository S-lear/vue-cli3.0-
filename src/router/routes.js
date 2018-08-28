export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/index.vue'),
    children: [
      {
        path: '/child_1',
        component: () => import('@/views/About/Child/index.vue')
      }
    ]
  }
]