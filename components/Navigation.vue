<template>
  <nav>
    <span>
      <NuxtLink to="/">
        <img src="/img/rickandmortyheader.png" alt="logo">
      </NuxtLink>
    </span>
    <span>
      <NuxtLink to="/characters">Character</NuxtLink>
    </span>
    <span>
      <NuxtLink to="/episodes">Episode</NuxtLink>
    </span>
    <span>
      <NuxtLink to="/locations">Location</NuxtLink>
    </span>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10vw;
  min-height: 100vh;

  > span {
    width: 100%;
    padding: 5vh 2vw;
    transition: .5s;

    &:hover {
      cursor: pointer;
      background-color: #FAFAFA;
    }

    &:first-child{
      width: unset;
    }

  }

  img {
    max-width: 9vw;
  }

}

</style>
