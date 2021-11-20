<template>
  <div>
    <div>
      <Breadcrumb title="Administrador"/>
    </div>
    <div v-if="id == undefined">
      <div class="mb-9 mt-6">
        <h2 class="font-normal text-sm text-primary font-open">Selecciona un administrador en <router-link to="/" class="underline text-secondary">administradores</router-link>.</h2>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/Breadcrumb.vue";
  
  export default {
    name: "Administrador",
    components: {
      Breadcrumb
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    },
  };
</script>