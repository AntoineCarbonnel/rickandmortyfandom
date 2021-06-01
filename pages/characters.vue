<template>
  <div class="container">
    <div id="header">
      <h1>
        Find All The Characters
      </h1>
      <input v-model="search"  placeholder="Search a specific Character" type="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "characters",
  data(){
    return{
      search: "",
      info: [],
      characters: []
    }
  },
  computed:{

  },
  created(){
    this.$store.dispatch('loadFromApi', {
      type: "character"
    })
    const data = this.$store.getters.getDataApi('character')
    this.info = data.info
    this.characters = data.results
  }
}
</script>

<style scoped>

</style>
