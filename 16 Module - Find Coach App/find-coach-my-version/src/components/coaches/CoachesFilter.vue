<template>
  <div class="form-group">
    <div class="form-control">
      <input type="checkbox" id="frontend" checked value="frontend" @change="changeFilter($event)"/>
      <label for="frontend">Frontend</label>
    </div>

    <div class="form-control">
      <input type="checkbox" id="backend" checked value="backend"  @change="changeFilter($event)"/>
      <label for="backend">Backend</label>
    </div>

    <div class="form-control">
      <input type="checkbox" id="career" checked value="career"  @change="changeFilter($event)"/>
      <label for="career">Career</label>
    </div>
  </div>
</template>

<script>
export default {
    emits:['updatedFilter'],

    data(){
        return{
            filter:{
                frontend: true,
                backend: true,
                career: true
            }
        }
    },

    methods:{
        changeFilter(){
            const checkboxValue = event.target.defaultValue
            const isChecked = event.target.checked

            const updatedFilter = {
                ...this.filter,
                [checkboxValue]: isChecked
            }

            this.filter = updatedFilter

            this.$emit('updatedFilter', this.filter)
        }
    }
};
</script>

<style scoped>
    .form-group{
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    .form-control{
        text-align: center;
    }

    .form-control label{
        margin-left: 10px;
        font-weight: 600;
    }

</style>
