<template>
  <div class="min-w-[1000px]">
    <!-- 顶部操作栏 -->
    <div class="flex items-center justify-between mb-6">
      <div></div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap">
        发布资讯
      </button>
    </div>

    <!-- 搜索和筛选 -->
    <div class="bg-white rounded-lg shadow mb-6">
      <div class="p-4">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1 min-w-[200px]">
            <input 
              type="text" 
              v-model="searchText"
              placeholder="搜索资讯..." 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
          </div>
          <select 
            v-model="categoryFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有分类</option>
            <option value="tech">技术动态</option>
            <option value="industry">行业资讯</option>
            <option value="company">公司新闻</option>
            <option value="other">其他</option>
          </select>
          <select 
            v-model="statusFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有状态</option>
            <option value="published">已发布</option>
            <option value="draft">草稿</option>
            <option value="archived">已归档</option>
          </select>
          <button 
            @click="handleFilter"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 whitespace-nowrap"
          >
            筛选
          </button>
        </div>
      </div>
    </div>

    <!-- 资讯列表 -->
    <div class="bg-white rounded-lg shadow">
      <div class="overflow-x-auto min-h-[400px]">
        <table class="w-full min-w-[900px]">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[300px]">标题</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">分类</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">作者</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">浏览量</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">发布时间</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="news in filteredNews" :key="news.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="text-sm font-medium text-gray-900 line-clamp-2">{{ news.title }}</div>
                <div class="text-sm text-gray-500 mt-1 line-clamp-1">{{ news.description }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ getCategoryText(news.category) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ news.author }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ news.views }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="getStatusClass(news.status)"
                >
                  {{ getStatusText(news.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ news.publishTime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex flex-wrap gap-2">
                  <a href="#" class="text-blue-600 hover:text-blue-900 whitespace-nowrap">编辑</a>
                  <a href="#" class="text-yellow-600 hover:text-yellow-900 whitespace-nowrap">预览</a>
                  <a 
                    href="#" 
                    class="whitespace-nowrap"
                    :class="news.status === 'published' ? 'text-gray-600 hover:text-gray-900' : 'text-green-600 hover:text-green-900'"
                  >
                    {{ news.status === 'published' ? '归档' : '发布' }}
                  </a>
                  <a href="#" class="text-red-600 hover:text-red-900 whitespace-nowrap">删除</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- 分页 -->
      <div class="px-6 py-4 border-t">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-sm text-gray-700">
            显示第 <span class="font-medium">{{ pagination.start }}</span> 到 
            <span class="font-medium">{{ pagination.end }}</span> 条，共 
            <span class="font-medium">{{ pagination.total }}</span> 条
          </div>
          <div class="flex space-x-2">
            <button class="px-3 py-1 border rounded hover:bg-gray-100">上一页</button>
            <button class="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
            <button class="px-3 py-1 border rounded hover:bg-gray-100">2</button>
            <button class="px-3 py-1 border rounded hover:bg-gray-100">3</button>
            <button class="px-3 py-1 border rounded hover:bg-gray-100">下一页</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminNews',
  data() {
    return {
      searchText: '',
      categoryFilter: '',
      statusFilter: '',
      news: [
        {
          id: 1,
          title: '2024年最受欢迎的编程语言',
          description: '探讨2024年编程语言发展趋势...',
          category: 'tech',
          author: '张三',
          views: 2345,
          status: 'published',
          publishTime: '2024-03-15'
        },
        {
          id: 2,
          title: '人工智能在软件开发中的应用',
          description: 'AI如何改变软件开发流程...',
          category: 'industry',
          author: '李四',
          views: 1567,
          status: 'draft',
          publishTime: '2024-03-14'
        },
        {
          id: 3,
          title: '公司获得年度最佳雇主奖',
          description: '我们公司在年度评选中获得殊荣...',
          category: 'company',
          author: '王五',
          views: 876,
          status: 'published',
          publishTime: '2024-03-13'
        },
        {
          id: 4,
          title: '远程办公政策更新',
          description: '最新的远程办公制度说明...',
          category: 'company',
          author: '赵六',
          views: 543,
          status: 'archived',
          publishTime: '2024-03-12'
        }
      ],
      pagination: {
        start: 1,
        end: 10,
        total: 35
      }
    }
  },
  computed: {
    filteredNews() {
      let filtered = this.news

      if (this.searchText) {
        filtered = filtered.filter(item => 
          item.title.includes(this.searchText) || 
          item.description.includes(this.searchText) ||
          item.author.includes(this.searchText)
        )
      }

      if (this.categoryFilter) {
        filtered = filtered.filter(item => item.category === this.categoryFilter)
      }

      if (this.statusFilter) {
        filtered = filtered.filter(item => item.status === this.statusFilter)
      }

      return filtered
    }
  },
  methods: {
    handleFilter() {
      // 筛选逻辑
      console.log('筛选条件:', { 
        searchText: this.searchText, 
        categoryFilter: this.categoryFilter, 
        statusFilter: this.statusFilter 
      })
    },
    getCategoryText(category) {
      const categoryTexts = {
        tech: '技术动态',
        industry: '行业资讯',
        company: '公司新闻',
        other: '其他'
      }
      return categoryTexts[category] || '未知'
    },
    getStatusClass(status) {
      const statusClasses = {
        published: 'bg-green-100 text-green-800',
        draft: 'bg-yellow-100 text-yellow-800',
        archived: 'bg-gray-100 text-gray-800'
      }
      return statusClasses[status] || 'bg-gray-100 text-gray-800'
    },
    getStatusText(status) {
      const statusTexts = {
        published: '已发布',
        draft: '草稿',
        archived: '已归档'
      }
      return statusTexts[status] || '未知'
    }
  }
}
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style> 