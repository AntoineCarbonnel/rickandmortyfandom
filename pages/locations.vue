<template>
  <div id="episode" class="grow-4">
    <Header title="location" @search="passSearch"/>
    <List :search="search" :infoList="info" :accessor="accessor" :data="data"/>
  </div>
</template>

<script>
export default {
  name: "locations",
  data() {
    return {
      search: "",
      info: {
        columnLeft: "Name",
        columnCenter: "Dimension",
        columnRight: "Type"
      },
      accessor:{
        columnLeft: "name",
        columnCenter: "dimension",
        columnRight: "type"
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
      return this.$store.getters.getDataApi('location')
    }
  },
  created(){
    this.$store.dispatch('loadFromApi', {
      type: "location"
    })
  }
}
</script>

<style scoped lang="scss">

</style>
