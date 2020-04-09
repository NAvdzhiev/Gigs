<template>
    <v-container>
        <v-row>
            <v-col cols="6" class="mt-5">
                <h1>Upcoming Gigs:</h1>
                <app-gigs :artist="artist"></app-gigs>
                <app-add-gigs :artist="artist" v-if="isAuthenticated && isCreator"></app-add-gigs>
            </v-col>
            <v-col cols="6">
                <v-row justify="center" class="mt-5">
                    <v-card width="80%" class="elevation-6">
                        <v-img :src="artist.imageUrl"></v-img>
                        <v-card-title>{{artist.name}}</v-card-title>
                        <v-card-text style="white-space: break-spaces;">{{artist.description}}</v-card-text>
                        <app-edit-artist :artist="artist" v-if="isAuthenticated && isCreator"></app-edit-artist>
                    </v-card>
                </v-row>
                <v-row justify="center">
                    <app-reviews :artist="artist"></app-reviews>
                    <app-add-review :artist="artist" v-if="isAuthenticated"></app-add-review>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import EditArtist from './EditArtist'
import AddGigs from './Gigs/AddGigs';
import Gigs from './Gigs/Gigs';
import AddReview from './Reviews/AddReview';
import Reviews from './Reviews/Reviews';

export default {
    props: ['id'],
    components: {
        'app-add-gigs': AddGigs,
        'app-gigs': Gigs,
        'app-add-review': AddReview,
        'app-reviews': Reviews,
        'app-edit-artist': EditArtist
    },
    computed: {
        artist() {
            return this.$store.getters.loadedArtist(this.id);
        },
        isAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        isCreator() {
            if (!this.isAuthenticated) {
                return false
            }
            return this.$store.getters.user.id === this.artist.creatorId
        }
    },
};
</script>