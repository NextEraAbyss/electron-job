/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/',
    name: 'Root',
    redirect: { name: 'AdminDashboard' }
  },
  {
    path: '/example',
    name: 'Example',
    redirect: { name: 'ExampleHelloIndex' },
    children: [
      {
        path: '/example',
        name: 'ExampleHelloIndex',
        component: () => import('@/views/example/hello/Index.vue')
      },
    ]
  },
  // 管理系统路由
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Layout.vue'),
    redirect: { name: 'AdminDashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/Dashboard.vue')
      },
      {
        path: 'resume',
        name: 'AdminResume',
        component: () => import('@/views/admin/Resume.vue')
      },
      {
        path: 'jobs',
        name: 'AdminJobs',
        component: () => import('@/views/admin/Jobs.vue')
      },
      {
        path: 'qa',
        name: 'AdminQA',
        component: () => import('@/views/admin/QA.vue')
      },
      {
        path: 'news',
        name: 'AdminNews',
        component: () => import('@/views/admin/News.vue')
      }
    ]
  }
]

export default constantRouterMap