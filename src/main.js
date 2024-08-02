// main.js 는 vue 애플리케이션의 시작점이다.

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router 를 사용하겠다는 선언.
import router from '@/router/index.js';
// createApp(App).mount('#app')
// 위 코드를 app 활용을 위해 아래처럼 작성
const app = createApp(App);
app.use(router);
app.mount('#app');