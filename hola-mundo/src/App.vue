<template>
    <div class="container card-panel">
        <div class="row">
            <div class="col m4">
                <label>Nombre</label>
                <input type="text" v-model="nombre">
            </div>
             <div class="col m4">
                <label>Apellido</label>
                <input type="text" v-model="apellido">
            </div>
        </div>
    
        <div class="row">
            <div class="col m4">
                <label>Edad</label>
                <input type="number" v-model="edad">
            </div>
            <div class="col m4">
                <label>Estado Civil</label>
                <select v-model="estado_civil">
                    <option value="">Seleccione</option>
                    <option value="C">Casado</option>
                    <option value="S">Soltero</option>
                </select>
            </div>
            <div class="col m4">
                <label>Correo</label>
                <input type="email" v-model="correo">
            </div>
        </div>

        <div class="row">
            <div class="col m4 card-panel">
                <label>Pasatiempos</label>
                <input type="text" v-model="pasatiempo">
                <button type="button" class="btn indigo darken-3">Agregar Pasatiempo<i class="material-icons right">send</i></button>
                <br>
                <ul>
                    <li v-for="pasatiempo in pasatiempos" v-bind:key="pasatiempo">{{pasatiempo.descripcion}}</li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col m4">
                <label><input type="checkbox" v-model="suscribirse"><span> Suscribirse al Boletin de Noticias</span></label>
                <input type="text" v-model="pasatiempo">
            </div>
        </div>

         <div class="row">
            <div class="col">
                <button type="submit" class="btn indigo darken-4">Agregar Usuario<i class="material-icons right">add_circle</i></button>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      nombre: '',
      apellido: '',
      edad: 0,
      estado_civil: '',
      correo: '',
      pasatiempo: '',
      pasatiempos : [],
      select_instances : []
    }
  },
  mounted(){
      var elems = document.querySelectorAll('select');
      this.select_instances = M.FormSelect.init(elems, null);
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
