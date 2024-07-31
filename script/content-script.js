const navBarContainer = document.createElement('div');
navBarContainer.id = 'nav-bar-container';
document.body.appendChild(navBarContainer);

const style = document.createElement('style');
style.textContent = `
  #nav-bar-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10000;
  }
`;
document.head.appendChild(style);

// 创建一个 shadow DOM
const shadowRoot = navBarContainer.attachShadow({ mode: 'open' });

// 创建 Vue 应用
const appElement = document.createElement('div');
appElement.id = 'nav-bar-app';
shadowRoot.appendChild(appElement);

import { createApp } from 'vue';
import NavBar from './components/NavBar.vue';

const app = createApp(NavBar);
app.mount(appElement);
