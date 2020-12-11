<template>
  <section class="rating">
    <div class="rating_head">
      <h3>Rating</h3>
    </div>
    <div class="rating_action">
      <ul>
        <li :class="{active: modelValue == 'poor'}">
            <button type="button" @click="activate('poor')" >Poor</button>
        </li>
        <li :class="{active: modelValue == 'average'}">
            <button type="button" @click="activate('average')">Average</button>
        </li>
        <li :class="{active: modelValue == 'great'}">
            <button type="button" @click="activate('great')">Great</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    props:['modelValue'],
    emit:['update:modelValue'],

    methods:{
        activate(option){
            this.$emit('update:modelValue', option)
        }
    }
};
</script>

<style scoped>
.active{
    border-color: rgb(63, 216, 243)
}

.active button{
    background-color:rgb(21, 255, 0);
    color: rgb(18, 105, 0);
}

.rating {
  box-shadow: 0px 0px 5px #000;
  border-radius: 20px;
  padding: 15px;
}

.rating .rating_head {
  text-align: center;
  margin-bottom: 10px;
}
.rating .rating_head h3{
    margin: 0;
}


.rating .rating_action ul {
  list-style: none;
  margin: 0;

  display: flex;
  justify-content: space-evenly;
}
</style>
