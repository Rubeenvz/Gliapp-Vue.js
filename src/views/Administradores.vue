<template>
  <div>
    <div>
      <Breadcrumb title="Administradores de la consola"/>
    </div>
    <div v-if="totalResults != 0">
      <div class="mt-6 flex justify-between flex-col-reverse lg:flex-row">
        <div class="flex gap-4 mt-6 lg:mt-0">
          <div class="flex items-center px-4 rounded-full bg-tertiary gap-4">
            <img src="../assets/icon_search-gray.svg" alt="Search">
            <input v-model="search" class="bg-transparent font-normal text-sm text-primary font-open" type="text" placeholder="Buscar">
          </div>
          <div>
            <button @click="getData()" class="button-secondary bg-tertiary border-tertiary">
              Buscar
            </button>
          </div>
        </div>
        <div class="flex gap-6 flex-col lg:flex-row">
          <button class="button-secondary">
            Descargar
          </button>
          <router-link to="/crear" class="button-primary">
            Agregar nuevo admin
          </router-link>
        </div>
      </div>
      <div class="mt-6 overflow-scroll">
        <table class="w-full">
          <tr class="text-left">
            <th class="hidden lg:table-cell"><input type="checkbox"></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Administradores</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Área</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Email</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Estatus</p></th>
            <th><p class="text-sm text-primary font-montserrat font-semibold">Detalles</p></th>
          </tr>
          <tbody>
            <tr class="text-left" v-for="us in user" :key="us._id">
              <td class="hidden lg:table-cell"><input type="checkbox"></td>
              <td>
                <div class="flex gap-4 items-center">
                  <div class="adm-user__img hidden lg:block"></div>
                  <router-link class="text-sm text-primary font-open font-semibold" :to="'/administrador/'+us._id+''">
                    {{us.name}} {{us.last_name}}
                  </router-link>
                </div>
              </td>
              <td><p class="text-sm text-primary font-open">{{area[us.area]}}</p></td>
              <td><p class="text-sm text-primary font-open">{{us.email}}</p></td>
              <td><p class="tag text-sm text-primary font-open" :class="us.status" >{{status[us.status]}}</p></td>
              <td>
                <div class="flex items-center gap-4 flex-col lg:flex-row">
                  <router-link :to="'/administrador/'+us._id+'/editar'">
                    <img src="../assets/icon_editar.svg" alt="Editar">
                  </router-link>
                  <button @click="remove(us._id)">
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
        <div class="flex justify-end gap-6 flex-col-reverse lg:flex-row">
          <div class="flex gap-6 flex-col lg:flex-row text-center">
            <p class="text-sm text-primary font-roboto">Rows per page :</p>
            <input class="w-full lg:w-max text-sm text-primary font-roboto text-center" v-model="pageSize" type="number" value="5">
          </div>
          <div class="flex justify-center lg:block gap-6">
            <button @click="left()" class="py-4 px-4 lg:py-0 lg:px-4">
              <img src="../assets/icon_left.svg" alt="Izquierda">
            </button>
            <button @click="right()" class="py-4 px-4 lg:py-0 lg:px-4">
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
        status,
        pageSize: 5,
        pageNum: 1,
        totalResults: 10,
        search: ''
      }
    },
    methods: {
      ...mapActions(['getUser', 'removeUser']),
      async getData() {
        let data = {
          pageSize: this.pageSize,
          pageNum: this.pageNum
        }
        if(this.search != '') {
          data.search = this.search
        }
        else {
          delete data.search
        }
        let res = await this.getUser(data)
        this.totalResults = res.data.total
      },
      async remove(_id) {
        const response = await this.removeUser({_id})
        if(response && response.data.status == 200) {
          /* eslint-disable */
          new Toast({
            message: 'Administrador eliminado',
            type: 'success'
          });
          setTimeout(() => {
            let elem = document.querySelector('.toastjs-container')
            elem.parentNode.removeChild(elem);
          }, 5000);
          this.getData()
          /* eslint-enable */
        }
      },
      left() {
        if(this.pageNum == 1) {
          return
        }
        this.pageNum--
      },
      right() {
        if(this.pageNum + 1 > Math.ceil(this.totalResults/this.pageSize)) {
          return
        }
        this.pageNum++
      }
    },
    computed: {
      ...mapState(['user']),
    },
    watch: {
      async pageSize() {
        this.getData()
      },
      async pageNum() {
        this.getData()
      }
    },
    async mounted() {
      this.getData()
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
    @apply uppercase rounded-t-sm px-2 w-max py-1 text-center;
  }

  .tag.inactive {
    @apply text-cred bg-credlight;
  }

  .tag.active {
    @apply text-cgreen bg-cgreenlight;
  }
</style>