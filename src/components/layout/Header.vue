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
                <v-btn dark text>Login</v-btn>
            </router-link>
            <router-link v-if="auth" active-class="active" to="/add-artist">
              <v-btn text dark>Add Artist</v-btn>
            </router-link>
            <v-menu v-if="auth">
                <template v-slot:activator="{ on }">
                    <v-btn text dark v-on="on">User Data</v-btn>
                    <!--<v-img dark v-on="on"></v-img>-->
                </template>
                <v-list>
                    <v-list-item>
                        <router-link to="/profile">
                            <v-btn @click="checkRole" text>Profile</v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/whishlist">
                            <v-btn text>Wishlist</v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/my-concerts">
                            <v-btn text>Concerts</v-btn>
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn v-if="auth" dark text @click="onLogout" class="logout">Logout</v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    computed: {
        auth() {
            return this.$store.getters.isAuthenticated;
        },
        
        isAdmin() {
            return this.$store.getters.user.roles;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch("logout");
        },
        checkRole() {
            console.log(this.$store.getters);
              
        }
    }
};
</script>
