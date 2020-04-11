<template>
    <v-row justify="center">
        <v-col cols="12" class="pa-0">
            <v-parallax src="../assets/slider1.jpg" height="1000">
                <h1 class="display-2 font-weight-bold" align="center">Find your perfect concert</h1>
                <h3 class="headline" align="center">Discover the best live music</h3>
                <router-link to="/artist-list" class="ml-auto mr-auto">
                    <v-btn
                    class="mt-5 mb-10 font-weight-bold"
                    color="#fb3a64"
                    dark
                    width="200px"
                    rounded
                >Find a concert</v-btn>
                </router-link>
            </v-parallax>
        </v-col>
    </v-row>
</template>