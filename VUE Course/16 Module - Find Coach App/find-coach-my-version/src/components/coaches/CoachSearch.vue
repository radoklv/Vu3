<template>
  <div class="search">
    <label for="search">Search Coach by Name</label>
    <input type="text" id="search" v-model.trim="word" @keyup="search"/>
  </div>
</template>

<script>
export default {
    emits: ['emittedWord'],

    data(){
        return{
            word: '',
        }
    },

    methods:{
        search(){
            this.$emit('emittedWord', this.word)
        }
    }
};
</script>

<style scoped>
.search input {
  width: auto;
}

.search label{
  display: block;
}
</style>
