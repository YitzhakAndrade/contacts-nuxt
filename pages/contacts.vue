<template>
  <div>
      <div>
        <md-button class="md-raised" :to="('/contact-details/')">New Contact</md-button>
      </div>

      <md-card md-with-hover 
        v-for="(contact, index) in contacts" :key="index" 
        :to="('/contact-details/'+contact.mongoId)"
        >

        <md-card-header>
          <div class="md-title">{{ contact.name }}</div>
        </md-card-header>

        <!-- <md-card-content>
        </md-card-content> -->

        <md-card-actions>
          <md-button :to="('/contact-details/'+contact.mongoId)">Details</md-button>
        </md-card-actions>
      </md-card>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, error }) {
    try {
      var { data } = await axios.get('https://contacts-dot-net-core.azurewebsites.net/api/contacts/')
      return { contacts: data }
    } catch (e) {
      // error({ message: "Contact not found", statusCode: 404 })
    }
  }
}
</script>

<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

