<template>
    <v-dialog max-width="500px">
        <v-card>
            <v-card-title class="text-h5 text-center">
                🔑 비밀번호 변경하기
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="resetPassword">
                    <v-text-field label="email" type="email" v-model="email" prepend-icon="mdi-email" required></v-text-field>
                    <v-text-field label="old password" type="password" v-model="asIsPassword" prepend-icon="mdi-lock" required></v-text-field>
                    <v-text-field label="new password" type="password" v-model="toBePassword" prepend-icon="mdi-lock" required></v-text-field>
                    <v-btn type="submit" style="background-color:cornsilk;" block > 비밀번호 변경하기 </v-btn>
                    <v-btn @click="closeModal" style="background-color:aliceblue;" block > 닫기 </v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>


<script>
import axios from 'axios';

export default{
    data(){
        return{
            email: "",
            asIsPassword: "",
            toBePassword: ""
        }
    },
    methods:{
        async resetPassword(){
            try{
                const body = {
                    email: this.email,
                    asIsPassword: this.asIsPassword,
                    toBePassword: this.toBePassword
                }
                // {body} 로 하게 되면 body : {email:xxx, pass:aaa}
                // body => {email:xxx, pass:aaa}
                const response = await axios.patch(`${process.env.VUE_APP_API_BASE_URL}/member/reset-password`, body); 
                alert(response.data.status_message)
            }
            catch(e){
                console.log(e)
                alert(e.response?.data?.error_message || "입력 값을 확인해주세요.") // 값이 있으면 꺼내고 없으면 X -> ? 가 해준다 !
            }
        
        },
        closeModal(){
            // this.emit : vue 에서 컴포넌트 간의 이벤트를 전달하는 매커니즘.
            // 자식 컴포넌트에서 this.$emit 을 호출하면 update:dialog 라는 이벤트가 실행되고, false 가 부모 컴포넌트로 전달된다.
            this.$emit('update:dialog', false);
        }
    }
}

</script>