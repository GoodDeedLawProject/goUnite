const STORAGE_KEY = 'go-unite-full-proto'

module.exports = {
  fetchUser () {
    var userData = JSON.parse(localStorage.getItem(STORAGE_KEY.user) || '{}')
    return userData
  },
  saveUser (userInfo) {
    localStorage.setItem(STORAGE_KEY.user, JSON.stringify(userInfo))
  },
  fetchEvent () {
    var eventsData = JSON.parse(localStorage.getItem(STORAGE_KEY.events) || '[]')
    return eventsData
  },
  saveEvent (eventsInfo) {
    localStorage.setItem(STORAGE_KEY.events, JSON.stringify(eventsInfo))
  }
}