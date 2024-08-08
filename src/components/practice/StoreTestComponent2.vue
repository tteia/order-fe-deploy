<template>
    <p>count: {{getCount}}</p>
    <v-btn @click="incrementCount" style="background-color: cornsilk;">increment Count</v-btn>

    <input type="text" v-model="message">
    <v-btn @click="updateMessage" style="background-color: lightpink;">update message</v-btn>
</template>

<script>
import {mapGetters} from 'vuex';
export default{
    data(){
        return{
            count : 0,
            message: ""
        }
    },
    computed:{
        ...mapGetters(['getCount'])
    },
    methods:{
        incrementCount(){
            // this.count++;
            this.$store.dispatch('incrementCount');
        },
        updateMessage(){
            this.$store.dispatch('updateMessage', this.message);
        }
    }
}
</script>