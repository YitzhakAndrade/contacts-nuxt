<template>
  <div>
    <md-button class="md-raised" :to="('/contacts/')">Back</md-button>
    <md-button class="md-raised" v-on:click="addPhone()">Add Phone</md-button>
    <md-button class="md-raised" v-on:click="addEmail()">Add E-mail</md-button>
    <md-button class="md-raised md-accent" 
      v-if="contact.mongoId"
      v-on:click="deleteContact(contact.mongoId)">Delete Contact</md-button>

    <div v-if="contact">
      <md-field class="md-layout-item md-size-40 md-small-size-100">
        <md-icon>account_circle</md-icon>
        <label>Name</label>
        <md-input v-model="contact.name"></md-input>
      </md-field>
      <div v-for="(phone, index) in contact.phones" :key="'phone'+index" class="md-layout">
        <md-field class="md-layout-item md-size-40 md-small-size-100">
          <md-icon>description</md-icon>
          <label>Label</label>
          <md-input v-model="phone.label"></md-input>
        </md-field>

        <md-field class="md-layout-item md-size-40 md-small-size-100">
          <md-icon>call</md-icon>
          <label>Phone</label>
          <md-input v-model="phone.value"></md-input>      
        </md-field>

        <md-button class="md-raised md-accent md-layout-item" 
          v-on:click="contact.phones.splice(index, 1)">Remove</md-button>
      </div>

      <div v-for="(email, index) in contact.emails" :key="'email'+index" class="md-layout">
        <md-field class="md-layout-item md-size-40 md-small-size-100">
          <md-icon>description</md-icon>
          <label>Label</label>
          <md-input v-model="email.label"></md-input>
        </md-field>

        <md-field class="md-layout-item md-size-40 md-small-size-100">
          <md-icon>alternate_email</md-icon>
          <label>E-Mail</label>
          <md-input v-model="email.value"></md-input>      
        </md-field>

        <md-button class="md-raised md-accent md-layout-item" 
          v-on:click="contact.emails.splice(index, 1)">Remove</md-button>
      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: ['datacontact'],
  data() {
    return {
      contact: this.datacontact
    }
  },
  methods: {
    addPhone() {
      this.contact.phones.push({})
    },
    addEmail() {
      this.contact.emails.push({})
    },
    deleteContact(mongoId) {
        if (!mongoId) return
        var url = `https://contacts-dot-net-core.azurewebsites.net/api/contacts/${mongoId}`
        axios.delete(url)
    }
  }
};
</script>