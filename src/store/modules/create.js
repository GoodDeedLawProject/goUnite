const state = {
  step: 0,
  eventData: {}
}

const mutations = {
  mergeEventData (state, data) {
    state.eventData = Object.assign(state.eventData, data)
  },
  incStep (state) {
    state.step++
  },
  decStep (state) {
    state.step--
  }
}

export default {
  namespace: true,
  state,
  mutations
}