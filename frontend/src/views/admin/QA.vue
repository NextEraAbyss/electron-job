<template>
  <div class="min-w-[900px]">
    <!-- 顶部操作栏 -->
    <div class="flex items-center justify-between mb-6">
      <div></div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap">
        新增问答
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
              placeholder="搜索问答..." 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
          </div>
          <select 
            v-model="categoryFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有分类</option>
            <option value="interview">面试相关</option>
            <option value="salary">薪资福利</option>
            <option value="career">职业发展</option>
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

    <!-- QA列表 -->
    <div class="bg-white rounded-lg shadow">
      <div class="overflow-x-auto min-h-[400px]">
        <table class="w-full min-w-[800px]">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[300px]">问题</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">分类</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">浏览量</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">更新时间</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="qa in filteredQAs" :key="qa.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="text-sm font-medium text-gray-900 line-clamp-2">{{ qa.question }}</div>
                <div class="text-sm text-gray-500 mt-1 line-clamp-1">{{ qa.description }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ getCategoryText(qa.category) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ qa.views }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="getStatusClass(qa.status)"
                >
                  {{ getStatusText(qa.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ qa.updateTime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex flex-wrap gap-2">
                  <a href="#" class="text-blue-600 hover:text-blue-900 whitespace-nowrap">编辑</a>
                  <a href="#" class="text-yellow-600 hover:text-yellow-900 whitespace-nowrap">预览</a>
                  <a 
                    href="#" 
                    class="whitespace-nowrap"
                    :class="qa.status === 'published' ? 'text-gray-600 hover:text-gray-900' : 'text-green-600 hover:text-green-900'"
                  >
                    {{ qa.status === 'published' ? '归档' : '发布' }}
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
  name: 'AdminQA',
  data() {
    return {
      searchText: '',
      categoryFilter: '',
      statusFilter: '',
      qas: [
        {
          id: 1,
          question: '如何准备技术面试？',
          description: '技术面试准备指南，包括算法、系统设计等...',
          category: 'interview',
          views: 1234,
          status: 'published',
          updateTime: '2024-03-15'
        },
        {
          id: 2,
          question: '程序员职业发展路径',
          description: '从初级到高级程序员的职业规划建议...',
          category: 'career',
          views: 856,
          status: 'draft',
          updateTime: '2024-03-14'
        },
        {
          id: 3,
          question: '软件工程师薪资结构解析',
          description: '详细解析软件工程师薪资组成和谈薪技巧...',
          category: 'salary',
          views: 567,
          status: 'published',
          updateTime: '2024-03-13'
        },
        {
          id: 4,
          question: '远程工作的优势与挑战',
          description: '分析远程工作模式的利弊和适应策略...',
          category: 'other',
          views: 345,
          status: 'archived',
          updateTime: '2024-03-12'
        }
      ],
      pagination: {
        start: 1,
        end: 10,
        total: 28
      }
    }
  },
  computed: {
    filteredQAs() {
      let filtered = this.qas

      if (this.searchText) {
        filtered = filtered.filter(qa => 
          qa.question.includes(this.searchText) || 
          qa.description.includes(this.searchText)
        )
      }

      if (this.categoryFilter) {
        filtered = filtered.filter(qa => qa.category === this.categoryFilter)
      }

      if (this.statusFilter) {
        filtered = filtered.filter(qa => qa.status === this.statusFilter)
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
        interview: '面试相关',
        salary: '薪资福利',
        career: '职业发展',
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