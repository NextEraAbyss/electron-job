<template>
  <div class="min-w-[800px]">
    <!-- 顶部操作栏 -->
    <div class="flex items-center justify-between mb-6">
      <div></div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 whitespace-nowrap">
        新增简历
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
              placeholder="搜索简历..." 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
          </div>
          <select 
            v-model="statusFilter"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 min-w-[120px]"
          >
            <option value="">所有状态</option>
            <option value="pending">待处理</option>
            <option value="reviewing">审核中</option>
            <option value="approved">已通过</option>
            <option value="rejected">已拒绝</option>
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

    <!-- 简历列表 -->
    <div class="bg-white rounded-lg shadow">
      <div class="overflow-x-auto min-h-[400px]">
        <table class="w-full min-w-[700px]">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">姓名</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">职位</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">工作经验</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">投递时间</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="resume in filteredResumes" :key="resume.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900 truncate">{{ resume.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 truncate">{{ resume.position }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ resume.experience }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span 
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  :class="getStatusClass(resume.status)"
                >
                  {{ getStatusText(resume.status) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ resume.submitTime }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <a href="#" class="text-blue-600 hover:text-blue-900">查看</a>
                  <a href="#" class="text-red-600 hover:text-red-900">删除</a>
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
  name: 'AdminResume',
  data() {
    return {
      searchText: '',
      statusFilter: '',
      resumes: [
        {
          id: 1,
          name: '张三',
          position: '前端开发工程师',
          experience: '3年',
          status: 'approved',
          submitTime: '2024-03-15'
        },
        {
          id: 2,
          name: '李四',
          position: '后端开发工程师',
          experience: '5年',
          status: 'reviewing',
          submitTime: '2024-03-14'
        },
        {
          id: 3,
          name: '王五',
          position: 'UI设计师',
          experience: '2年',
          status: 'pending',
          submitTime: '2024-03-13'
        },
        {
          id: 4,
          name: '赵六',
          position: '产品经理',
          experience: '4年',
          status: 'rejected',
          submitTime: '2024-03-12'
        }
      ],
      pagination: {
        start: 1,
        end: 10,
        total: 97
      }
    }
  },
  computed: {
    filteredResumes() {
      let filtered = this.resumes

      if (this.searchText) {
        filtered = filtered.filter(resume => 
          resume.name.includes(this.searchText) || 
          resume.position.includes(this.searchText)
        )
      }

      if (this.statusFilter) {
        filtered = filtered.filter(resume => resume.status === this.statusFilter)
      }

      return filtered
    }
  },
  methods: {
    handleFilter() {
      // 筛选逻辑
      console.log('筛选条件:', { searchText: this.searchText, statusFilter: this.statusFilter })
    },
    getStatusClass(status) {
      const statusClasses = {
        pending: 'bg-yellow-100 text-yellow-800',
        reviewing: 'bg-blue-100 text-blue-800',
        approved: 'bg-green-100 text-green-800',
        rejected: 'bg-red-100 text-red-800'
      }
      return statusClasses[status] || 'bg-gray-100 text-gray-800'
    },
    getStatusText(status) {
      const statusTexts = {
        pending: '待处理',
        reviewing: '审核中',
        approved: '已通过',
        rejected: '已拒绝'
      }
      return statusTexts[status] || '未知'
    }
  }
}
</script> 