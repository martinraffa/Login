
<template>
<section class="viewer">
    <div class="text">
        <div class="Letra-inicial">Iniciar Sesión</div>
        <div class="letra-secundaria"><p>Ingresa tu Correo Electrónico y Contraseña</p></div>
    </div>
    <div class="gato">
        <div class="caja1">
            <v-text-field
            ref="name"
            class="btn-as"
            v-model="name"
            :rules="[() => !!name || 'Este campo es requerido']"
            :error-messages="errorMessages"
            label="Correo electronico"
            placeholder="Correo electronico"
            required
            outlined
            ></v-text-field>
        </div>
        <div class="caja2">
            <v-text-field
            v-model="password"
            class="btn-as"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            placeholder="Contraseña"
            hint="Al menos 8 caracteres"
            outlined
            @click:append="show1 = !show1"
            ></v-text-field>
        </div>
        <div class="btn-seguir">
            <router-link to="/foo">
            <v-btn to="/account"
            color="#173D7A"
            class="ma-2 white--text"
            :loading="loading2"
            :disabled="loading2"
            @click="loader = 'loading2'"
            depressed
            rounded="true"
            >Siguiente</v-btn>
            </router-link>
        </div>
        <div class="record">
        <v-flex>
            <v-checkbox color="#173D7A" v-model="checkbox" :label="`Recordar Usuario`"></v-checkbox>
        </v-flex>
        </div>
    </div>
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

export default {
data() {
    return {
    show1: false,
    password: "Password",
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
validations: {
    user: {
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
}
};


</script>

<style lang="less" scoped>

.viewer{
    display: grid;
    grid-template-columns: 100%;
    width: 30%;
    padding-top: 140px;
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

.text-foot{
    color:#6E81EC;
}

.gato{
    display: grid;
    grid-template-rows: 40% 40% 10% 10%;
    width: 100%;
}

.btn-as {
    color: #173d7a;
}
    
.ma-2 {
    color: white;
    background: #173d7a;
}

</style>

