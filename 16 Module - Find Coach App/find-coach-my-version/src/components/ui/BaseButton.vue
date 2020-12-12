<template>
  <div v-if="!link" class="default" :class="mode">
      <button>
          <slot></slot>
      </button>
  </div>

  <div v-else>
      <router-link :to="to" class="default" :class="mode">
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
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}


a:hover,
a:active,
button:hover,
button:focus,
button:active {
  background-color: #270041;
  border-color: #270041;
  outline: none;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  outline: none
}
</style>