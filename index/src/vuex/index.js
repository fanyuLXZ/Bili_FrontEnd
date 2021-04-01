import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import state  from './state'


const createStore = () =>(new Vuex.Store({
    state,
    mutations,
    actions
  }))

export default createStore