<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- router-view 를 통해 app.vue 에서 화면 라우팅. -->
  <v-app>
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
  <!-- <FooterComponent /> -->
  </v-app>
</template>
<!-- template 에는 html 코드가 들어가고, script 에는 js 코드가 들어감. -->
<!-- 디자인은 style 태그 안에 들어감. -->
<!-- vue 파일 안에는 <head> 태그가 없고, head 의 공통 import 사항은 main.js 에 구성하면 된다. (모든 화면에 다 들어갈 경우 main.js 에!) -->

<script>
// App.vue 는 Vue 애플리케이션의 루트 컴포넌트 (재활용이 가능한 화면 -> a/b/c 화면 만들어놓고 갖다쓰는 걸 컴포넌트라고.. ㅎㅎ)
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderComponent,
    // FooterComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
