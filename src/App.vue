<script setup>
  const user = {
    id: '123',
    name: 'Jewel'
  }
</script>

<template>
  <RouterLink :to="{name:'home'}">Home Page</RouterLink>
  <RouterLink to="/about">|__About Page</RouterLink>
  <RouterLink :to="`/user/${user.name}`">|__User Page</RouterLink>
  <RouterLink to="/todo">|__Todo Page</RouterLink>
  <RouterLink to="/recipe">|__Recipe Page</RouterLink>

  <RouterView/>
</template>

<style scoped>

</style>
