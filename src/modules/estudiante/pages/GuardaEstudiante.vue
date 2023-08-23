<template>
  <DatosGuardarEstudiante/>
</template>

<script>
import DatosGuardarEstudiante from "@/modules/estudiante/components/DatosGuardarEstudiante.vue"

export default {
  components: {
    DatosGuardarEstudiante,
  },

  mounted(){
    const {cedula} = this.$route.params;
    console.log(cedula);
  }
};
</script>

<style scoped>
</style>