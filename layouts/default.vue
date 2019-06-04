<template>
  <div>
    <main-header />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    'main-header': () => import('~/components/header.vue')
  }
}
</script>

<style lang="postcss">
:root {
  /* Colors */
  --main-color: #7ced9e;
  --background-color: #effdf8;
  --title-color: #565759;
  --text-color: #96979b;
  --dark-color: #313131;
  --light-color: #ffffff;

  /* Weights */
  --light: 300;
  --regular: 400;
  --medium: 500;
  --semi-bold: 600;
  --bold: 700;
  --extra-bold: 800;
  --black: 900;

  /* Shadows */
  --small-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: var(--medium);
  color: var(--text-color);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: var(--background-color);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
