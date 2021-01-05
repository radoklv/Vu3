<template>
     <!-- <h2>{{displayCounter}}</h2>  -->
     <h2>{{getCounter}}</h2>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        // displayCounter(){
        //     return this.$store.getters.getCounter 
        // }

        ...mapGetters([ //Това е другият начин за достъпване на Getter
            'getCounter'
        ]),
        
        // ...mapGetters({ // Може също да се мапват имената на Getter-ите по този начин
        //     getCtr: 'getCounter' 
        // })
    }
}
</script>

<style>

</style>