<template>
  <div>
    <md-snackbar :md-position="position" 
        :md-duration="isInfinity ? Infinity : duration" 
        :md-active.sync="showSnackbar" md-persistent>
      <span>{{ message }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  prop: ['message', 'showSnackbar'],
  data: () => ({
    message: "teste",
    showSnackbar: false,
    position: "center",
    duration: 500,
    isInfinity: false
  })
};
</script>