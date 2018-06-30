// import Vue from 'vue'

export function fullDay (date) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return days[date.getDay()]
}

export function shortDay (date) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return days[date.getDay()]
}

export function shortMonth (date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  return months[date.getMonth()]
}

export function mmddyyyy (date, sep) {
  if(!sep) sep = '/'
  return date.getMonth()+sep+date.getDate()+sep+date.getFullYear()
}

export function timeHour (date) {
  let hour = date.toLocaleString('en-US', {hour: 'numeric', hour12: true})
  hour = hour.replace(/(\d+) (AM|PM)/, (m1, m2, m3) => {
    return (m2+m3.toLowerCase())
  })
  return hour
}

export function dayDate (date, sep) {
  var out = fullDay(date)+' '+mmddyyyy(date, sep)
  return out
}