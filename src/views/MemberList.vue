<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5" style="background-color:honeydew;">
                        회 원 목 록
                    </v-card-title>
                    <v-card-text style="background-color: cornsilk;">
                        <v-data-table :headers="tableHeaders" :items="memberList" cell-class="text-center">
                            
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
            tableHeaders: [
                { title: '🆔 고유 ID', key: 'id', align: 'center' },
                { title: '📛 이름', key: 'name', align: 'center' },
                { title: '📧 이메일', key: 'email', align: 'center' },
                { title: '🛒 주문 수량', key: 'orderCount', align: 'center' }
            ],
            memberList:[] // 빈 배열로 정의해서 api 요청으로 받아오기.
        }
    },
    async created(){
        try{
            const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/member/list`);
            this.memberList = response.data.result.content;
        }
        catch(e){
            console.log(e)
        }    
    }       
}
</script>
