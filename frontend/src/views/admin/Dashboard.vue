<template>
  <div class="min-w-[600px]">
    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow p-6 min-w-[200px]">
        <h3 class="text-gray-500 text-sm">简历总数</h3>
        <p class="text-2xl font-semibold text-gray-700">{{ statistics.resumes }}</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 min-w-[200px]">
        <h3 class="text-gray-500 text-sm">职位总数</h3>
        <p class="text-2xl font-semibold text-gray-700">{{ statistics.jobs }}</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 min-w-[200px]">
        <h3 class="text-gray-500 text-sm">QA总数</h3>
        <p class="text-2xl font-semibold text-gray-700">{{ statistics.qaCount }}</p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 min-w-[200px]">
        <h3 class="text-gray-500 text-sm">资讯总数</h3>
        <p class="text-2xl font-semibold text-gray-700">{{ statistics.newsCount }}</p>
      </div>
    </div>

    <!-- 最近活动 -->
    <div class="bg-white rounded-lg shadow min-h-[300px]">
      <div class="px-6 py-4 border-b">
        <h3 class="text-lg font-semibold text-gray-800">最近活动</h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div 
            v-for="activity in recentActivities" 
            :key="activity.id"
            class="flex items-center py-2"
          >
            <div 
              class="w-2 h-2 rounded-full flex-shrink-0"
              :class="activity.color"
            ></div>
            <div class="ml-4 flex-1 min-w-0">
              <p class="text-sm text-gray-600 truncate">{{ activity.description }}</p>
              <p class="text-xs text-gray-400">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      statistics: {
        resumes: 1234,
        jobs: 567,
        qaCount: 89,
        newsCount: 234
      },
      recentActivities: [
        {
          id: 1,
          description: '新增简历 5 份',
          time: '10分钟前',
          color: 'bg-blue-500'
        },
        {
          id: 2,
          description: '发布新职位 2 个',
          time: '30分钟前',
          color: 'bg-green-500'
        },
        {
          id: 3,
          description: '审核通过简历 3 份',
          time: '1小时前',
          color: 'bg-yellow-500'
        },
        {
          id: 4,
          description: '发布新资讯 1 篇',
          time: '2小时前',
          color: 'bg-purple-500'
        }
      ]
    }
  }
}
</script> 