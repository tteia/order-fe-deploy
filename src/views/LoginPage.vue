<template>
    <v-container>
        <v-row justify="center">
            <!-- 화면 크기가 small(스마트폰, 태블릿) 이상일 때 : sm -->
            <!-- 화면 크기가 medium(데스크탑) 이상일 때 : md -->
            <v-col cols="12" sm="6" md="8">
                <v-alert v-if="errorMessage" type="error" dismissible @input="errorMessage = ''"> {{ errorMessage }} </v-alert>
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        🔐 로그인
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="doLogin">
                            <v-text-field label="email" type="email" v-model="email" prepend-icon="mdi-email" required></v-text-field>
                            <v-text-field label="password" type="password" v-model="password" prepend-icon="mdi-lock" required></v-text-field>
                            <v-row>
                                <v-col cols="6"><v-btn style="background-color:cornsilk;" block > 비밀번호 찾기 </v-btn></v-col>
                                <v-col cols="6"><v-btn type="submit" style="background-color: honeydew;" block > 로그인 완료 ! </v-btn></v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import axios from 'axios';
    import {jwtDecode} from 'jwt-decode';
    export default{
        data(){
            return {
                email:"",
                password:""
            }
        },
        methods:{
            async doLogin(){
                try{
                    const loginData = {
                    email: this.email,
                    password: this.password
                    };
                    // data 입력될 때까지 기다려 ~ => async - await 붙여줌.
                    const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/doLogin`, loginData);
                    const token = response.data.result.token;
                    const refreshToken = response.data.result.refreshToken;
                    const role = jwtDecode(token).role
                    // localStorage 라는 브라우저의 특정 공간에 서버로부터 받아온 토큰 값 저장.
                    localStorage.setItem('token', token);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('role', role);
                    window.location.href = '/';
                }
                
                catch(e){
                    this.errorMessage = e.response.data.error_message,
                    console.log(e.response.data.error_message);
                }
            }

            }
        }
    

</script>