<template>
  <main id='crearEmpresa'>
    <app-navbar></app-navbar>
  <div class="EditarEmpresa">

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>
        <v-card>
          <h2>Edición datos de empresa</h2>
          <v-form v-model="valid">
            <v-text-field
            class="nombre"
              v-model="nombre"
              label="Nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="actividad"
              v-model="actividadComercial"
              label="Actividad Comercial"
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-text-field
            class="razon"
              v-model="razonSocial"
              label="Razon Social"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid"
            @click="submit"
          >
            Editar Empresa
          </v-btn>

        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="3000"
      :multi-line="true"
      :color="color"
      :top="true"
      v-model="snackbar"
    >
      {{mensajeSnackbar}}
    </v-snackbar>
  </div>
</main>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      valid: true,
      nombre: this.$store.getters.empresaSelected.nombre,
      actividadComercial: this.$store.getters.empresaSelected.actividadComercial,
      razonSocial: this.$store.getters.empresaSelected.razonSocial,
      mensajeSnackbar: '',
      color: '',
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Campo Requerido.',
        RUC: (value) => value.length <= 13 || 'Deben ser 13 caracteres'
      }
    }
  },
  methods: {
    submit () {
      let nombre = this.$data.nombre
      let actividadComercial = this.$data.actividadComercial
      let razonSocial = this.$data.razonSocial
      let empresaId = this.$store.getters.empresaSelected.id
      console.log(empresaId)
      this.$store.dispatch('updateEmpresa', { empresaId, nombre, actividadComercial, razonSocial })
        .then((resp) => {
          this.snackbar = true
          this.mensajeSnackbar = 'Empresa editada exitosamente.'
          this.color = 'success'
          this.$store.dispatch('getEmpresas')
            .then((resp) => {
              setTimeout(function () { router.push('empresas') }, 2000)
            })
            .catch((err) => {
              this.color = 'error'
              this.snackbar = true
              this.mensajeSnackbar = err
            })
        })
        .catch((err) => {
          this.color = 'error'
          this.snackbar = true
          this.mensajeSnackbar = err
        })
    },
    logout () {
      this.$store.dispatch('logout')
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageLogo {
  background-color: #1394CE;
  padding: 10px;
  margin-bottom: 30px;
  text-align: left !important;
}
.i2s-name {
  text-align: left !important;
  padding: 20px;
  color: white;
  font-size: 40px;
}
</style>
