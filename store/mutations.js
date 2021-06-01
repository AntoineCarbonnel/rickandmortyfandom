export default {
  pushDataApi(state, {type, data}) {
    state[type] = data
  }
}
