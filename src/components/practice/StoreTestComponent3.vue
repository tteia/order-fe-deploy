<template>
    <p>count: {{getCount}}</p>
    <p>message: {{getUpdateMessage}}</p>
</template>

<script>
import {mapGetters} from 'vuex';
export default{
    // data(){
    //     return{
    //         count : 0,
    //         message: ""
    //     }
    // },
    computed:{
        ...mapGetters(['getCount', 'getUpdateMessage']),
    },
    methods:{
    }
}
</script>