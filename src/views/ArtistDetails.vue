<template>
    <v-container>
        <v-row>
            <v-col cols="6">

            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-img :src="artist.imageUrl"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        artist() {
            return this.$store.getters.loadedArtist(this.id)
        }
    }
}
</script>