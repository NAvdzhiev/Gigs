<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3" v-for="artist in artists" :key="artist.id">
                <v-card elevation="6">
                    <router-link :to="'/artist/' + artist.id">
                        <v-img :src="artist.imageUrl"></v-img>
                    </router-link>
                    <v-card-title>{{ artist.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed: {
        artists() {
            return this.$store.getters.loadedArtists;
        }
    }
};
</script>