import Vue from 'vue'
import Router from 'vue-router'
import EventsList from '@/pages/EventsList'
import EventDetails from '@/pages/EventDetails'
import User from '@/pages/User'
import UserProfile from '@/components/user/Profile'
import UserActivity from '@/components/user/Activity'
import Settings from '@/pages/Settings'
import Counter from '@/components/Counter'
import NewEvent from '@/pages/NewEvent'
import Landing from '@/pages/Landing'

Vue.use(Router)

function historySupported(){
  return (window.history && window.history.pushState)
}

export default new Router({
  mode: (historySupported()) ? 'history' : 'hash',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/events',
      name: 'EventsList',
      component: EventsList
    },
    {
      path: '/event/:eventId',
      alias: '/e/:eventId',
      name: 'EventDetails',
      component: EventDetails,
      props: true
    },
    {
      path: '/newevent',
      name: 'NewEvent',
      component: NewEvent
    },
    {
      path: '/user/:username',
      component: User,
      props: true,
      children: [
        {
          path: '',
          name: 'Profile',
          props: true,
          component: UserProfile
        },
        {
          path: 'activity',
          name: 'Activity',
          props: true,
          component: UserActivity
        }
      ]
    },
    {
      path: '/account',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
