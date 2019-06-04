<template>
  <form v-show="!user" @submit.prevent="sendLogin">
    <h1>Acceder a Ivectus</h1>
    <p class="login--text">
      Necesitamos tus datos para crear tus futuras recetas.
    </p>

    <text-input v-model="name">Nombre</text-input>
    <text-input v-model="surname">Apellido</text-input>
    <text-input v-model="collegeNumber">Número de colegiado</text-input>
    <text-input v-model="collegeProvince">Provincia de colegiación</text-input>
    <text-input v-model="address">Dirección de la clínica</text-input>
    <text-input v-model="city">Localidad de la clínica</text-input>

    <input type="submit" value="Acceder" />
  </form>
</template>

<script>
export default {
  components: {
    textInput: () => import('~/components/ui/input-text.vue')
  },

  data() {
    return {
      name: '',
      surname: '',
      address: '',
      city: '',
      collegeNumber: '',
      collegeProvince: ''
    }
  },

  computed: {
    user() {
      return this.$store.state.user.user
    }
  },

  methods: {
    sendLogin() {
      this.$store.dispatch('user/loginUser', {
        name: this.name,
        surname: this.surname,
        address: this.address,
        city: this.city,
        collegeNumber: this.collegeNumber,
        collegeProvince: this.collegeProvince
      })

      this.$router.push('dashboard')
    }
  }
}
</script>

<style lang="postcss">
h1 {
  flex: 0 0 100%;
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: bold;
  color: var(--title-color);
  text-align: center;
}

.login--text {
  flex: 0 0 100%;
  padding: 0 80px;
  margin-bottom: 30px;
  text-align: center;
}

input[type='submit'] {
  width: auto;
  border: none;
  padding: 15px 50px;
  margin: 0 auto;
  font-weight: var(--medium);
  color: var(--title-color);
  background-color: var(--main-color);
  border-radius: 4px;
}
</style>
