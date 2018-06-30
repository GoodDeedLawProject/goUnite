<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  computed: Vuex.mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>

