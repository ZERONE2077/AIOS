<template>
    <div
      id="image-background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />

</template>

<script>
export default {
  data() {
    return {
      backgroundImage: 'assets/images/wallpaper/windows-11-stock-grey-abstract-dark-background-3840x2160-8957.jpg'
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


#image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-size: cover;
  background-position: center;

  transition: opacity 0.5s ease-in-out;
  opacity: 0; /* 初始透明度 */
}


#image-background.loaded {
  opacity: 1; /* 加载完成后完全不透明 */
}
</style>
