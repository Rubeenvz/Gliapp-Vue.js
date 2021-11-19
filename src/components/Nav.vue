<template>
  <div class="flex justify-end w-full py-5 px-16 bg-secondary">
    <div class="flex items-center">
      <div class="flex items-center">
        <input class="mr-4 bg-secondary text-primary" type="text">
        <img src="../assets/icon_search.svg" alt="Logout">
      </div>
      <div class="border-r border-white mx-9 h-full"></div>
      <div class="flex items-center mr-7">
        <div class="main-nav__user bg-white rounded-full mr-2"></div>
        <div>
          <p class="text-white text-sm">Rubeenvz</p>
          <p class="text-white text-sm">Recursos Humanos</p>
        </div>
      </div>
      <div>
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
