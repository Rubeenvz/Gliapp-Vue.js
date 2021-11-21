<template>
  <div>
    <div>
      <Breadcrumb title="Administradores de la consola"/>
    </div>
    <div v-if="user.lenght != 0">
      <div class="mt-6 flex justify-between">
        <div class="flex gap-4">
          <div class="flex items-center px-4 rounded-full bg-tertiary gap-4">
            <img src="../assets/icon_search-gray.svg" alt="Search">
            <input class="bg-transparent font-normal text-sm text-primary font-open" type="text" placeholder="Buscar">
          </div>
          <div>
            <button @click="isSaved = false" class="button-secondary bg-tertiary border-tertiary">
              Buscar
            </button>
          </div>
        </div>
        <div class="flex gap-6">
          <button @click="isSaved = false" class="button-secondary">
            Descargar
          </button>
          <router-link to="/crear" class="button-primary">
            Agregar nuevo admin
          </router-link>
        </div>
      </div>
      <div class="mt-6">
        <table class="w-full">
          <tr class="text-left">
            <th><input type="checkbox"></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Administradores</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Área</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Email</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Estatus</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Detalles</p></th>
          </tr>
          <tbody>
            <tr class="text-left" v-for="us in user" :key="us._id">
              <td><input type="checkbox"></td>
              <td>
                <div class="flex gap-4 items-center">
                  <div class="adm-user__img"></div>
                  <router-link class="text-sm text-primary font-open font-semibold" :to="'/administrador/'+us._id+''">
                    {{us.name}} {{us.last_name}}
                  </router-link>
                </div>
              </td>
              <td><p class="text-sm text-primary font-open">{{area[us.area]}}</p></td>
              <td><p class="text-sm text-primary font-open">{{us.email}}</p></td>
              <td><p class="tag text-sm text-primary font-open" :class="us.status" >{{status[us.status]}}</p></td>
              <td>
                <div class="flex items-center gap-4">
                  <router-link :to="'/administrador/'+us._id+'/editar'">
                    <img src="../assets/icon_editar.svg" alt="Editar">
                  </router-link>
                  <button>
                    <img src="../assets/icon_eliminar.svg" alt="Eliminar">
                  </button>
                  <router-link :to="'/administrador/'+us._id+''">
                    <img src="../assets/icon_ver.svg" alt="Ver">
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-6">
        <div class="flex justify-end gap-6">
          <div class="flex gap-6">
            <p class="text-sm text-primary font-roboto">Rows per page :</p>
            <input class="w-max text-sm text-primary font-roboto" type="number" value="5">
          </div>
          <div>
            <button class="px-4">
              <img src="../assets/icon_left.svg" alt="Izquierda">
            </button>
            <button class="px-4">
              <img src="../assets/icon_right.svg" alt="Derecha">
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mb-9 mt-6">
        <h2 class="font-normal text-sm text-primary font-open">No hay administradores. Por favor, <router-link to="/crear" class="underline text-secondary">crea un administrador</router-link>.</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import { area, status } from '@/constants/user'
  import { mapActions,  mapState } from 'vuex'
  import Breadcrumb from "@/components/Breadcrumb.vue";

  export default {
    name: "Administradores",
    components: {
      Breadcrumb
    },
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
    },
    async mounted() {
      await this.getUser({pageSize: 5, pageNum: 1})
    },
  };
</script>


<style>
  th,
  td {
    @apply border-tertiary border-b p-4;
  }

  tbody tr {
    @apply hover:bg-tertiary;
  }

  .tag {
    @apply rounded-t-sm px-2 w-max py-1 text-center;
  }

  .tag.active {
    @apply text-cred bg-credlight;
  }

  .tag.active {
    @apply text-cgreen bg-cgreenlight;
  }
</style>