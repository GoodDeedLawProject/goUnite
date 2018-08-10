<template>
  <div class="text-field" :class="classObject">
    <label :for="this._uid+'in'">{{ name }}</label>
    <input :id="this._uid+'in'" :value="value" type="text" ref="input" @blur="blur()" @focus="focus()" @input="updateVal()">
    <span class="helper">{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  props: ['name', 'value'],
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
  height: calc(30px - #{$helper});
  height: 54px;
  margin-bottom: 5px;
  margin: auto;
  color: $textColor;
}

.text-field::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: $helper;
  z-index: 1;
  width: 100%;
  border-top: 2px solid #999;
}

.text-field::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: $helper;
  z-index: 1;
  width: 0;
  border-top: 2px solid $textColor;
  transition: 0.3s all ease;
}

.text-field.focused::after {
  width: 100%;
}

input {
  margin-top: 5px;
  color: $textColor;
  font-family: $bodyFont;
  outline: transparent;
  border: none;
  width: 100%;
  padding: 5px;
  height: calc(100% - #{$helper});
  font-size: 11pt;
}

label {
  position: absolute;
  top: 15px;
  left: 5px;
  z-index: 1;
  transition: all ease 0.2s;
}

.text-field.focused label, .text-field.filled label {
  font-size: 9pt;
  top: 0;
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
