<template>
 <div>Hola Mundo</div>
 <button class="btn green" @click="saludar">Boton <i class="material-icons">save</i></button>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App', 
  mounted(){
    this.axios.get('https://prueba.com');
  },
  methods: {
      saludar(){
          M.toast({html: "Hola Mundo"});
      }
  }
}
</script>
