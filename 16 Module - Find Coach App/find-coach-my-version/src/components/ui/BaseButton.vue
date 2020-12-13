<template>
  <div v-if="!link" >
      <button  :class="mode">
          <slot></slot>
      </button>
  </div>

  <div v-else>
      <router-link :to="to" :class="mode">
          <slot></slot> 
      </router-link>
  </div>
</template>

<script>
export default {
    props:{
        link:{
            type: Boolean,
            required: false,
            default: false
        },
        to:{
            type:String,
            required: false,
            default: '/'
        },
        mode:{
            type: String,
            required:false,
            default: 'empty'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #53008a;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  font-weight: 600;
}


a:hover,
a:active,
button:hover,
button:focus,
button:active {
  background-color: #270041;
  color: #fff;
  border-color: #270041;
  outline: none;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: 1px solid #3a0061;
}

.outline {
  border-color: #270041;
  color: #fff;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  outline: none;
}
</style>