<template>
  <EstudianteVue/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EstudianteVue from '@/modules/estudiante/pages/Estudiante.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    EstudianteVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
