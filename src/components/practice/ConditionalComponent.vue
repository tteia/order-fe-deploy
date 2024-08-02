<template>
    <h1>hello asterum</h1>
    <br />
    <div v-if="isLogined">환영합니다 ! 🫐</div>
    <div v-else>로그인이 필요합니다. 🐬</div>
    <br />
    <br />
    <v-btn @click="login" style="background-color: aliceblue;">🔒 로그인</v-btn>
    <br />
    <br />
    <v-btn @click="logout" style="background-color: cornsilk;">🔑 로그아웃</v-btn>
    <br />
    <br />
    <br />
    <h1>Product List</h1>
    <ul style="color:darkseagreen;">
        <!-- v-for for문에서는 반드시 key 값을 지정해야한다. key 를 지정함으로서 각 요소마다의 고유 식별이 가능해진다. -->
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
</template>

<script>
    export default{
        data(){
            return{
                isLogined:false,
                products:[
                    {id:1, name:"cherry"},
                    {id:2, name:"melon"},
                    {id:3, name:"apple"}
                ],
            }
        },
        methods:{
            login(){
                this.isLogined = true;
            },
            logout(){
                this.isLogined = false;
            }
        }
    }
</script>