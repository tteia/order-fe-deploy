<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5" style="background-color:honeydew;">
                        👩🏻‍❤️‍👨🏻 회 원 목 록
                    </v-card-title>
                    <v-card-text style="background-color: cornsilk;">
                        <v-data-table :headers="tableHeaders" :items="memberList">
                            
                        </v-data-table>

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
        return{
            tableHeaders:[{title:'🆔 고유 ID', key:'id', align:'start'},
                        {title:'📛 이름', key:'name', align:'start'},
                        {title:'📧 이메일', key:'email', align:'start'}],
            memberList:[] // 빈 배열로 정의해서 api 요청으로 받아오기.
        }
    },
    async created(){
            const token = localStorage.getItem('token');
            // 토큰 정의 규칙 : {"headers" : {"Authorization" : 'Bearer abcdefg(토큰 값)'}, {"ContentsType" : 'xxxx'}...}
            const headers = {Authorization : `Bearer ${token}`};
            // const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`, {headers}); // "headers":headers 에 해당하는 값이 나간다.
            this.memberList = response.data.result.content;
        }
}
</script>