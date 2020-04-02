<template>
    <v-container>
        <v-row justify="center">
            <v-card width="40%" class="elevation-6">
                <v-img :src="artist.imageUrl"></v-img>
                <v-card-title>{{artist.name}}</v-card-title>
                <v-card-text>{{artist.description}}</v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        artist() {
            return this.$store.getters.loadedArtist(this.id);
        }
    }
};
</script>