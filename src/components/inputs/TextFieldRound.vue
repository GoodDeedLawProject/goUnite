<template>
  <div class="text-field" :class="classObject">
    <label :for="this._uid+'in'">{{ name }}</label>
    <input :id="this._uid+'in'" type="text" ref="input" @blur="blur()" @focus="focus()" @input="updateVal()">
    <span class="helper">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data: () => ({
    errorMsg: 'Required',
    classObject: {
      'focused': false,
      'helpShowing': false
    }
  }),
  methods: {
    changeHelp(val){
      this.classObject.helpShowing = (val !== undefined) ? val : !(this.classObject.helpShowing)
    },
    blur() {
      this.classObject.focused = false
    },
    focus() {
      this.classObject.focused = true
    },
    updateVal() {
      this.classObject['filled'] = this.$refs.input.value != ''
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
  transition: 0.1s ease all;
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
  transition: all ease 0.2s;
  color: inherit;
}

.text-field.focused label, .text-field.filled label {
  font-size: 9pt;
  top: 4px;
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
