<template>
  <div class="clock">
    <div class="time">
      {{ currentTime }}
    </div>
    <div class="date">
      {{ currentDate }}
    </div>
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
  mounted() {
    this.updateClock();
    this.intervalId = setInterval(this.updateClock, 1000); // 每秒更新时钟
  },
  beforeUnmount() {
    clearInterval(this.intervalId); // 清除定时器以防止内存泄漏
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
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'DDINProBold';
  src: url('@/assets/fonts/D-DIN-PRO-700-Bold.otf') format('opentype');
}
.clock {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 180px;
}

.time {
  font-family: 'DDINProBold', Arial, sans-serif;
  font-size: 128px;
  line-height: 128px;
  font-weight: bold;
  
}

.date {
  font-size: 12px;
  line-height: 16px;
  opacity: 0.5;
}
</style>
