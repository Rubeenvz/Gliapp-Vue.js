<template>
  <div class="flex justify-between lg:justify-end w-full py-5 px-6 lg:px-16 bg-secondary">
    <button class="text-white text-sm font-roboto font-medium lg:hidden">
      MENU
    </button>
    <div class="flex items-center">
      <div class="hidden lg:flex items-center">
        <input class="mr-4 bg-secondary text-primary" type="text">
        <img src="../assets/icon_search.svg" alt="Logout">
      </div>
      <div class="hidden lg:flex border-r border-white lg:mx-9 h-full"></div>
      <div class="flex items-center flex-row-reverse lg:flex-row lg:mr-7 gap-2">
        <div class="main-nav__user bg-white rounded-full"></div>
        <div class="text-right lg:text-left">
          <p class="text-white text-sm font-roboto font-medium">Rubeenvz</p>
          <p class="text-white text-sm font-roboto font-medium">Recursos Humanos</p>
        </div>
      </div>
      <div class="hidden lg:flex">
        <img src="../assets/icon_logout.svg" alt="Logout">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav"
  };
</script>

<style scoped>
  .main-nav__user {
    width: 40px;
    height: 40px;
  }
</style>
