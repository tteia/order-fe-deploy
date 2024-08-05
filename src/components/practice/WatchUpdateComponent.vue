<template>
    <h1>👀 Watch Update Component</h1>
    <br/>
    <br/>
    <h2>Watch 예제</h2>
    <br/>
    <div>count : {{ count }}</div>
    <br/>
    <v-btn @click="incrementCount" style="background-color: aliceblue;">🔢 Increment Count</v-btn>
    <br/>
    <br/>
    <h2>Update 예제</h2>
    <br/>
    <div>message : {{ message }}</div>
    <br/>
    <v-btn @click="updateMessage" style="background-color: honeydew;">💬 Update Message</v-btn>
    

</template>

<script>
    export default{
        data(){
            return{
                count : 0,
                message: "Hello Tera"
            }
        },
        // 특정 변수 값의 변경 사항을 인지하는 hook 함수
        watch:{
            // 인지하고자 하는 변수값과 일치하는 함수명 작성
            count(){
                alert("Count 값 변경");
            }
        },
        // dom 객체(화면)의 변경사항을 인지하는 hook 함수
        // watch 보다 변경 범위가 넓다고 볼 수 있음.
        updated(){
            alert("dom 요소 변경");
        },
        methods:{
            incrementCount(){
                this.count++;
            },
            updateMessage(){
                this.message = "Hello Asterum";
            }
        }
    }
</script>