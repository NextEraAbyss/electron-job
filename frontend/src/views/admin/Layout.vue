<template>
  <div class="flex h-screen bg-gray-100 min-w-[1024px] min-h-[600px]">
    <!-- 侧边栏 -->
    <div class="w-64 bg-white shadow-lg flex-shrink-0">
      <div class="p-4 border-b">
        <h1 class="text-xl font-bold text-gray-800">管理系统</h1>
      </div>
      <nav class="mt-4 h-full overflow-y-auto scrollbar-thin">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="block px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
          :class="{
            'text-gray-700 bg-gray-100 border-l-4 border-blue-500': $route.name === item.name
          }"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>

    <!-- 主要内容区域 -->
    <div class="flex-1 overflow-hidden flex flex-col min-w-0">
      <!-- 顶部导航栏 -->
      <header class="bg-white shadow-sm flex-shrink-0">
        <div class="flex items-center justify-between px-6 py-4">
          <h2 class="text-xl font-semibold text-gray-800 truncate">{{ currentPageTitle }}</h2>
          <div class="flex items-center flex-shrink-0">
            <span class="text-sm font-medium text-gray-700">管理员</span>
          </div>
        </div>
      </header>

      <!-- 内容区域 -->
      <main class="flex-1 overflow-auto p-6 min-h-0 scrollbar-thin">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      menuItems: [
        { name: 'AdminDashboard', path: '/admin/dashboard', title: '仪表板' },
        { name: 'AdminResume', path: '/admin/resume', title: '简历管理' },
        { name: 'AdminJobs', path: '/admin/jobs', title: '职位管理' },
        { name: 'AdminQA', path: '/admin/qa', title: 'QA管理' },
        { name: 'AdminNews', path: '/admin/news', title: '资讯管理' }
      ]
    }
  },
  computed: {
    currentPageTitle() {
      const currentItem = this.menuItems.find(item => item.name === this.$route.name)
      return currentItem ? currentItem.title : '管理系统'
    }
  }
}
</script> 