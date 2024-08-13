<template>
  <div class="music-player">
    <audio ref="audio" :src="currentTrack" @ended="handleTrackEnded" />
    <img src="horizontal.png" alt="">

    <div class="widget-name">MUSIC</div>
    <div class="song"></div>
    <div class="form">AIOS</div>
    <div class="controls">
      <button @click="playPause">{{ isPlaying ? '离开' : '加入' }}
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
          <path
            d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
            fill="white" /> <!-- 修改这里的颜色 -->
        </svg>
      </button>

    </div>
    <div class="icon-box">

    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const audio = ref(null);
    const currentTrack = ref('assets/music/testmusic.mp3'); // Track URL or file path
    const isPlaying = ref(false);

    const playPause = () => {
      if (isPlaying.value) {
        audio.value.pause();
        isPlaying.value = false;
      } else {
        audio.value.play();
        isPlaying.value = true;
      }
    };

    const handleTrackEnded = () => {
      isPlaying.value = false;
    };

    watch(currentTrack, (newTrack) => {
      if (audio.value) {
        audio.value.src = newTrack;
        if (isPlaying.value) {
          audio.value.play();
        }
      }
    });

    return {
      audio,
      currentTrack,
      isPlaying,
      playPause,
      handleTrackEnded,
    };
  },
};
</script>

<style scoped>
* {
  color: white;
}

.widget-name {
  font-family: 'DDINProBold', Arial, sans-serif;
}

.music-player {
  padding: 20px;
  height: 160px;
  width: 160px;
  background-size: cover;
}
</style>
