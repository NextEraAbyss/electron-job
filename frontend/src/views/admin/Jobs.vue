<template>
  <div class="min-w-[900px]">
    <!-- 顶部操作栏 -->
    <div class="flex items-center justify-between mb-6">
      <div></div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap">
        发布职位
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
              placeholder="搜索职位..." 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
          </div>
          <select 
            v-model="typeFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有类型</option>
            <option value="full-time">全职</option>
            <option value="part-time">兼职</option>
            <option value="intern">实习</option>
          </select>
          <select 
            v-model="statusFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有状态</option>
            <option value="active">招聘中</option>
            <option value="paused">已暂停</option>
            <option value="closed">已结束</option>
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

    <!-- 职位列表 -->
    <div class="bg-white rounded-lg shadow">
      <div class="overflow-x-auto min-h-[400px]">
        <table class="w-full min-w-[800px]">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">职位名称</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">部门</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">工作类型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">薪资范围</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">发布时间</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="job in filteredJobs" :key="job.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900 truncate">{{ job.title }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ job.department }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ getTypeText(job.type) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ job.salary }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="getStatusClass(job.status)"
                >
                  {{ getStatusText(job.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ job.publishTime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex flex-wrap gap-2">
                  <a href="#" class="text-blue-600 hover:text-blue-900 whitespace-nowrap">编辑</a>
                  <a 
                    href="#" 
                    class="whitespace-nowrap"
                    :class="job.status === 'active' ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'"
                  >
                    {{ job.status === 'active' ? '暂停' : '恢复' }}
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
  name: 'AdminJobs',
  data() {
    return {
      searchText: '',
      typeFilter: '',
      statusFilter: '',
      jobs: [
        {
          id: 1,
          title: '高级前端开发工程师',
          department: '技术部',
          type: 'full-time',
          salary: '25k-35k',
          status: 'active',
          publishTime: '2024-03-15'
        },
        {
          id: 2,
          title: '后端开发工程师',
          department: '技术部',
          type: 'full-time',
          salary: '20k-30k',
          status: 'paused',
          publishTime: '2024-03-14'
        },
        {
          id: 3,
          title: 'UI设计师',
          department: '设计部',
          type: 'full-time',
          salary: '15k-25k',
          status: 'active',
          publishTime: '2024-03-13'
        },
        {
          id: 4,
          title: '前端实习生',
          department: '技术部',
          type: 'intern',
          salary: '3k-5k',
          status: 'closed',
          publishTime: '2024-03-10'
        }
      ],
      pagination: {
        start: 1,
        end: 10,
        total: 45
      }
    }
  },
  computed: {
    filteredJobs() {
      let filtered = this.jobs

      if (this.searchText) {
        filtered = filtered.filter(job => 
          job.title.includes(this.searchText) || 
          job.department.includes(this.searchText)
        )
      }

      if (this.typeFilter) {
        filtered = filtered.filter(job => job.type === this.typeFilter)
      }

      if (this.statusFilter) {
        filtered = filtered.filter(job => job.status === this.statusFilter)
      }

      return filtered
    }
  },
  methods: {
    handleFilter() {
      // 筛选逻辑
      console.log('筛选条件:', { 
        searchText: this.searchText, 
        typeFilter: this.typeFilter, 
        statusFilter: this.statusFilter 
      })
    },
    getTypeText(type) {
      const typeTexts = {
        'full-time': '全职',
        'part-time': '兼职',
        'intern': '实习'
      }
      return typeTexts[type] || '未知'
    },
    getStatusClass(status) {
      const statusClasses = {
        active: 'bg-green-100 text-green-800',
        paused: 'bg-yellow-100 text-yellow-800',
        closed: 'bg-red-100 text-red-800'
      }
      return statusClasses[status] || 'bg-gray-100 text-gray-800'
    },
    getStatusText(status) {
      const statusTexts = {
        active: '招聘中',
        paused: '已暂停',
        closed: '已结束'
      }
      return statusTexts[status] || '未知'
    }
  }
}
</script> 