<template>
    <v-container>
        <v-row>
            <v-col cols="11" class="mt-10 pt-10 ml-auto mr-auto">
                <v-card class="elevation-0" tile>
                    <v-row>
                        <v-col cols="12" md="5" class="pa-0">
                            <v-img :src="artist.imageUrl" height="300px"></v-img>
                        </v-col>
                        <v-col style="background: #1a1c45" cols="12" md="7" class="pt-10 pl-5 pr-5">
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
                <app-gigs :artist="artist"></app-gigs>
                <app-add-gigs :artist="artist" v-if="isAuthenticated && isCreator"></app-add-gigs>
                <v-row justify="center">
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