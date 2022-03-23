<template>
  <div>
    <Landing />
  </div>
</template>

<script>

import Landing from './pages/Landing/Landing.vue'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
