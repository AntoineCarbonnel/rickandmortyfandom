<template>
  <nav>
    <NuxtLink to="/">
      <img src="/img/rickandmortyheader.png" alt="logo">
    </NuxtLink>
    <NuxtLink v-for="link in links" :key="link.name" :to="'/' + link.route"
              :class="$route.name === link.route ? 'selected' : ''">
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: []
    }
  },
  created() {
    this.links = this.$store.getters.getLinks
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10vw;
  min-height: 100vh;

  > a {
    width: 100%;
    padding: 5vh 1vw;
    transition: .5s;

    &:hover {
      background-color: #FAFAFA;
    }

    &:first-child {
      width: unset;
    }

  }

  a.selected {
    background-color: #FAFAFA;
  }

  img {
    max-width: 8vw;
  }

}

</style>
