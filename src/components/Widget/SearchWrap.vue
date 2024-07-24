<template>
  <div class="search-wrap">
    <div class="search-box">
      <div class="search-bar">
        <input v-model="query" type="text" placeholder="Search..." @input="debouncedFetchSuggestions"
          @keyup.enter="performSearch">
        <button @click="performSearch">
          Search
        </button>
      </div>

      <ul v-if="suggestions.length" class="suggestions-list">
        <li v-for="suggestion in suggestions" :key="suggestion" @click="handleSuggestionClick(suggestion)">
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue';
import debounce from 'lodash/debounce';

export default {
  setup() {
    const query = ref('');
    const suggestions = ref([]);

    const performSearch = () => {
      const trimmedQuery = query.value.trim();
      if (trimmedQuery) {
        const encodedQuery = encodeURIComponent(trimmedQuery);
        const searchUrl = `https://www.bing.com/search?q=${encodedQuery}`;
        window.open(searchUrl, '_blank'); // 打开搜索结果的新标签页
      } else {
        alert('请输入搜索内容');
      }
    };

    const fetchSuggestions = () => {
      if (query.value.length < 2) {
        suggestions.value = [];
        return;
      }

      const script = document.createElement('script');
      const callbackName = `suggestionCallback_${Date.now()}`;

      window[callbackName] = (data) => {
        if (data && data.s) {
          suggestions.value = data.s;
        } else {
          console.error('Unexpected data format:', data);
        }
        delete window[callbackName];
        document.body.removeChild(script);
      };

      script.src = `https://suggestion.baidu.com/su?wd=${encodeURIComponent(query.value)}&p=3&cb=${callbackName}`;
      document.body.appendChild(script);
    };

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    const handleSuggestionClick = (suggestion) => {
      query.value = suggestion; // 设定选中的建议为输入框的值
      suggestions.value = []; // 清空建议列表
      performSearch(); // 执行搜索
    };

    onBeforeUnmount(() => {
      // 清理挂载的脚本以防止内存泄漏
      const scripts = document.querySelectorAll('script[src^="https://suggestion.baidu.com/su"]');
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    });

    return {
      query,
      suggestions,
      performSearch,
      debouncedFetchSuggestions,
      handleSuggestionClick
    };
  }
};
</script>

<style scoped>
* {}

.search-wrap {
}

.search-box {
  background: white;
  padding: 2px;
  border-radius: 8px;
  max-width: 520px;
}

.search-bar {
  display: flex;
}



.search-box input {
  width: 100%;
  background: transparent;
}





.suggestions-list {
  font-size: 12px;

  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  z-index: 1000;
  /* Ensure it appears on top of other elements */
}

.suggestions-list li {
  padding: 8px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background-color: #eee;
}
</style>
