<template>
  <div class="eliminar">
    <div class="elim">
      <h1>Eliminar Estudiante</h1>
      <div class="ide">
        <label for="">Id</label>
        <input type="text" placeholder="Ingrese id" v-model="id" />
      </div>
      <button id="eliminarEst" @click="eliminarEstudiante">Eliminar</button>
    </div>
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

<style scoped>
.eliminar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  tab-size: 25px;
}

.elim {
  border: 2px solid;
  width: 25%;
  background: linear-gradient(#47b8b0, #9198e5);
  filter: drop-shadow(5px 10px 5px #9198e5);
  padding: 20px;
}

.ide {
  display: grid;
  padding: 20px;
  gap: 10px;
}

#eliminarEst {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>