export default {
  getLinks(state) {
    return state.links
  },
  getDataApi: (state) => (type) => {
    return state[type]
  }
}
