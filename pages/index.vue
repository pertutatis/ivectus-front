<template>
  <section class="login">
    <login-popup class="login--container" />
  </section>
</template>

<script>
export default {
  components: {
    loginPopup: () => import('~/components/login-popup.vue')
  }
}
</script>

<style lang="postcss">
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.login--container {
  display: flex;
  flex-wrap: wrap;
  max-width: 550px;
  padding: 20px;
  margin: 30px;
  color: #324c5b;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(48, 82, 120, 0.16);
  border-radius: 5px;
}
</style>
