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
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

.header--brand {
  font-weight: 700;
  color: #565759;
  font-size: 24px;
}

.header--state {
  font-size: 16px;
  color: #565759;
}
</style>
