// const uid = require('shortid')

// uid.seed(100)

const _events = [
  {'id': 'A39ef0j', 'name': 'City Fun Run', 'startTime': new Date('2018-9-29 03:20:00'), 'location': 'Place 1'},
  {'id': '4-rddE4', 'name': 'Art Thing', 'startTime': new Date('2019-10-10 10:20:00'), 'location': 'Place 2'},
  {'id': '5eeA6T4', 'name': 'Fundraiser for Whales Against Tarsyer Violence', 'startTime': new Date('2018-6-9 17:20:00'), 'location': 'Place 3'},
  {'id': 'aT900Rt', 'name': 'Bake Sale for Penguins Against Whales against Penguin Violence', 'startTime': new Date('2018-9-29 15:20:00'), 'location': 'Place 4'},
  {'id': '6_gTT-4', 'name': 'Better Bake Sale for Penguins for Penguin Violence', 'startTime': new Date('2019-5-10 00:20:00'), 'location': 'Place 5'},
  {'id': 'grT67FF', 'name': 'Fundraiser for Bake Sale Funds', 'startTime': new Date('2018-7-20 23:59:00'), 'location': 'Place 6'}
]

export default {
  getEvents (cb) {
    setTimeout(() => {
      cb(_events)
    }, 100)
  },
  createEvents (products, cb, errorCb) {
    setTimeout(() => {
      if (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) cb()
      else errorCb()
    }, 400)
  }
}