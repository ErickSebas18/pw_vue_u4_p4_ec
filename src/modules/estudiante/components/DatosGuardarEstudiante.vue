<template>
  <div class="guardar">
    <div class="clase">
      <h1>Guardar Estudiante</h1>
      <label for="">Cedula</label>
      <input type="text" placeholder="Ingrese la Cédula" v-model="cedula" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <button @click="guardarEstudiante">Insertar</button>
    </div>
  </div>
</template>

<script>
import { ingresarEstudianteFacade } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };
      ingresarEstudianteFacade(data);
    },
  },
};
</script>

<style scoped>
.guardar{
  display: flex;
  justify-content: center;
  align-items: center;
}

.clase {
    display: flex;
    flex-direction: column;
}


</style>