<template>
  <div class="nav">
    <router-link class="link" to="/">Consultar Estudiante</router-link>
    <router-link class="link" to="/insertar">Insertar Estudiante</router-link>
    <router-link class="link" to = "/actualizar">Actualizar Estudiante</router-link>
    <router-link class="link" to = "/eliminar">Eliminar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
  display: flexbox;
  justify-content: center;
  margin-bottom: 50px;
}
.link{
  padding: 15px;
  cursor: pointer;
}
a.router-link-exact-active {
  color: green;
}

a {
  color: gray;
}

</style>