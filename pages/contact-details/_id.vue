<template>
  <section class="container">
    <div>
      <contact-details :datacontact="contact"/>
    </div>
  </section>
</template>

<script>
import ContactDetails from '~/components/ContactDetails.vue';

export default {
  components: {
    ContactDetails
  },
  async asyncData({ app, params, error }) {
    try {
      if (!params.id) {
        return { contact: { phones: [], emails: [] } }
      }
      var url = `https://contacts-dot-net-core.azurewebsites.net/api/contacts/${params.id}`
      var data = await app.$axios.$get(url)
      return { contact: data }
    } catch (e) {
      error({ message: "Contact not found", statusCode: 404 })
    }
  }
}
</script>

