<template>
  <div id="desktop">
    <NavBar />
    <WallPaper />
    <div id="main">
      <WidgetClock />
      <WidgetSearch />
      <AppList />
    </div>
  </div>
</template>

<script>
import WallPaper from './components/WallPaper.vue';
import AppList from './components/AppList.vue';
import WidgetClock from './components/Widget/ClockWrap.vue';
import WidgetSearch from './components/Widget/SearchWrap.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    WallPaper,
    WidgetClock,
    WidgetSearch,
    AppList,
    NavBar,
  }
};
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#desktop {
  
}

#main {
  display: grid;
  margin: 80px auto ;
  padding: 20px;
  max-width: 1080px;
  height: 100%;
}
</style>
