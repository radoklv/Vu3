<template>
  <input type="text" v-model="name"/>
  <button @click="addName">Add Name</button>
  
  <transition-group tag="ul" name="list">
    <li v-for="(user) in users" :key="user">{{ user }}
      <button @click="deleteName(user)">X</button>
    </li>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      users: ['Rado', 'Dimo', 'Stoyan']
    };
  },

  methods:{
      addName(){
        if(this.name !== ""){
          this.users.unshift(this.name)
        }else{
          return
        }
      },

      deleteName(user){
        this.users = this.users.filter(el => el != user)
      }
  }
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  text-align: center;
  padding: 1rem;
  border: 1px solid #000;
}

.list-enter-active{
  animation: slide-in .5s ease-out;
}

.list-leave-active{
  animation: slide-out .5s ease-out;
  position: absolute;/* Това се добавя за да се избегне внезапното свиване на листа при премахване на елемент */
}

.list-move{ /* Този клас -move е за останалите елементи които не се махат или добавят */
  transition: transform .5s ease; 
}


</style>
