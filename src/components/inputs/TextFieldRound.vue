<template>
  <div class="text-field" :class="classObject">
    <label :for="this._uid+'in'">{{ name }}</label>
    <input :id="this._uid+'in'" type="text" ref="input" :value="value" @blur="blur()" @focus="focus()" @input="updateVal()">
    <span class="helper">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'value'],
  data: () => ({
    errorMsg: 'Required',
    isFocused: false,
    isHelpShowing: false
  }),
  computed: {
    classObject() {
      return {
        'focused': this.isFocused,
        'helpShowing': this.isHelpShowing,
        'filled': (this.value != '' && this.value != null)
      }
    }
  },
  methods: {
    changeHelp(val) {
      this.isHelpShowing = (val !== undefined) ? val : !(this.classObject.helpShowing)
    },
    blur() {
      this.isFocused = false
    },
    focus() {
      this.isFocused = true
    },
    updateVal() {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'stylevars';

$helper: 14px;

.text-field{
  position: relative;
  width: calc(100% - 10px);
  // height: calc(30px - #{$helper});
  // height: 54px;
  margin: 10px 0;
  // margin-bottom: 5px;
  // margin: auto;
  color: $inputGray;
  padding: 10px 10px;
  border: 1px solid $inputGray;
  border-radius: 4px;
  transition: all linear 0.1s;
}

.text-field.focused {
  color: black;
  border-color: black;
}

input {
  margin-top: 3px;
  margin-bottom: 3px;
  color: inherit;
  font-family: $bodyFont;
  outline: transparent;
  border: none;
  border-bottom: 1px solid;
  border-color: inherit;
  width: 100%;
  padding: 5px;
  height: calc(100% - #{$helper});
  font-size: 11pt;
}

label {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1;
  transition: all ease 0.1s;
  transition-delay: 0s;
  color: inherit;
}

.text-field.focused label, .text-field.filled label {
  font-size: 9pt;
  // top: 4px;
  transform: translateY(-11px);
}



.helper {
  position: absolute;
  font-size: 8pt;
  bottom: 0;
  left: 5px;
  visibility: hidden;
}

.helpShowing .helper {
  visibility: visible;
}
</style>
