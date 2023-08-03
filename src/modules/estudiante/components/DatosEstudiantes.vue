<template>
  <div class="consultar">
    <div class="estudiante">
      <h1>Consultar Estudiante</h1>
      <div class="boton">
        <input type="text" placeholder="Ingrese la Cédula" v-model="cedula" />
        <button id="boton1" @click="consultarEstudiante">Consultar</button>
      </div>
      <div class="datos">
        <label for="">Nombre</label>
        <input v-model="nombre" type="text" />
         <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      </div>

     
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFacade } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: "",
      apellido: "",
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFacade(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    },
  },
};
</script>

<style scoped>
.consultar {
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  tab-size: 25px;
  
}

.estudiante {
  display: flex;
  flex-direction: column;
  border: 2px solid;
  padding: 15px;
  background: linear-gradient(#EDAF28, #9198e5);
  filter: drop-shadow(5px 10px 5px #9198e5);
}

.boton {
  display: flex;
  justify-content: center;
  gap: 50px;
}

#boton1{
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.datos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 50px;
  gap: 15px;
}
</style>