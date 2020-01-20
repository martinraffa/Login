<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <form name="formulario" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="firstName">Primer Nombre</label>
                <input
                  type="text"
                  v-model="user.firstName"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
                />
                <div
                  v-if="submitted && !$v.user.firstName.required"
                  class="invalid-feedback"
                >Primer Nombre es requerido</div>
              </div>
              <div class="form-group">
                <label for="lastName">Apellido</label>
                <input
                  type="text"
                  v-model="user.lastName"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
                />
                <div
                  v-if="submitted && !$v.user.lastName.required"
                  class="invalid-feedback"
                >Apellido es requerido</div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  id="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                  <span v-if="!$v.user.email.required">Email is required</span>
                  <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
              </div>
                <div class="form-group">
                <label for="avatar">Avatar</label>
                <input
                  type="avaar"
                  v-model="user.avatar"
                  id="avatar"
                  name="avatar"
                  class="form-control"
                />
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                  <span v-if="!$v.user.password.required">Password is required</span>
                  <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  v-model="user.password"
                  id="password"
                  name="password"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                />
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                  <span v-if="!$v.user.password.required">La contraseña es requerida</span>
                  <span v-if="!$v.user.password.minLength">La contraseña tiene que ser de 6 caracteres</span>
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Repetir Contraseña</label>
                <input
                  type="password"
                  v-model="user.confirmPassword"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
                />
                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                  <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                  <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary">Registrar</button>
              </div>
              <div class="form-group">
                <v-btn v-on:click="resetForm">Reiniciar</v-btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        avatar:"",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },
  mounted() {
    this.$emit('user',this.user);
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    
    resetForm: function(i) {
      i.preventDefault();
      this.$data.user.email = "";
      this.$data.user.firstName = "";
      this.$data.user.lastName = "";
      this.$data.user.avatar = "";
      this.$data.user.password = "";
      this.$data.user.confirmPassword = "";
    },
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }
};
</script>

<style lang="less" scoped>
</style>