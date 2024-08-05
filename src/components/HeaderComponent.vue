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
                        <v-btn :to="{path:'/order/list'}">실시간 주문</v-btn>
                    </div>
                </v-col>
                <v-col class="text-center">
                    <v-btn :to="{path:'/'}" style="color:orangered;"> 🫐 ARORONG STORE 🐬 </v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn :to="{path:'/product/list'}">상품 목록</v-btn>
                    <v-btn v-if="isLogin" :to="{path:'/ordercart'}">장바구니</v-btn>
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
export default{

    data(){
        return{
            userRole: null,
            isLogin: false
        }
    },
    created(){
        const token = localStorage.getItem('token');
        if(token){
            this.isLogin = true;
            this.userRole = localStorage.getItem('role');
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