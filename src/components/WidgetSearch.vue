<template>
  <div class="search-wrap">
    <div class="search-box">
      <input type="text" placeholder="Search..." v-model="query" @keyup.enter="performSearch" />
      <button @click="performSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    performSearch() {
      if (this.query.trim()) {
        const encodedQuery = encodeURIComponent(this.query.trim());
        const searchUrl = `https://www.bing.com/search?q=${encodedQuery}`;
        window.open(searchUrl, '_blank'); // 打开搜索结果的新标签页
      } else {
        alert('请输入搜索内容');
      }
    }
  }
};
</script>

<style scoped>
.search-wrap {
  display: flex;
  padding: 20px;
  justify-content: center;
}

.search-box {
  display: flex;
  padding: 4px;
  width: 100%;
  max-width: 520px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  background-color: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(5px);
}

.search-box:hover,
.search-box:focus-within {
  background-color: #fff;
}

.search-box input,
button {
  padding: 8px;
  font-size: 14px;
  line-height: 24px;

}

.search-box input {
  width: 100%;
  background: transparent;
}

.search-box button {
  min-width: 72px;
  color: #fff;
  background: #000;
  cursor: pointer;
}

.search-box button:hover {
  background-color: #0056b3;
}
</style>