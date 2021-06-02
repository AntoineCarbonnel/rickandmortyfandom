<template>
  <div id="header">
    <div class="container">
      <h1>
        Find All The {{ title }}s
      </h1>
      <input v-model="search"  :placeholder="'Search a specific ' +  title " type="search">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: [
    'title'
  ],
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: function () {
      this.$emit('search', this.search)
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  width: 100%;
  background-color: white;
  height: 10vh;
  .container {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }
}

</style>
