<template>
  <div>
    <div class="pt-6 mb-9">
      <div class="mb-6">
        <div class="adm-user__img"></div>
        <div class="mt-4">
          <h2 class="font-open font-semibold text-primary">{{ user.name }} {{ user.last_name }} </h2>
        </div>
      </div>
      <div class="adm-user__grid grid">
        <div>
          <p class="font-normal text-xs uppercase text-primary font-open">Nombre (s)</p>
          <p class="font-semibold text-base text-primary font-open">{{ user.name }}</p>
        </div>
        <div>
          <p class="font-normal text-xs uppercase text-primary font-open">Apellidos</p>
          <p class="font-semibold text-base text-primary font-open">{{ user.last_name }}</p>
        </div>
        <div>
          <p class="font-normal text-xs uppercase text-primary font-open">Correo electrónico</p>
          <p class="font-semibold text-base text-primary font-open">{{ user.email }}</p>
        </div>
        <div>
          <p class="font-normal text-xs uppercase text-primary font-open">Área</p>
          <p class="font-semibold text-base text-primary font-open">{{ area[user.area] }}</p>
        </div>
        <div>
          <p class="font-normal text-xs uppercase text-primary font-open">Estatus</p>
          <p class="font-semibold text-base text-primary font-open">{{ status[user.status] }}</p>
        </div>
      </div>
    </div>
    <div class="pt-4 border-t border-tertiary flex">
      <router-link class="button-primary" :to="'/administrador/'+id+'/editar'">
        Editar administrador
      </router-link>
    </div>
  </div>
</template>

<script>
  import { area, status } from '@/constants/user'
  import { mapActions,  mapState } from 'vuex'

  export default {
    name: "AdministradorVer",
    data() {
      return {
        area,
        status
      }
    },
    methods: {
      ...mapActions(['getUser']),
    },
    computed: {
      ...mapState(['user']),
      id() {
        return this.$route.params.id
      }
    },
    async mounted() {
      await this.getUser({id: this.id})
    },
  };
</script>

<style scoped>
  .adm-user__grid {
    grid-template-columns: auto auto auto;
    row-gap: 26px;
  }
</style>