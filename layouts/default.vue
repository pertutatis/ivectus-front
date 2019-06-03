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
  --main-color: #7ced9e;
  --background-color: #effdf8;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
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
