<script setup lang="ts">
import * as echarts from 'echarts'

// 一进来就调用
onMounted(() => {
  init()
})

const chart = ref()

async function init() {
  const myChart = echarts.init(chart.value)
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  }
  myChart.setOption(option)
}
</script>

<template>
  <div h-2xl w-full flex class="charts">
    <h2 class="title">
      饼图
    </h2>
    <div ref="chart" class="chart" h-2xl w-2xl />
  </div>
</template>
