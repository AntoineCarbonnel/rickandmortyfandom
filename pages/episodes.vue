<template>
  <div class="grow-4">
    <Header title="episode" @search="passSearch"/>
    <List />
  </div>
</template>

<script>
export default {
  name: "episodes",
  data() {
    return {
      search: "",
      data: []
    }
  },
  methods: {
    passSearch(search) {
      this.search = search
    }
  },
  computed: {},
  created() {
    this.$store.dispatch('loadFromApi', {
      type: "episode"
    })
    this.data = this.$store.getters.getDataApi('episode')
  }
}
</script>

<style scoped>

</style>
