<template>
  <div id="desktop">
    <div id="main">
      <WidgetClock />
      <WidgetSearch />
      <MusicPlayer />
      <AppList />
      <SettingsPage />
    </div>


  </div>
  <NavBar />
  <WallPaper />
</template>

<script>
import WallPaper from './components/WallPaper.vue';
import AppList from './components/AppList.vue';
import WidgetClock from './components/Widget/ClockWrap.vue';
import WidgetSearch from './components/Widget/SearchWrap.vue';
import NavBar from './components/NavBar.vue';
import MusicPlayer from './components/Widget/MusicPlayer.vue';
import SettingsPage from './components/SettingsPage.vue'

export default {
  name: 'App',
  components: {
    WallPaper,
    WidgetClock,
    WidgetSearch,
    AppList,
    NavBar,
    MusicPlayer,
    SettingsPage,
  }
};
</script>

<style scoped>
#desktop {

  margin: auto;
}

#main {
  display: grid;
  margin: 60px auto;
  padding: 20px;
  gap: 20px;
  max-width: 1080px;
}
</style>
