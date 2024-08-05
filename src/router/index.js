// 파일 내부에 export default 가 있는 경우에는 {} 가 필요 없고, 그렇지 않으면 필요하다 !
// import 하는 요소가 여러 개일 경우에도 {} 를 붙인다.
import { createRouter, createWebHistory } from "vue-router"
// @ 는 src 를 의미. (root 폴더 경로 의미)
import HomeComponent from "@/components/HomeComponent.vue";
// import TestComponent from "@/components/TestComponent.vue";
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";

const routes = [
    {
        // path 로도 라우팅이 가능하고, name 으로도 라우팅이 가능하다.
        // name 으로 라우팅하는 경우는 js 코드 내에서 라우팅 하는 경우에 가능.
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    // {
    //     path: '/test',
    //     name: 'TEST',
    //     component: TestComponent
    // }
    ...practiceRouter,
    ...memberRouter
]

const router = createRouter({
    // vue router 는 내부적으로 두 가지 방식의 히스토리 관리를 제공.
    // 1) createWebHistory _ 대부분 WebHistory 사용. => /home 처럼 / 활용
    // 2) createHashHistory => /#/home 처럼 # 활용
    history: createWebHistory(),
    routes
});

export default router;