import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    }
  },
  actions: {
    async getUser({ commit }, data) {
      let url = 'user/?'
      Object.entries(data).forEach(([key, value]) => {
        url += `${key}=${value}`
      });
      try {
        const res = await axios.get(`http://localhost:4800/api/${url}`)
        commit('setUser', res.data.data)
      } catch (error) {
        commit('setUser', {})
        console.log(error)
      }
    },
  },
  modules: {},
});
