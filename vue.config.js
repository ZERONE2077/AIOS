// vue.config.js
module.exports = {
    // 配置开发服务器
    devServer: {
      // proxy: 'http://localhost:3000', // 代理 API 请求
      port: 8080, // 开发服务器端口
      open: true, // 自动打开浏览器
    },
    // 修改 Webpack 配置
    configureWebpack: {
      // 你可以在这里添加插件或修改其他配置
    },
    // 配置构建输出
    publicPath: './', // 设置公共路径
    outputDir: 'dist', // 设置输出目录
  };
  