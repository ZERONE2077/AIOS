<template>
  <div class="clock">
    <div class="time">{{ currentTime }}</div>
    <div class="date">{{ currentDate }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      currentDate: '',
      intervalId: null
    };
  },
  methods: {
    updateClock() {
      const now = new Date();

      // 获取时间（不显示秒数）
      this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // 获取日期
      const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' };
      const optionsWeekday = { weekday: 'long' };

      const formatterDate = new Intl.DateTimeFormat('zh-CN', optionsDate);
      const formattedDate = formatterDate.format(now);

      const formatterWeekday = new Intl.DateTimeFormat('zh-CN', optionsWeekday);
      const formattedWeekday = formatterWeekday.format(now);

      // 将日期格式转换为需要的格式
      const [year, month, day] = formattedDate.split('/'); // 分隔日期字符串

      this.currentDate = `${year}年${month}月${day}日 ${formattedWeekday}`;
    }
  },
  mounted() {
    this.updateClock();
    this.intervalId = setInterval(this.updateClock, 1000); // 每秒更新时钟
  },
  beforeUnmount() {
    clearInterval(this.intervalId); // 清除定时器以防止内存泄漏
  }
};
</script>

<style scoped>


.clock {
  color: white; /* 文字颜色为白色 */
  display: flex; /* 使用 flexbox 布局 */
  flex-direction: column; /* 垂直排列子元素 */
  justify-content: center; /* 垂直居中对齐 */
  text-align: center; /* 文字居中对齐 */
  width: 100%; /* 确保宽度为视口宽度 */
  height: 180px; /* 高度为 180 像素 */
}

.time {
  font-family:'D-DIN-PRO' ,"PingFang SC", Arial,sans-serif; /* 字体，备用字体设置为 sans-serif */
  font-size: 128px; /* 字体大小为 128 像素 */
  font-weight: bold; /* 字体加粗 */
}

.date {
  font-size: 12px; /* 字体大小为 12 像素 */
  line-height: 16px; /* 行高为 16 像素 */
  opacity: 0.5; /* 透明度为 0.5 */
}
</style>
