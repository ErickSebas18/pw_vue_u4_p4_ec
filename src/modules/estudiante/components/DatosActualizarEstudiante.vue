<template>
  <div class="actualizar">
    <div class="act">
      <h1>Actualizar Estudiante</h1>
      <div class="datosAct">
        <label for="">Id</label>
        <input type="text" placeholder="Ingrese id" v-model="id" />
        <label for="">Cedula</label>
        <input type="text" placeholder="Ingrese la Cédula" v-model="cedula" />
        <label for="">Nombre</label>
        <input v-model="nombre" type="text" />
        <label for="">Apellido</label>
        <input v-model="apellido" type="text" />
      </div>
      <button id="btnInsertar" @click="actualizarEstudiante">Insertar</button>
    </div>
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
      actualizarEstudianteFacade(this.id, data);
    },
  },
};
</script>

<style scoped>
.actualizar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  tab-size: 25px;
}
.act {
  border: 2px solid;
  width: 25%;
  background: linear-gradient(#47B8B0, #9198e5);
  filter: drop-shadow(5px 10px 5px #9198e5);
  padding: 20px;
}

.datosAct {
  display: grid;
  padding: 20px;
  gap: 10px;
}

#btnInsertar {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>