<template>
  <div>
    <div>
      <Breadcrumb title="Administrador"/>
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
  };
</script>