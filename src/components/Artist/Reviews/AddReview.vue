<template>
    <v-dialog width="350px" persistent v-model="reviewsDialog">
        <template v-slot:activator="{on}">
            <v-btn color="success" class="mt-5 elevation-5" slot="activator" v-on="on">Add Review</v-btn>
        </template>
        <v-card class="pa-10" color="#1a1c45">
            <form @submit.prevent="postReview" id="post-review" class="mt-5">
                <h2 class="white--text font-weight-bold mb-10" align="center">Add Live Review</h2>
                <v-textarea
                    dark
                    required
                    full-width
                    v-model="text"
                    name="review"
                    id="review"
                    placeholder="Add Review"
                    cols="45"
                    color="#fb3a64"
                    @blur="$v.text.touch()"
                ></v-textarea>
                <v-text-field
                    dark
                    required
                    text
                    v-model="author"
                    name="author"
                    placeholder="Author"
                    color="#fb3a64"
                    @blur="$v.author.touch()"
                ></v-text-field>
            </form>
            <v-row>
                <v-col cols="5">
                    <v-btn color="error" class="elevation-5" @click="reviewsDialog = false">Cancel</v-btn>
                </v-col>
                <v-col cols="5">
                    <v-btn
                        :disabled="$v.$invalid"
                        color="success"
                        type="submit"
                        class="elevation-4"
                        form="post-review"
                    >Add Review</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>
<script>
//import db from '../../../firebaseInit'
import { minLength } from "vuelidate/lib/validators";
export default {
    props: ["artist"],
    data() {
        return {
            reviewsDialog: false,
            text: "",
            author: "",
            date: new Date().toLocaleString()
        };
    },
    validations: {
        text: {
            minLen: minLength(50)
        },
        author: {
            minLen: minLength(3)
        }
    },
    methods: {
        postReview() {
            (this.reviewsDialog = false),
                this.$store.dispatch("addReview", {
                    id: this.artist.id,
                    text: this.text,
                    author: this.author,
                    date: this.date
                });
            this.text = "";
        }
    }
};
</script>