<template>
  <div>
    <div class="mb-9">
      <div class="mt-6">
        <p class="font-normal text-sm text-primary font-open">Sube tu fotografía con un peso menos de 2MB</p>
      </div>
      <div class="my-4 adm-user__card border border-tertiary rounded">
        <div class="w-full py-12 bg-primary  rounded"></div>
        <div class="text-center p-4">
          <p class="font-normal text-primary font-open text-xs pb-4">Arrastra tu archivo o</p>
          <button class="px-6 py-3 text-sm font-open text-primary rounded border border-secondary">Selecciona</button>
        </div>
      </div>
      <form class="general-form__container flex flex-col gap-5">
        <div class="general-form__element relative w-full hidden">
          <label class="general-form__label" for="">ID</label>
          <input required class="general-form__input" v-model="form._id" type="text">
        </div>
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
      <router-link class="button-secondary" :to="'/administrador/'+id">
        Cancelar
      </router-link>
      <button @click="saveData()" class="button-primary" :to="'/administrador/'+id">
        Guardar cambios
      </button>
    </div>
  </div>
</template>

<script>
  import { area, status } from '@/constants/user'
  import { mapActions,  mapState } from 'vuex'

  export default {
    name: "AdministradorEditar",
    data() {
      return {
        area,
        status,
        form: {}
      }
    },
    methods: {
      ...mapActions(['getUser', 'saveUser']),
      async saveData() {
        let formData = {...this.form}
        delete formData.__v;
        const response = await this.saveUser(formData)
        console.log(response)
      },
    },
    computed: {
      ...mapState(['user']),
      id() {
        return this.$route.params.id
      }
    },
    async mounted() {
      await this.getUser({id: this.id})
      this.form = {...this.user}
    },
  };
</script>

<style scoped>
  .adm-user__card {
    max-width: 200px;
  }
</style>