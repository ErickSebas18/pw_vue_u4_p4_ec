<template>
  <div class="guardar">
    <div class="clase">
      <h1>Guardar Estudiante</h1>
      <div class="datosInsertar">
        <label for="">Cedula</label>
        <input type="text" placeholder="Ingrese la Cédula" v-model="cedula" />
        <label for="">Nombre</label>
        <input v-model="nombre" type="text" />
        <label for="">Apellido</label>
        <input v-model="apellido" type="text" />
      </div>

      <button  id ="insertar" @click="guardarEstudiante">Insertar</button>
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
    guardarEstudiante() {
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
.guardar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  tab-size: 25px;
}

.clase{
  border: 2px solid;
  background: linear-gradient(#D5E997, #9198e5);
  filter: drop-shadow(5px 10px 5px #9198e5);
  padding: 20px;
}

.datosInsertar{
  display: grid;
  padding: 20px;
  gap: 10px;
}

#insertar{
  padding: 5px;
  border-radius: 5px;
}

</style>