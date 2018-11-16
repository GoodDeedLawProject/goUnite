import api from '@/../api/backend'

const state = {
  all: []
}

const getters = {
  getEventById: (state) => (id) => {
    return state.all.find(event => event.id === id)
  }
}

const actions = {
  getAllEvents ({ commit }) {
    api.getEvents(events => {
      commit('setEvents', events)
    })
  }
}

const mutations = {
  setEvents (state, events) {
    state.all = events
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}