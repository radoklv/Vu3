<template>
  <LerningSurvey></LerningSurvey>
  <UserExperiences></UserExperiences>
</template>

<script>
import LerningSurvey from './components/survey/LearningSurvey'
import UserExperiences from './components/survey/UserExperiences'

export default {
  components: {
    LerningSurvey,
    UserExperiences
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
