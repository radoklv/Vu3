<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <button @click="setSelectedComponent('active-goals')">Show Active Goals Component</button>
    <button @click="setSelectedComponent('manage-goals')">Show Manage Goals Component</button>
    <button @click="toggleComponents">Toggle Components</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader'
import BadgeList from './components/BadgeList'
import UserInfo from './components/UserInfo'
import ActiveGolas from './components/ActiveGoals'
import ManageGoals from './components/ManageGolas'

export default {
  components: {
    'the-header': TheHeader,
    'badge-list': BadgeList,
    'user-info': UserInfo,
    'manage-goals': ManageGoals,
    'active-goals': ActiveGolas
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },

      selectedComponent:"active-goals"
    };
  },

  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp
    },

    toggleComponents(){
      return this.selectedComponent === 'manage-goals' ? this.selectedComponent = 'active-goals' : this.selectedComponent ='manage-goals'
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>