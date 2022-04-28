const app = {
    data(){
        return {
            usuario: '',
            correo: '',
            clave: '',
            nombre: 'Williamns Robles'
        }
    },
    methods: {
        llamarSaludoDesdeHijo(){
            this.$refs.menuComponent.saludarDesdeHijo(this.nombre);
        }
    }
}

const _app = Vue.createApp(app);