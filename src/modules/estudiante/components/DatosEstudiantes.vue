<template>
  <div class="container">
    <input type="text" placeholder="Ingrese la Cédula" v-model="cedula"/>
    <button @click="consultarEstudiante">Consultar</button>
  </div>
</template>

<script>
import { obtenerEstudianteFacade } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async consultarEstudiante() {
       await obtenerEstudianteFacade(this.cedula);
    }
  },
};
</script>

<style scoped>
</style>