<template>
    <v-dialog width="350px" persistent v-model="reviewsDialog">
        <template v-slot:activator="{on}">
            <v-btn class="mt-5 elevation-5" slot="activator" v-on="on">Add Review</v-btn>
        </template>
        <v-card class="pa-10">
            <form @submit.prevent="postReview" id="post-review" class="mt-5">
                <h2>Add Live Review</h2>
                <v-textarea
                    required
                    full-width
                    outlined
                    v-model="text"
                    name="review"
                    id="review"
                    placeholder="Add Review"
                    cols="45"
                    @blur="$v.text.touch()"
                ></v-textarea>
            </form>
            <v-row>
                <v-col cols="5">
                    <v-btn class="elevation-5" @click="reviewsDialog = false">Cancel</v-btn>
                </v-col>
                <v-col cols="5">
                    <v-btn type="submit" class="elevation-4" form="post-review">Add Review</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>
<script>
//import db from '../../../firebaseInit'
import {
    minLength,
} from "vuelidate/lib/validators";
export default {
    props: ["artist"],
    data() {
        return {
            reviewsDialog: false,
            text: "",
            date: new Date().toLocaleString()
        };
    },
    validations: {
        text: {
            minLen: minLength(50)
        }
    },
    methods: {
        postReview() {
            this.reviewsDialog = false,
            this.$store.dispatch('addReview', {
                id: this.artist.id,
                text: this.text,
                date: this.date
            });
            this.text = ""
        }
    }
};
</script>