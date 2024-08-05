<template>
    <h1>🌱 Lifecycle Hooks _ 생명주기 함수</h1>
    <h3>vue 생명주기 : 만들어지고, 소멸될 때까지의 어떤 흐름, 주기</h3>
    <p>created, mounted, beforeunmount, update, watch</p>
    <br />
    <br />
    <p>{{ data1 }}</p>
    <p>{{ data2 }}</p>
    <p>{{ data3 }}</p>

</template>

<script>
    export default{
        data(){
            return{
                data1: "변경될 데이터 1",
                data2: "변경될 데이터 2",
                data3: "변경될 데이터 3"
            }
        },
        // 화면이 열리기 전(vue 인스턴스가 생성되기 이전)에 실행되는 함수.
        created(){
            this.data2 = "변경된 @@ 데이터 2";
        },
        beforeMount(){
            window.addEventListener('resize', this.resize);
        },
        // vue 컴포넌트들이 DOM 에 마운트된 이후에 실행되는 함수. (화면이 모두 그려진 이후)
        mounted(){
            console.log("화면이 그려진 이후에 출력");
            this.data3 = "변경된 @@ 데이터 3"
        },
        // 컴포넌트가 화면에서 제거될 때(화면을 떠날 때) 아래 함수 실행. beforeDestroy 로 사용하기도 함.
        // 웹소켓, sse 연결 등 서버와의 연결을 끊어주고 나가야하는 시점.
        beforeUnmount(){
            window.removeEventListener('resize', this.resize);
        },
        methods:{
            resize(){
                alert("화면의 배율이 변경되고 있습니다.");
            }
        }
    }
</script>