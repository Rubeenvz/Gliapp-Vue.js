<template>
  <div id="app">
    <div class="main-grid__container min-h-screen lg:grid grid-flow-col">
      <div class="main-grid__first z-50 h-full fixed lg:relative lg:border-r border-tertiary w-full bg-white transition-all ease-in-out duration-300" id="Sidebar">
        <Sidebar />
      </div>
      <div class="main-grid__second h-full w-full">
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
  input {
    @apply focus:outline-none;
  }

  .main-grid__container {
    grid-template-columns: 17.85% 82.15%;
  }

  @media (max-width: 1023.98px) {
    .main-grid__first {
      left: -100%;
    }

    .main-grid__first.active {
      left: 0%;
    }
  }

  .button-primary {
    @apply block font-open text-sm text-white font-normal px-4 py-3 rounded bg-secondary text-center;
  }

  .button-secondary {
    @apply block text-sm font-open font-normal px-4 py-3 rounded border border-secondary text-primary text-center;
  }

  @media (min-width: 1024px) {
    .general-form__container {
      max-width: 360px;
    }
  }

  .general-form__label {
    transform: translate(-0%, -50%);
    @apply mx-2 px-2 absolute font-open bg-white text-xs text-primary;
  }

  .general-form__input {
    @apply border border-tertiary font-open rounded px-2 py-4 text-xs text-primary w-full;
  }

  .toastjs-container {
    @apply rounded;
  }

  .toastjs {
    @apply flex flex-col text-center px-4 py-2 relative;
  }

  .toastjs.success {
    @apply border-secondary;
  }

  .toastjs-btn.toastjs-btn--close {
    transform: translate(-0%, -50%);
    @apply button-primary absolute right-0 top-1/2 m-0 p-0;
  }

  .adm-user__card {
    max-width: 200px;
    @apply mt-4 mb-6 border border-tertiary rounded mx-auto lg:mx-0;
  }

  .adm-user__img {
    width: 40px;
    height: 40px;
    @apply bg-primary rounded-full;
  }

  .approved {
    width: 52px;
    height: 52px;
    @apply bg-secondary flex items-center justify-center rounded-full py-6 mx-auto lg:mx-0;
  }

  select.general-form__input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
</style>
