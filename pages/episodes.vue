<template>
  <div class="container">
    <div id="header">
      <h1>
        Find All The Episodes
      </h1>
      <input v-model="search"  placeholder="Search a specific Episode" type="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "episodes",
  data(){
    return{
      search: "",
      info: [],
      episodes: []
    }
  },
  computed:{

  },
  created(){
    this.$store.dispatch('loadFromApi', {
      type: "episode"
    })
    const data = this.$store.getters.getDataApi('episode')
    this.info = data.info
    this.characters = data.results
  }
}
</script>

<style scoped>

</style>
