<template>
  <div>
    <h1>Account Settings</h1>
    <form id="settings-form">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="user.username">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="user.email">
      <label for="address">Address</label>
      <input type="text" name="address" v-model="user.address">
      <input type="button" value="Save Changes" @click="save">
    </form>
  </div>
</template>

<script>
const serialize = require('form-serialize')
const storage = require('@/localstore')

export default {
  name: 'UserSettings',
  data () {
    return {
      user: storage.fetchUser()
    }
  },
  methods: {
    save () {
      var formElem = document.getElementById('settings-form')
      var formData = serialize(formElem, {hash: true})
      storage.saveUser(formData);
    }
  }
}
</script>

