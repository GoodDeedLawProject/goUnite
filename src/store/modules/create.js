const state = {
  step: 0,
  eventData: {}
}

const mutations = {
  mergeEventData (state, data) {
    state.eventData = Object.assign(state.eventData, data)
    // eslint-disable-next-line
    console.log(state.eventData)
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