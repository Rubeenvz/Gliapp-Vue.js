<template>
  <div>
    <div>
      <router-link class="text-primary text-base font-open font-normal" to="/">Inicio</router-link> <span class="text-secondary text-base font-open font-normal"> > {{routeName}}</span>
    </div>
    <h1 class="font-semibold text-xl font-montserrat text-primary">{{title}}</h1>
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