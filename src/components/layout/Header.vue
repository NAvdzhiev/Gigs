<template>
    <v-card flat tile>
        <v-toolbar color="primary">
            <router-link to="/" exact>
                <v-btn color="white" text large>Logo for Home</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link v-if="!auth" to="/register" active-class="active">
                <v-btn color="white" text>Register</v-btn>
            </router-link>
            <router-link v-if="!auth" to="/login" active-class="active">
                <v-btn color="white" text>Login</v-btn>
            </router-link>
            <v-btn v-if="auth" text @click="onLogout" class="logout">Logout</v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
  export default {
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
