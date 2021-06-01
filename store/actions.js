export default {
  loadFromApi({commit, getters}, payload) {
    const type = payload.type
    if (getters.getDataApi(type).length === 0){
      this.$axios.$get(
              'https://rickandmortyapi.com/api/' + type
      ).then(data => {
        console.log(data)
        commit('pushDataApi', { type, data})
      })
    }

  }
}
