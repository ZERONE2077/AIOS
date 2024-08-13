<template>
  <div class="search-wrap">
    <div class="search-box bg-blur">
      <div class="search-bar">
        <input
          v-model="query"
          type="text"
          placeholder="Search..."
          @input="debouncedFetchSuggestions"
          @keyup.enter="performSearch"
          @focus="showSuggestions = true"
          @blur="handleBlur"
        />
        <button @click="performSearch">Search</button>
      </div>

      <ul v-if="showSuggestions && suggestions.length" class="suggestions-list">
        <li v-for="suggestion in suggestions" :key="suggestion" @mousedown="handleSuggestionClick(suggestion)">
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
    const showSuggestions = ref(false);
    
    // 默认搜索引擎
    const searchEngineUrl = 'https://www.bing.com/search?q=';

    const getSearchUrl = (query) => {
      return `${searchEngineUrl}${encodeURIComponent(query)}`;
    };

    const performSearch = () => {
      const trimmedQuery = query.value.trim();
      if (trimmedQuery) {
        const searchUrl = getSearchUrl(trimmedQuery);
        window.open(searchUrl, '_blank');
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
      query.value = suggestion;
      performSearch();
    };

    const handleBlur = () => {
      setTimeout(() => {
        showSuggestions.value = false;
      }, 200);
    };

    onBeforeUnmount(() => {
      const scripts = document.querySelectorAll('script[src^="https://suggestion.baidu.com/su"]');
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    });

    return {
      query,
      suggestions,
      showSuggestions,
      performSearch,
      debouncedFetchSuggestions,
      handleSuggestionClick,
      handleBlur
    };
  }
};
</script>

<style scoped>
.search-wrap {
  z-index: 1000;

}

.search-box {
  margin: auto;
  border-radius: 8px;
  max-width: 520px;
  padding: 2px;
  position: relative;
}

.search-bar {
  display: flex;
}

.search-box input {
  width: 100%;
  background: transparent;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #ccc;
}

.suggestions-list li {
  padding: 8px;
  cursor: pointer;
}

.suggestions-list li:hover {
  background-color: #eee;
}
</style>
