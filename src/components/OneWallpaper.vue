<template>
  <div id="background-container">
    <div id="image-background" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: '/img/wallpaper/windows-11-stock-grey-abstract-dark-background-3840x2160-8957.jpg'
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;
  z-index: -1;
}

#image-background {
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  background-position: center;
  background-size: cover;
  /* 初始透明度 */
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明背景色以提供柔和的过渡 */
}

/* 添加类用于加载完成后的过渡效果 */
#image-background.loaded {
  opacity: 1;
  /* 加载完成后完全不透明 */
}
</style>
