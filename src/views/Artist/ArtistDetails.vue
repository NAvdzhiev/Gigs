<template>
    <v-container>
        <v-row>
            <v-col cols="10" class="mt-10 pt-10 ml-auto mr-auto">
                <v-row justify="center">
                    <v-col cols="8">
                        <v-card class="elevation-7 mb-10" tile>
                            <v-row>
                                <v-col cols="12" md class="pa-0">
                                    <v-img :src="artist.imageUrl" height="350px"></v-img>
                                </v-col>
                                <v-col
                                    style="background: #0c0e38"
                                    cols="12"
                                    md
                                    class="pt-10 pl-5 pr-5"
                                >
                                    <v-cart-text
                                        class="white--text"
                                        style="white-space: break-spaces"
                                    >{{artist.description}}</v-cart-text>
                                    <v-card-actions>
                                        <app-edit-artist
                                            :artist="artist"
                                            v-if="isAuthenticated && isCreator"
                                        ></app-edit-artist>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row class="mb-10">
                    <app-gigs :artist="artist"></app-gigs>
                    <app-add-gigs :artist="artist" v-if="isAuthenticated && isCreator"></app-add-gigs>
                </v-row>
                <v-row justify="center" class="mt-10">
                    <h1 class="white--text mt-10 mb-5">Live Reviews</h1>
                    <app-reviews :artist="artist"></app-reviews>
                    <app-add-review :artist="artist" v-if="isAuthenticated"></app-add-review>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import EditArtist from "./EditArtist";
import AddGigs from "./Gigs/AddGigs";
import Gigs from "./Gigs/Gigs";
import AddReview from "./Reviews/AddReview";
import Reviews from "./Reviews/Reviews";

export default {
    props: ["id"],
    components: {
        "app-add-gigs": AddGigs,
        "app-gigs": Gigs,
        "app-add-review": AddReview,
        "app-reviews": Reviews,
        "app-edit-artist": EditArtist
    },
    computed: {
        artist() {
            return this.$store.getters.loadedArtist(this.id);
        },
        isAuthenticated() {
            return (
                this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
            );
        },
        isCreator() {
            if (!this.isAuthenticated) {
                return false;
            }
            return this.$store.getters.user.id === this.artist.creatorId;
        }
    }
};
</script>