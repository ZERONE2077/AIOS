<template>
  <div id="nav-wrap">
    <div class="nav-bar">
      <div class="icon-box" @click="handleClick('icon1')">
        <img src="assets/icons/navbar/menu.svg" alt="Menu" class="nav-icon" />
      </div>
      <div class="icon-box" @click="handleClick('icon2')">
        <img src="assets/icons/navbar/code.svg" alt="Code" class="nav-icon" />
      </div>
      <div class="icon-box" @click="handleClick('icon3')">
        <img src="assets/icons/navbar/fusion.svg" alt="Fusion" class="nav-icon" />
      </div>
      <div class="icon-box" @click="handleClick('icon4')">
        <img src="assets/icons/navbar/library.svg" alt="Library" class="nav-icon" />
      </div>
    </div>
    <!-- 弹框 -->
    <AppModal v-if="showModal" @close="showModal = false">
      <FeedingContent />
    </AppModal>
  </div>
</template>

<script>
import AppModal from './Modal.vue';
import FeedingContent from './Widget/Feeding.vue';

export default {
  components: {
    AppModal,
    FeedingContent
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleClick(iconName) {
      if (iconName === 'icon1') {
        this.showModal = true;
      }
      // 可以根据其他图标添加不同的逻辑
    }
  }
};
</script>

<style scoped>
#nav-wrap {
  display: flex;
  width: 100%;
  padding: 20px;
  position: fixed;
  bottom: 0;
  justify-content: center;
  z-index: 1000;
}

.nav-bar {
  display: flex;
  padding: 4px;
  gap: 8px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.50);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.icon-box {
  display: flex;
  padding: 4px;
  border-radius: 8px;
  align-items: center;
}

.icon-box:hover {
  background-color: rgba(0, 255, 255, 0.8);
}

.nav-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  #nav-wrap {
    padding: 10px;
    bottom: 10px;
  }
  .nav-bar {
    gap: 4px;
  }
  .icon-box {
    padding: 8px;
  }
  .nav-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
