
<template>
<section class="viewer">
    <div class="text">
        <div class="Letra-inicial">Iniciar Sesión</div>
        <div class="letra-secundaria"><p>Ingresa tu Correo Electrónico y Contraseña</p></div>
    </div>
    <form @submit.prevent="login">
        <div class="caja1">
            <v-text-field
            ref="username"
            class="btn-as"
            v-model="username"
            :rules="[() => !!username || 'Este campo es requerido']"
            label="Correo electronico"
            placeholder="Correo electronico"
            outlined
            ></v-text-field>
        </div>
        <div class="caja2">
            <v-text-field
            v-model="password"
            class="btn-as"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            placeholder="Contraseña"
            hint="Al menos 8 caracteres"
            outlined
            @click:append="show1 = !show1"
            ></v-text-field>
        </div>
        <div class="botones">
            <div class="record">
            
                <v-radio color="#2B4E86" v-model="checkbox" label="Recordar Usuario"></v-radio>
            
            </div>
            <div class="btn-seguir">
                <v-btn rounded color="#2B4E86" dark type="submit" class="btn-submit">Siguiente</v-btn>
            </div>
        </div>

    </form>
    <v-footer       
    absolute
    >
    <v-col
        class="text-center"
        cols="12"
    >Copyright 2019 - <span class="text-foot">TestCompany</span>
    </v-col>
    </v-footer>
</section>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from 'axios'
import account from './account.vue'

export default {
    name: 'login',
data() {
    return {
    info: [],
    loading: true,
    errored: false,
    show1: false,
    username: '',
    password: '',
    checkbox: '',
    rules: {
        required: value => !!value || "Requerido.",
        min: v => v.length >= 8 || "Minimo 8 caracteres",
        emailMatch: () => "The email and password you entered don't match",
        checkbox: false
    },
    user: {
        email: "",
        password: "",
        confirmPassword: ""
    },
    submitted: false
    };
},
    methods:{
        async login(){
            await this.$store.dispatch('retriveToken',{
                username: 'eve.holt@reqres.in',
                password: 'cityslicka222',
            })
            .then(response =>{
                this.$router.push('/account')
            })
        }
    },
    validations: {
        user: {
        email: { required, email },
        password: { required, minLength: minLength(8) },
        confirmPassword: { required, sameAsPassword: sameAs("password") }
        },
        
    },
};




</script>

<style lang="less" scoped>

.viewer{
    display: grid;
    grid-template-rows: 35% 35% 30%;
    
    width: 30%;
    padding-top: 14%;
    padding-left: 100px;
}

.Letra-inicial{
    font-weight: 600;
    font-size: 30px;
    color:#2B4E86;
}

.letra-secundaria{
    font-weight: 300;
    padding-bottom: 10px;
}

.botones{
    display: grid;
    grid-template-columns: 80% 80% ;
}

.text-foot{
    color:#6E81EC;
}



.btn-as {
    color: #173d7a;
}
    
.btn-seguir{

}

.ma-2 {
    color: white;
    background: #173d7a;
}

</style>

