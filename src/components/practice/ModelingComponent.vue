<template>
    <!-- HTML 요소의 동적 값 표시 -->
    <!-- html 요소 안에 중괄호 2번을 사용함으로서 script 에 정의된 변수값을 화면에 표시한다. -->
    <h1>hello {{world}}</h1>
    <br/>
    <v-btn @click="toggleWorld('value1')">🌎 HELLO ASTERUM</v-btn>
    <br/>
    <br/>

    <!-- :value 는 단방향 데이터 바인딩-->
    <input type="test" :value="value1" style="background-color: aliceblue;">
    <!-- v-model 은 양방향 데이터 바인딩 -->
    <input type="test" v-model="value2" style="background-color: honeydew;">
    <br/>
    <br/>
    <button @click="showValue">🔎 Check Changes</button>
    <br/>
    <br/>
    <h2 style="color: cadetblue;">{{count}}</h2>
    <button @click="increment" style="background-color:cornsilk">🔢 Add Count</button>
    <br/>
    <h1 style="color: tomato;">{{ doubleCount }}</h1>
    <br/>
    <br/>
    <input type="number" v-model="count2" style="color: cadetblue;">
    <br/>
    <button @click="increment2" style="background-color:cornsilk">🔢 Add Count _ 2</button>
</template>

<script>
    export default{
        data(){
            return{
                world:"world",
                value1:"asterum", // value1 에 데이터 넣어줌
                value2:"tera", // v-model 은 2에 넣어주고, 2에 넣은 데이터가 여기에 담길 수도 있음.
                count: 0,
                count2: 0
            }
        },
        // computed 는 종속된 반응형 데이터가 변경될 때에 함수를 다시 실행해 값을 계산하는 함수.
        // 값을 바라보고 있다가 같이 실행된다는 점이 매우 중요함.
        computed: {
            doubleCount(){
                return this.count * 2;
            }
        },
        created(){
            alert("created 함수인데 router test 타고 오면 안 보 이 지 롱") // 엥 보여,,
        },
        methods:{
            showValue(){
                alert(this.value2)
            },
            increment(){
                this.count++;
            },
            increment2(){
                this.count2++;
            },
            changeWorld1() {
                this.world = this.value1;
            },
            toggleWorld(value) {
                if (this.world === this[value]) {
                    this.world = "world";
                } else {
                    this.world = this[value];
                }
            }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>