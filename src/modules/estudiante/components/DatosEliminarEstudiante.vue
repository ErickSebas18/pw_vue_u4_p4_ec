<template>
  <div class="actualizar">
    <h1>Eliminar Estudiante</h1>
    <label for="">Id</label>
    <input type="text" placeholder="Ingrese id" v-model="id" />
    <button @click="eliminarEstudiante">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFacade } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminarEstudiante() {
      eliminarEstudianteFacade(this.id);
    },
  },
};
</script>

<style>
</style>