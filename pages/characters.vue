<template>
  <div id="header" class="grow-4">
    <Header title="character" @search="passSearch"/>
    <List :search="search" :infoList="info" :accessor="accessor" :data="data"/>
  </div>
</template>

<script>
export default {
  name: "characters",
  data() {
    return {
      search: "",
      info: {
        columnLeft: "Name",
        columnCenter: "Species",
        columnRight: "Gender"
      },
      accessor:{
        columnLeft: "name",
        columnCenter: "species",
        columnRight: "gender"
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
      return this.$store.getters.getDataApi('character')
    }
  },
  created(){
    this.$store.dispatch('loadFromApi', {
      type: "character"
    })
  }
}
</script>

<style scoped>

</style>
