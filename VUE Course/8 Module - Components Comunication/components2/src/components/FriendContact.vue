<template>
  <li>
    <h2>{{ friend.name }} {{friend.isFavourite ? "(Is Favourite)" : ""}}</h2>
    <button @click="toggleFavouriteStatus">Toggle Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="$emit('id-to-delete', friend.id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
  </li>

  
</template>

<script>
export default {

  props: ['friend'],

  emits: ['toggle-favourite', 'id-to-delete' ],

  data() {
    return {
      detailsAreVisible: false,
    };
  },


  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavouriteStatus(){
      this.$emit('toggle-favourite', this.friend.id)
    },

    deleteFriend(id){
      this.$emit('id-to-delete', id)
    }
  }
};
</script>