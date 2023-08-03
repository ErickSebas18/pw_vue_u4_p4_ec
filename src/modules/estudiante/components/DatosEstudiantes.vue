<template>
  <div class="consultar">
    <h1>Consultar Estudiante</h1>
    <input type="text" placeholder="Ingrese la Cédula" v-model="cedula"/>
    <button @click="consultarEstudiante">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
  </div>
</template>

<script>
import { obtenerEstudianteFacade } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: "",
      apellido: ""
    };
  },
  methods: {
    async consultarEstudiante() {
       const data = await obtenerEstudianteFacade(this.cedula);
       this.nombre = data.nombre
       this.apellido = data.apellido
    }
  },
};
</script>

<style scoped>
</style>