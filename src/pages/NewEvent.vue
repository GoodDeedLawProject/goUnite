<template>
  <div class="top">
    <h1>New Event</h1>
    <div class="new-event-steps">
      <div class="step step-0">
        <h2 class="title">Event Information</h2>
        <text-field name="Name" ref="comp" v-model="name"></text-field>
        <text-field name="Organizer" v-model="organizer"></text-field>
        <text-field name="Location" v-model="location"></text-field>
        <text-field name="Address" v-model="address"></text-field>
        <text-field name="City" v-model="city"></text-field>
        <div class="btn" @click="setMill()">Here</div>
        <div class="btn" @click="tryAgain()">Thisone</div>
        <!-- <select-field name="State" :options="stateList" v-model="stateCode"></select-field> -->
        <!-- <label for="name">Name</label>
        <input type="text" id="name" v-model="name"> -->
        <!-- <label for="location">Location</label>
        <input type="text" id="location" v-model="location">
        <label for="address">Street Address</label>
        <input type="text" id="address" v-model="address">
        <label for="city">City</label>
        <input type="text" id="city" v-model="city">
        <label for="stateCode">State</label>
        <select id="stateCode" v-model="stateCode">
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import TextField from '@/components/inputs/TextFieldRound'
import SelectField from '@/components/inputs/SelectField'

export default {
  data: () => ({
    name: null,
    organizer: null,
    location: null,
    address: null,
    city: null,
    stateCode: null,
    stateList: [
      "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
  }),
  computed: mapState(["step"]),
  methods: {
    setMill() {
      // eslint-disable-next-line
      console.log('There')
      this.name = "Millville"
    },
    tryAgain() {
      this.$refs.comp.retry()
    },
    ...mapMutations(["mergeEventData", "incStep", "decStep"])
  },
  components: {
    TextField,
    SelectField
  }
};
</script>

<style lang="scss" scoped>
.top {
  margin-left: 10px;
}

.step {
  width: 600px;
  margin-left: 10px;
}

.btn {
  margin: 5px;
  background: gray;
  border: 1px solid black;
}
</style>

