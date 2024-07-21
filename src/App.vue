<template>

    <OneWallpaper />
    <WidgetClock />
    <WidgetSearch />
    <WidgetDailyHot />
    <AppList />
    <!-- 其他组件或功能 -->

</template>

<script>
import OneWallpaper from './components/OneWallpaper.vue';
import AppList from './components/AppList.vue';
import WidgetClock from './components/WidgetClock.vue';
import WidgetSearch from './components/WidgetSearch.vue';
import WidgetDailyHot from './components/WidgetDailyHot.vue';

export default {
  name: 'App',
  components: {
    OneWallpaper,
    WidgetClock,
    WidgetSearch,
    AppList,
    WidgetDailyHot,
  }
};
</script>

<style>
* {
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  border: none;
  outline: none;
}



::selection {
  color: #fff;
  background: #000;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-synthesis: style;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC,
    PingFang TC, PingFang HK, Microsoft Yahei, Microsoft JhengHei;
  text-rendering: optimizeLegibility; /* 优化文字渲染 */
  -webkit-font-smoothing: antialiased; /* 使字体在 Webkit 内核浏览器中更平滑 */


}

#app {
  margin: auto ;
  max-width: 1080px;

}

img {
  -webkit-user-drag: none; /* Chrome, Safari, Opera */
  -khtml-user-drag: none;  /* Konqueror */
  -moz-user-drag: none;    /* Firefox */
  -o-user-drag: none;      /* Opera */
  user-drag: none;         /* Standard */
}
</style>
