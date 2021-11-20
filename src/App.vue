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
        <div class="p-6">
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

  .button-primary {
    @apply block text-sm text-white font-normal px-4 py-3 rounded bg-secondary;
  }

  .button-secondary {
    @apply block text-sm  font-normal px-4 py-3 rounded border border-secondary text-primary;
  }

  .general-form__container {
    max-width: 360px;
  }

  .general-form__label {
    transform: translate(-0%, -50%);
    @apply mx-2 px-2 absolute bg-white text-xs text-primary;
  }

  .general-form__input {
    @apply border border-tertiary rounded px-2 py-4 text-xs text-primary w-full;
  }
</style>
