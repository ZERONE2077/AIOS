<template>
    <div class="settings" style="display: none;">
      <h1>设置</h1>
      <div class="setting-item">
        <label for="search-engine">默认搜索引擎：</label>
        <select id="search-engine" v-model="selectedSearchEngine" @change="updateSearchEngine">
          <option v-for="engine in searchEngines" :key="engine.id" :value="engine.id">
            {{ engine.name }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import searchEngines from '@/assets/search-engines.json';
  
  export default {
    setup() {
      const searchEnginesList = searchEngines;
      const selectedSearchEngine = ref(localStorage.getItem('searchEngine') || 'bing');
  
      const updateSearchEngine = () => {
        localStorage.setItem('searchEngine', selectedSearchEngine.value);
      };
  
      return {
        searchEngines: searchEnginesList,
        selectedSearchEngine,
        updateSearchEngine
      };
    }
  };
  </script>
  
  <style scoped>
  .settings {
    padding: 20px;
  }
  
  .setting-item {
    margin-bottom: 10px;
  }
  </style>
  