<template>
  <div class="page">
    <div class="header">
      <h1>{{ username }}</h1>
      <router-link to="activity">Activity</router-link>
    </div>
    <router-view :user="username"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: ['username']
}
</script>


<style lang="sass" scoped>
// .page
//   margin: 0
//   width: 100%
//   height: 100%
//   padding: 0
.header
  border-bottom: 1px solid #ccc
  margin: 0
</style>
