export default {
  pushDataApi(state, {type, data}) {
    state[type] = data
  },
  addData(state, {type, res}){
    res.results.forEach( row => state[type].results.push(row) )
  }
}
