<template>
    <v-container>
        <v-row justify="center">
            <!-- 화면 크기가 small(스마트폰, 태블릿) 이상일 때 : sm -->
            <!-- 화면 크기가 medium(데스크탑) 이상일 때 : md -->
            <v-col cols="12" sm="4" md="6">
                <v-alert v-if="errorMessage" type="error" dismissible @input="errorMessage = ''"> {{ errorMessage }} </v-alert>
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        🔖 회원 가입
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="memberCreate">
                            <v-text-field label="name" v-model="name" prepend-icon="mdi-account" required></v-text-field>
                            <v-text-field label="email" type="email" v-model="email" prepend-icon="mdi-email" required></v-text-field>
                            <v-text-field label="password" type="password" v-model="password" prepend-icon="mdi-lock" required></v-text-field>
                            <v-text-field label="city" prepend-icon="mdi-city" v-model="city"></v-text-field>
                            <v-text-field label="street" prepend-icon="mdi-home" v-model="street"></v-text-field>
                            <v-text-field label="zipcode" prepend-icon="mdi-mailbox" v-model="zipcode"></v-text-field>
                            <v-btn type="submit" style="background-color: honeydew;" block > 회원 가입 완료 ! </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                name: "",
                email: "",
                password: "",
                city: "",
                street: "",
                zipcode: "",
                errorMessage: ""
            }
        },
        methods:{
            async memberCreate(){
                try{
                    const registerData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address:{
                    city: this.city,
                    street: this.street,
                    zipcode: this.zipcode
                    }
                }
                // data 입력될 때까지 기다려 ~ => async - await 붙여줌.
                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, registerData)
                this.$router.push('/')
                }
                catch(e){
                    this.errorMessage = e.response.data.error_message,
                    console.log(e.response.data.error_message);
                }
            }
        }
    }


</script>