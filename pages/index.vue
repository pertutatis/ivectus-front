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
  padding-top: 60px;
}

.login--container {
  display: flex;
  flex-wrap: wrap;
  max-width: 550px;
  padding: 35px;
  margin: 30px;
  background-color: #fff;
  box-shadow: 0px 1px 20px 1px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
}
</style>
