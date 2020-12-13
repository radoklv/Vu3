<template>
  <li>
      <base-card>
        <h4>From: <a :href="mailTo">{{request.email}}</a></h4>
        <p><span>Message: </span>{{request.message}}</p>
        <base-button @click="deleteRequest">Delete</base-button>
      </base-card>
  </li>
</template>

<script>
export default {
    props: ['request'],

    methods:{
        deleteRequest(){

            if(confirm('Do you Really wonna to Delete this Requstes?')){
                this.$store.dispatch('requests/deleteRequest', this.request.id)
            }else{
                return
            }
        }
    },

    computed:{
        mailTo(){
            return 'mailTo:'+this.request.email
        }
    }
};
</script>

<style scoped>
p > span{
    font-weight: 600;
}
</style>
