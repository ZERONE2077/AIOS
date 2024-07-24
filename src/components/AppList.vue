<template>
  <div id="apps">
    <div v-for="item in filteredApps" :key="item.id" class="app-item" @click="openLink(item.link)">
      <img :src="getAppLogo(item.id)" :alt="item.name" class="app-logo" @error="handleImageError">
      <span class="app-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: [] // 用于存储从 JSON 加载的应用数据
    };
  },
  computed: {
    filteredApps() {
      return this.apps.filter(app => app.status); // 过滤出状态为 true 的应用
    }
  },
  created() {
    this.loadApps();
  },
  methods: {
    loadApps() {
      fetch('/script/apps-data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Loaded app data:', data); // 添加此行来检查数据
          this.apps = data;
        })
        .catch(error => {
          console.error('Error loading app data:', error);
        });
    },
    getAppLogo(id) {
      // 动态生成图标路径
      return `assets/theme/smartisan/${id}.png`;
    },
    handleImageError(event) {
      // 当图片加载失败时使用默认图标
      event.target.src = 'assets/theme/smartisan/default.png';
    },
    openLink(url) {
      // 使用 JavaScript 打开链接
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
#apps {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
  height: 100%;
}

.app-item {
  display: flex;
  padding: 8px 12px;
  gap: 8px;
  cursor: pointer;
  color: inherit;
  border-radius: 8px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in-out;
}

.app-item:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.app-logo {
  height: 48px;
  width: 48px;
}

.app-name {
  height: 16px;
  color: white;
  text-align: center;
  font-size: 12px;
  width: 48px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
