Vue.createApp({
    data(){
        return{
            goals:[],
            inputValue:''
        }
    },

    methods:{
        addGoal(){
            if(!this.inputValue){
                alert('Field must not be empty!')
                return;
            }else{
                this.goals.push(this.inputValue)
                this.inputValue = ''
            }
          
        },

        removeGoal(index){
            this.goals.splice(index, 1)
        }
    }
}).mount('#app')