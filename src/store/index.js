import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import create from './modules/create'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    events,
    create
  },
  strict: debug
})

// if (module.hot) {
//   module.hot.accept(['./modules/events.js'], () => {
//     const eventsModule = require('./modules/events').default

//     store.hotUpdate({
//       modules: {
//         events: eventsModule
//       }
//     })
//   })
// }

export default store