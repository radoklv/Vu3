<template>
  <BaseCard>
    <BaseButton @click="selectedTab = 'StoredResource'" :mode="storedResBtnMode"
      >Stored Resource</BaseButton
    >
    <BaseButton @click="selectedTab = 'AddResource'" :mode="addResourceBtnMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>

</template>

<script>
import StoredResource from './StoredResource';
import AddResource from './AddResource';
export default {
  components: {
    StoredResource,
    AddResource
  },

  provide() {
    return {
      storedResourses: this.storedResourses,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },

  data() {
    return {
      selectedTab: 'StoredResource',

      storedResourses: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://google.com'
        }
      ]
    };
  },

  methods: {
    addResource(title, descr, link) {
      const newResource = {
        id: new Date().toISOString,
        title: title,
        description: descr,
        link: link
      };

      this.storedResourses.unshift(newResource);
      this.selectedTab = 'StoredResource'
    },

    deleteResource(id){
     // this.storedResourses = this.storedResourses.filter(res => res.id != id)//Този подход не работи с всучая заради начина по който работи Provide&Inject. За референция виж 10ти модул, 12то видео на Vue 3 курса!
      const resIndex = this.storedResourses.findIndex(res => res.id === id)
      this.storedResourses.splice(resIndex, 1)
    }
  },

  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'StoredResource' ? null : 'flat';
    },

    addResourceBtnMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    }
  }
};
</script>

<style scoped></style>
