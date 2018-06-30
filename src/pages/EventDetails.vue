<template>
  <div class="page">
    <h1>{{ event.name }}</h1>
    <p>{{ event.startTime | mmddyyyy('.') }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mmddyyyy, timeHour } from '../filters/dateTime'
export default {
  computed: mapState('events', {
    event (state) {
      return state.all.find(event => event.id === this.eventId)
    }
  }),
  created () {
    if(this.$store.state.events.all.length === 0){
      this.$store.dispatch('events/getAllEvents')
    }
    // eslint-disable-next-line
    // console.log(this.$store)
  },
  filters: {
    mmddyyyy,
    timeHour
  },
  props: ['eventId']
}
</script>

<style lang="scss">
 .page {
   padding: 10px 20px;
 }
</style>
