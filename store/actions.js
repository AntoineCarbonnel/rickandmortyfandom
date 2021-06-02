export default {
  loadFromApi({commit, getters}, payload) {
    const type = payload.type
    if (getters.getDataApi(type).length === 0) {
      this.$axios.$get(
              'https://rickandmortyapi.com/api/' + type
      ).then(data => {
        commit('pushDataApi', {type, data})
        nextPage(this, data, commit, type)
      })
    }
  }
}

function nextPage(vm, data, commit, type) {
  if (data.info.next !== null) {
    vm.$axios.$get(
            data.info.next
    ).then(res => {
      commit('addData', {type, res})
      nextPage(vm, res, commit, type)
    })
  }
}
