<template>
  <div id="episode" class="grow-4">
    <Header title="episode" @search="passSearch"/>
    <List :search="search" :infoList="info" :accessor="accessor" :data="data"/>
  </div>
</template>

<script>
export default {
  name: "episodes",
  data() {
    return {
      search: "",
      info: {
        columnLeft: "Name",
        columnCenter: "Episode",
        columnRight: "Date de diffusion"
      },
      accessor: {
        columnLeft: "name",
        columnCenter: "episode",
        columnRight: "air_date"
      }
    }
  },
  methods: {
    passSearch(search) {
      this.search = search
    }
  },
  computed: {
    data: function () {
      return this.$store.getters.getDataApi('episode')
    }
  },
  created() {
    this.$store.dispatch('loadFromApi', {
      type: "episode"
    })
  }
}
</script>

<style scoped>
#episode {
  display: flex;
  flex-direction: column;
}
</style>
