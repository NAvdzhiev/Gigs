<template>
    <v-container class="mt-10">
        <v-card class="elevation-7" tile style="background: #1a1c45">
            <v-card-text>
                <h1 align="center" class="white--text mt-7 mb-10">Add New Artist</h1>
                <form @submit.prevent="onSubmit" id="artist-form">
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                dark
                                required
                                dense
                                v-model="name"
                                type="text"
                                id="name"
                                placeholder="Artist Name"
                                color="#fb3a64"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-textarea
                                dark
                                required
                                dense
                                v-model="description"
                                id="description"
                                placeholder="Artist Description"
                                color="#fb3a64"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                dark
                                required
                                dense
                                v-model="imageUrl"
                                type="text"
                                id="imageUrl"
                                placeholder="Image URL"
                                color="#fb3a64"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn
                            :disabled="$v.$invalid"
                            type="submit"
                            form="artist-form"
                            class="elevation-6"
                            color="success"
                        >Add Artist</v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { url, minLength } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            name: "",
            imageUrl: "",
            description: ""
        };
    },
    validations: {
        name: {
            minLen: minLength(2)
        },
        description: {
            minLen: minLength(50)
        },
        imageUrl: {
            url
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                name: this.name,
                description: this.description,
                imageUrl: this.imageUrl
            };
            console.log(formData);
            this.$store.dispatch("addArtist", formData);
        }
    }
};
</script>