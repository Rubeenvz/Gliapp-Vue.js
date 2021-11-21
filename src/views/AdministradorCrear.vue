<template>
  <div>
    <div>
      <Breadcrumb title="Agregar administrador"/>
    </div>
    <div v-if="!isSaved">
      <div class="mb-9 mt-6">
        <div>
          <p class="font-normal text-sm text-primary font-open">Sube tu fotografía con un peso menos de 2MB</p>
        </div>
        <div class="adm-user__card">
          <div class="w-full py-12 bg-primary  rounded"></div>
          <div class="text-center p-4">
            <p class="font-normal text-primary font-open text-xs pb-4">Arrastra tu archivo o</p>
            <button class="button-secondary mx-auto">Selecciona</button>
          </div>
        </div>
        <form class="general-form__container flex flex-col gap-5">
          <div class="general-form__element relative w-full">
            <label class="general-form__label" for="">Nombre</label>
            <input required class="general-form__input" v-model="form.name" type="text">
          </div>
          <div class="general-form__element relative w-full">
            <label class="general-form__label" for="">Apellido</label>
            <input required class="general-form__input" v-model="form.last_name" type="text">
          </div>
          <div class="general-form__element relative w-full">
            <label class="general-form__label" for="">Correo electrónico</label>
            <input required class="general-form__input" v-model="form.email" type="text">
          </div>
          <div class="general-form__element relative w-full">
            <label class="general-form__label" for="">Area</label>
            <input required class="general-form__input" v-model="form.area" type="text">
          </div>
          <div class="general-form__element relative w-full">
            <label class="general-form__label" for="">Estatus</label>
            <input required class="general-form__input" v-model="form.status" type="text">
          </div>
        </form>
      </div>
      <div class="pt-4 border-t border-tertiary flex gap-6">
        <router-link class="button-secondary" to="/">
          Cancelar
        </router-link>
        <button @click="saveData()" class="button-primary">
          Agregar administrador
        </button>
      </div>
    </div>
    <div v-else>
      <div class="mb-9 mt-6">
        <div class="approved bg-secondary flex items-center justify-center rounded-full py-6">
          <img class="" src="../assets/icon_approved.svg" alt="Approved">
        </div>
        <div class="mt-4">
          <h2 class="font-semibold font-montserrat text-primary text-base">Cambios guardados.</h2>
          <p class="font-open font-normal text-sm">Tu administrador se ha guardado con éxito.</p>
        </div>
      </div>
      <div class="pt-4 border-t border-tertiary flex gap-6">
        <button @click="isSaved = false" class="button-secondary">
          Añadir nuevo
        </button>
        <router-link to="/" class="button-primary">
          Regresar a mis administradores
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/Breadcrumb.vue";
  import { area, status } from '@/constants/user'
  import { mapActions } from 'vuex'

  export default {
    name: "AdministradorCrear",
    components: {
      Breadcrumb
    },
    data() {
      return {
        area,
        status,
        form: {},
        isSaved: false
      }
    },
    methods: {
      ...mapActions(['createUser']),
      async saveData() {
        const response = await this.createUser(this.form)
        if(response && response.data && response.data.status == 200) {
          /* eslint-disable */
          new Toast({
            message: 'Administrador añadido',
            type: 'success'
          });
          setTimeout(() => {
            let elem = document.querySelector('.toastjs-container')
            elem.parentNode.removeChild(elem);
          }, 5000);
          this.isSaved = true
          /* eslint-enable */
        }
      },
    },
  };
</script>

<style>
  .approved {
    width: 52px;
    height: 52px;
  }
</style>