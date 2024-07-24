module.exports = {
  env: {
    browser: true,       // 支持浏览器环境
    node: true,          // 支持 Node.js 环境
    webextensions: true  // 支持浏览器扩展环境
  },
  globals: {
    chrome: 'readonly'  // 允许 `chrome` 作为全局只读变量
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则
    'plugin:vue/vue3-recommended' // 使用 Vue 推荐的规则
  ],
  rules: {
    // 其他规则
  }
};
