<template>
  <div class="select-field">
    <!-- <select ref="input" @input="updateVal()">
      <option v-for="opt in this.props.options" :key="opt">opt</option>
    </select> -->
    <ul>
      <li v-for="opt in this.props.options" :key="opt">opt</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: 'String',
      required: true
    },
    options: {
      type: 'Array',
      required: true
    }
  },
  methods: {
    updateVal() {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-field {
  position: relative;
}
</style>

