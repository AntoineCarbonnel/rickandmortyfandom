<template>
  <div id="index">
    <NuxtLink v-for="link in links" :key="link.name" :to="link.route">
      <figure>
        <img :src="link.img" :alt="link.name">
        <figcaption>
          {{ link.name }}
        </figcaption>
      </figure>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "index",
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

<style scoped lang="scss">
#index {
  min-height: 100vh;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    padding: 5px 10px;
    box-shadow: 0 2px 9px 0 rgba(220, 220, 220, 0.75);
    background-color: white;
    border-radius: 15px;
    height: 20vh;
    max-width: 30vw;
    width: 100%;
    margin-bottom: 30px;
  }

  figure {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;

    img {
      border-radius: 15px;
      height: 100%;
    }

    figcaption {
      flex-grow: 4;
      padding-right: 10vw;
      text-align: right;
    }
  }
}
</style>
