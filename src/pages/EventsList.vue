<template>
  <div>
    <router-link :to="`/account`">Profile</router-link>
    <h1 class="page-title">Events</h1>
    <ul class="item-list">
      <li class="item-new-event">
        <router-link to="newevent">
          <div class="item-title"><fa-icon icon="plus"></fa-icon> New Event</div>
        </router-link>
      </li>
      <li v-for="event in events" :key="event.id">
        <router-link :to="`event/${event.id}`">
          <div class="item-title">{{ event.name }}</div>
          <div class="item-subtitle">{{ event.startTime | dayDate('.') }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { dayDate } from '../filters/dateTime'

export default {
  computed: mapState({
    events: state => state.events.all
  }),
  filters: {
    dayDate
  }
}
</script>
