const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods:{
    add(){
      this.counter++
    },

    reduce(){
      this.counter--;
    },

    setName(event){
      this.name = event.target.value
    }

  }
});

app.mount('#events');
