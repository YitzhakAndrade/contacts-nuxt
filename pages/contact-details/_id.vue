<template>
  <section class="container">
    <div>
      <contact-details :datacontact="contact || {}"/>
    </div>
  </section>
</template>

<script>
import ContactDetails from '~/components/ContactDetails.vue';

import axios from 'axios'

export default {
  components: {
    ContactDetails
  },
  data() {
    return { contact: null }
  },
  async asyncData({ params, error }) {
    try {
      if (!params.id) return
      var url = `https://contacts-dot-net-core.azurewebsites.net/api/contacts/${params.id}`
      var { data } = await axios.get(url)
      return { contact: data }
    } catch (e) {
      error({ message: "Contact not found", statusCode: 404 })
    }
  }
}
</script>

