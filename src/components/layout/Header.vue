<template>
    <v-card flat tile>
        <v-toolbar>
            <router-link to="/" exact>
                <v-btn text large>Logo for Home</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link to="/register" active-class="active">
                <v-btn text>Register</v-btn>
            </router-link>
            <router-link to="/login" active-class="active">
                <v-btn text>Login</v-btn>
            </router-link>
        </v-toolbar>
    </v-card>
</template>