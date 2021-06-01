<template>
  <div class="container">
    <div id="header">
      <h1>
        Find All The Locations
      </h1>
      <input v-model="search"  placeholder="Search a specific location" type="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "locations",
  data(){
    return{
      search: "",
      info: [],
      locations: []
    }
  },
  computed:{

  },
  created(){
    this.$store.dispatch('loadFromApi', {
      type: "location"
    })
    const data = this.$store.getters.getDataApi('location')
    this.info = data.info
    this.characters = data.results
  }
}
</script>

<style scoped>

</style>
