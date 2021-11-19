<template>
  <div id="app">
    <div class="main-grid__container min-h-screen grid grid-flow-col">
      <div class="main-grid__first h-full border-r border-tertiary" id="Sidebar">
        <Sidebar />
      </div>
      <div class="main-grid__second h-full">
        <div>
          <Nav />
        </div>
        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "@/components/Sidebar.vue";
  import Nav from "@/components/Nav.vue";

  export default {
    components: {
      Sidebar,
      Nav
    },
  };
</script>

<style>
  .main-grid__container {
    grid-template-columns: 17.85% 82.15%;
  }
</style>
