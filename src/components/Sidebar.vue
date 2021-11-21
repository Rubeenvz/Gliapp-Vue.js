<template>
  <div class="flex flex-col h-full">
    <div class="main-sidebar__header">
      <div class="p-5 text-center">
        <img class="mx-auto" alt="Logo" src="../assets/logo.png" />
      </div>
      <ul>
        <li>
          <router-link exact class="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_administradores.svg" />
              <span class="font-open font-normal text-sm">Administradores</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/administrador">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_administrador.svg" />
              <span class="font-open font-normal text-sm">Administrador</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block border-b border-tertiary hover:bg-tertiary text-sm text-primary" to="/crear">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_lideres.svg" />
              <span class="font-open font-normal text-sm">Crear Administrador</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block hover:bg-tertiary text-sm text-primary" to="/mas">
            <div class="py-3 ml-12 flex items-center content-center">
              <img class="mr-3" alt="Icon" src="../assets/icon_catalogo.svg" />
              <span class="font-open font-normal text-sm">Más</span>
            </div>
          </router-link>
        </li>
        <li>
          <button @click="toggleMenu()" class="block bg-secondary text-sm text-primary w-full lg:hidden">
            <div class="py-3 flex items-center justify-center content-center text-center">
              <span class="font-open font-normal text-sm text-white">Cerrar</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
    <div class="main-sidebar__footer p-4">
      <div class="mb-4 bg-tertiary rounded p-3">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm text-primary font-open font-normal">¿Necesitas ayuda?</p>
            <a class="underline text-xs text-primary font-open font-normal" href="#">Ir a Sección de ayuda</a>
          </div>
          <div>
            <img alt="External" src="../assets/icon_external.svg" />
          </div>
        </div>
      </div>
      <div class="pt-4 border-t border-tertiary text-center">
        <a class="text-xs text-primary font-open font-normal" href="https://rubeenvz.com/">© Copyright <span class="underline">Rubeenvz</span> 2021</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    methods: {
      toggleMenu() {
        document.querySelector('.main-grid__first').classList.toggle('active')
      }
    }
  };
</script>


<style scoped>
  .main-sidebar__header {
    flex: 1 0 auto;
  }

  .main-sidebar__footer {
    flex-shrink: 0;
  }

  [aria-current],
  .router-link-active {
    @apply bg-tertiary;
  }
</style>
