<template>
  <section>
    <BaseCard>
    <BaseButton @click="fetchData">Refresh Data</BaseButton>
      <h2>Submitted Experiences</h2>
      <div v-if="isLoading" class="lds-ring"><div></div></div>
      <p v-else-if="!isLoading && errorMessage">{{errorMessage}}</p>
      <p v-else-if="!isLoading && (!result || result.length === 0)">There is no stored experienced. Please add some record first!</p>
      <ul v-else-if="!isLoading && result && result.length > 0">
        <SurveyResult
          v-for="res in result"
          :key="res.id"
          :res="res"
        ></SurveyResult>
      </ul>
    </BaseCard>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult";

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      result: [],
      isLoading: false,
      errorMessage: null
    };
  },

  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.fetchData();
    }, 2000);
  },

  methods: {
    fetchData() {
     
      fetch("https://vu3-backend.firebaseio.com/surveys.json")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          this.errorMessage = null
          this.result = []
          for (const id in data) {
            this.result.push({
              id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
        }).catch(err =>{
            this.isLoading = false
            this.errorMessage = err.message
        });
    },
  },
};
</script>

<style scoped>
section {
    text-align: center;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
margin: 0 auto;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
