// main.js 는 vue 애플리케이션의 시작점이다.

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router 를 사용하겠다는 선언.
import router from '@/router/index.js';
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios';


// createApp(App).mount('#app')
// 위 코드를 app 활용을 위해 아래처럼 작성
const app = createApp(App);

// api 요청이 나가는 시점
// axios 요청 인터셉터를 설정하여 모든 요청에 액세스 토큰을 포함
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 해당 인터셉터가 무시되고, 사용자의 본래 요청인 화면으로 라우팅.
        return Promise.reject(error);
    }
)

// 401 응답을 받을 경우에 interceptor 를 통해 전역적으로 rt 를 통한 at 재발급.
// 만약 rt 도 401 응답을 받을 경우에 token 제거 후 login 화면으로 리다이렉트 됨.
axios.interceptors.response.use(
    response => response,
    async error => {
        if(error.response && error.response.status === 401){
            const refreshToken = localStorage.getItem('refreshToken');
            try{
                localStorage.removeItem('token');
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/refresh-token`, {refreshToken});
                localStorage.setItem('token', response.data.result.token)
                window.location.reload();
            }
            catch(e){ // refresh token 이 만료되었을 때 catch 로 잡아옴.
                localStorage.clear();
                window.location.href = '/login'; 
            }
        }
    }
)



app.use(router);
app.use(vuetify);
app.mount('#app');