<template>
  <div class="actualizar">
    <h1>Actualizar Estudiante</h1>
    <label for="">Id</label>
    <input type="text" placeholder="Ingrese id" v-model="id" />
    <label for="">Cedula</label>
    <input type="text" placeholder="Ingrese la Cédula" v-model="cedula" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <button @click="actualizarEstudiante">Insertar</button>
  </div>
</template>

<script>
import { actualizarEstudianteFacade } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };
      actualizarEstudianteFacade(this.id,data);
    },
  },
};
</script>

<style scoped>
</style>