<template>
  <div id="background-container">
    <div
      id="image-background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />
  </div>
</template>

<script>
import backgroundImage from '@/assets/img/wallpaper/windows-11-stock-grey-abstract-dark-background-3840x2160-8957.jpg';

export default {
  data() {
    return {
      backgroundImage
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      const img = new Image();
      img.src = this.backgroundImage;
      img.onload = () => {
        document.getElementById('image-background').classList.add('loaded');
      };
      img.onerror = () => {
        console.error('Image failed to load.');
      };
    }
  }
};
</script>

<style scoped>
#background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

#image-background {
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0; /* 初始透明度 */
  background-position: center;
  background-size: cover;
}

#image-background.loaded {
  opacity: 1; /* 加载完成后完全不透明 */
}
</style>
