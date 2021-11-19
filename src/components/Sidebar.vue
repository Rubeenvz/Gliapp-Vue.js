<template>
  <div class="flex flex-col h-full">
    <div class="main-sidebar__header">
      <div class="p-5 text-center">
        <img class="mx-auto" alt="Logo" src="../assets/logo.png" />
      </div>
      <ul>
        <li>
          <router-link class="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_administradores.svg" />
              <span>Administradores</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/about">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_lideres.svg" />
              <span>Lideres</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main-sidebar__footer p-4">
      <div class="mb-4 bg-tertiary rounded p-3">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm text-primary">¿Necesitas ayuda?</p>
            <a class="underline text-xs text-primary" href="#">Ir a Sección de ayuda</a>
          </div>
          <div>
            <img alt="External" src="../assets/icon_external.svg" />
          </div>
        </div>
      </div>
      <div class="pt-4 border-t border-tertiary text-center">
        <a class="text-xs text-primary" href="https://rubeenvz.com/">© Copyright <span class="underline">Rubeenvz</span> 2021</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  };
</script>


<style scoped>
  .main-sidebar__header {
    flex: 1 0 auto;
  }

  .main-sidebar__footer {
    flex-shrink: 0;
  }

  [aria-current] {
    @apply bg-tertiary;
  }
</style>
