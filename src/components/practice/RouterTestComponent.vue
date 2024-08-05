<template>
    <h1>🫐 Router Test Component _ 화면 라우팅 테스트</h1>
    <br/>
    <v-btn @click="spaMove1">🤸🏻 Modeling 페이지로 이동(url)</v-btn>
    <br/>
    <br/>
    <v-btn @click="spaMove2">🤸🏻 Modeling 페이지로 이동(name)</v-btn>
    <br/>
    <br/>
    <v-btn @click="hrefMove">🤸🏻 Modeling 페이지로 이동(href)</v-btn>
    <br/>
    <br/>
    <v-btn @click="reloadPage">🔖 현재 화면 reload</v-btn>
</template>


<script>
export default{
    data(){
        return {

        }
    },
    methods:{

        // router 를 통한 spa 방식은 created 함수가 실행되지 않음. => 보임 ㅠ
        spaMove1(){
            this.$router.push("/practice/modeling")
        },
        spaMove2(){
            this.$router.push({name:"ModelingComponent"})
        },
        hrefMove(){
            window.location.href='/practice/modeling'
        },
        reloadPage(){
            window.location.reload();
        }
    }
}

</script>  