<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-center text-h5" style="background-color: aliceblue;">
                        🏡 My Page
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <tbody>
                                <tr v-for="element in memberInfoList" :key="element.key">
                                    <td>{{element.key}}</td>
                                    <td>{{element.value}}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>  
    <OrderListComponent
    :isAdmin="false"/>
</template>

<script>
import axios from 'axios';
import OrderListComponent from '@/components/OrderListComponent.vue';

export default{
    components:{
        OrderListComponent
    },
    data(){
        return{
            memberInfoList: [],
            memberInfo: {},
        }
    },
    async created(){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/myinfo`);
        this.memberInfo = response.data.result;
        this.memberInfoList = [
            {key:"이름", value:this.memberInfo.name},
            {key:"이메일", value:this.memberInfo.email},
            {key:"도시", value:this.memberInfo.address.city},
            {key:"상세주소", value:this.memberInfo.address.street},
            {key:"우편번호", value:this.memberInfo.address.zipcode}
        ];
    }
}
</script>