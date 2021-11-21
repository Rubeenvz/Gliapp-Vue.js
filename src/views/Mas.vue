<template>
  <div>
    <div>
      <Breadcrumb title="Más"/>
    </div>
    <div class="mb-9 mt-6">
      <div class="mt-4">
        <h2 class="font-semibold font-montserrat text-primary text-base">Proyecto realizado por: <a class="text-secondary" href="https://rubeenvz.com/">Rubeenvz</a></h2>
        <p class="font-open font-normal text-sm">¡Gracias!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/Breadcrumb.vue";
  
  export default {
    name: "Mas",
    components: {
      Breadcrumb
    },
  };
</script>
