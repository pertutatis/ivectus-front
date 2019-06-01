<template>
  <section class="login">
    <form class="login--container" @submit.prevent="sendLogin">
      <h1>Acceder a Ivectus</h1>
      <h2>Necesitamos tus datos para crear tus futuras recetas</h2>
      <label>
        <span>Nombre</span>
        <input v-model="name" type="text" required />
      </label>

      <label>
        <span>Apellido</span>
        <input v-model="surname" type="text" required />
      </label>

      <label>
        <span>Número de colegiado</span>
        <input v-model="collegeNumber" type="text" required />
      </label>

      <label>
        <span>Provincia de colegiación</span>
        <input v-model="collegeProvince" type="text" required />
      </label>

      <label>
        <span>Dirección de la clínica</span>
        <input v-model="address" type="text" required />
      </label>

      <label>
        <span>Localidad de la clínica</span>
        <input v-model="city" type="text" required />
      </label>

      <input type="submit" value="Acceder" />
    </form>
  </section>
</template>

<script>
import Storage from '../services/localStorage'

const MyStorage = new Storage()

export default {
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

  methods: {
    sendLogin() {
      MyStorage.setItem(
        'user',
        JSON.stringify({
          name: this.name,
          surname: this.surname,
          address: this.address,
          city: this.city,
          collegeNumber: this.collegeNumber,
          collegeProvince: this.collegeProvince
        })
      )
    }
  }
}
</script>

<style>
body {
  background-color: #f4f7fa;
}

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

h1 {
  flex: 0 0 100%;
  margin-bottom: 5px;
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
}

h2 {
  flex: 0 0 100%;
  padding: 0 80px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
}

label {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 0 10px;
  margin-bottom: 20px;
}

span {
  margin-bottom: 3px;
  font-size: 12px;
  color: #7b93a4;
}

input {
  font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
  width: 100%;
  padding: 0 8px;
  background-color: transparent;
  border: 1px solid #e5ebee;
  border-radius: 5px;
  color: #324c5b;
  font-size: 14px;
  outline: none;
  line-height: 36px;
}

input[type='submit'] {
  width: auto;
  border: none;
  padding: 8px 15px;
  margin: 0 auto;
  background-color: #70e270;
  line-height: 1.6;
}
</style>
