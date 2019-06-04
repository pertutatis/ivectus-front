<template>
  <header class="header">
    <h3 class="header--brand">IVECTUS</h3>
    <span v-if="user" class="header--state">
      Welcome {{ user.name }} | <a href="#" @click.prevent="logout">salir</a>
    </span>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.user
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('user/removeUser')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="postcss">
.header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 34px;
  background-color: var(--light-color);
  box-shadow: var(--small-shadow);
}

.header--brand {
  font-weight: var(--extra-bold);
  font-size: 24px;
  color: var(--title-color);
}

.header--state {
  font-size: 14px;
}
</style>
