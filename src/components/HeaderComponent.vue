<template>
    <v-app-bar style="background-color:aliceblue">
        <v-container>
            <v-row align="center">
                <v-col class="d-flex justify-start"> <!-- 왼쪽 정렬 해주는 class -->
                    <!-- server url 이 아닌 router url ! 헷갈리지 않게 통일해줌. -->
                    <!-- admin 이 아니면 볼 필요가 없는 메뉴들 > 권한 관리 ! -->
                    <div v-if="userRole === 'ADMIN'">
                        <v-btn :to="{path:'/member/list'}">회원 관리</v-btn>
                        <v-btn :to="{path:'/product/manage'}">상품 관리</v-btn>
                        <v-btn href="/order/list">실시간 주문({{ liveQuantity }})</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn :to="{path:'/'}" style="color:orangered;"> 🏡 tteia.xyzzz 🩵 </v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn :to="{path:'/product/list'}">상품 목록</v-btn>
                    <v-btn v-if="isLogin" :to="{ path: '/order/cart' }">장바구니({{ getTotalQuantity }})</v-btn>


                    <v-btn v-if="isLogin" :to="{path:'/mypage'}">마이 페이지</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/member/create'}">회원 가입</v-btn>
                    <v-btn v-if="!isLogin" :to="{path:'/login'}">login</v-btn>
                    <v-btn v-if="isLogin" @click="doLogout">logout</v-btn>
                </v-col>
            </v-row>
        </v-container>





    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
// 서버와 실시간 알림 서비스를 위한 의존성 추가 필요,
import { EventSourcePolyfill } from 'event-source-polyfill';

export default{

    data(){
        return{
            userRole: null,
            isLogin: false,
            liveQuantity: 0
        }
    },
    computed:{
        ...mapGetters(['getTotalQuantity'])
    },
    created(){
        const token = localStorage.getItem('token');
        if(token){
            this.isLogin = true;
            this.userRole = localStorage.getItem('role');
        }
        if(this.userRole === 'ADMIN'){
            let sse = new EventSourcePolyfill(`${process.env.VUE_APP_API_BASE_URL}/subscribe`, {headers: {Authorization: `Bearer ${token}`}});
            sse.addEventListener('connect', (event)=> { console.log(event) });
            sse.addEventListener('ordered', (event)=> { 
                console.log(event.data)
                this.liveQuantity ++; // 현재 우리 코드에서는 새로고침하면 사라진다! 아직 localStorage 에 저장해주지 않았기 때문. 로컬에 넣냐 서버에 넣냐 , , 따져주기
            });
            sse.onerror = (error) => {
                console.log(error);
                sse.close();
            }
        }
    },
    methods:{
        doLogout(){
            localStorage.clear();
            window.location.reload();
        }
    }

};
</script>