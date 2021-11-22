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
        url += `${key}=${value}&`
      });
      try {
        const res = await axios.get(`http://7e11-201-149-21-198.ngrok.io/api/${url}`)
        commit('setUser', res.data.data)
        return res
      } catch (error) {
        commit('setUser', {})
        console.log(error)
      }
    },
    async saveUser({ commit }, data) {
      try {
        const res = await axios.put(`https://7e11-201-149-21-198.ngrok.io/api/user`, data)
        commit('setUser', res.data.data)
        return res
      } catch (error) {
        commit('setUser', {})
        console.log(error)
      }
    },
    async createUser({ commit }, data) {
      try {
        const res = await axios.post(`https://7e11-201-149-21-198.ngrok.io/api/user`, data)
        return res
      } catch (error) {
        commit('setUser', {})
        console.log(error)
      }
    },
    async removeUser({ commit }, data) {
      try {
        const res = await axios.delete(`https://7e11-201-149-21-198.ngrok.io/api/user/?_id=${data._id}`)
        return res
      } catch (error) {
        commit('setUser', {})
        console.log(error)
      }
    }
  },
  modules: {},
});
