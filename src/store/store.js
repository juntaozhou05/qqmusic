import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	userId:0,
	roleId:0,
	loginType:0,
    bulletinId: 0
}

const mutations = {
	INCREMENT: function(state, id) {
	 	state.bulletinId = id;
	 },
}

const actions = {
	 increment: function({ commit }, id){
	 	commit('INCREMENT', id );
	 },
}

const getters = {
	 getBullentinId: function(state) {
	 	return state.bulletinId
	 }
 }

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})