<template>
  <div>
    <div class="text-base">
      <router-link class="text-primary" to="/">Inicio</router-link> <span class="text-secondary"> > {{routeName}}</span>
    </div>
    <h1 class="font-semibold text-xl">{{title}}</h1>
  </div>
</template>

<script>

  export default {
    props: ['title'],
    computed: {
      routeName() {
        return this.$route.name
      }
    },
  };
</script>