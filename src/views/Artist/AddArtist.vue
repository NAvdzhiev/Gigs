<template>
    <v-container class="mt-10">
        <v-card class="elevation-7">
            <v-card-text>
                <h1 align="center" class="mt-7 mb-10">Add New Artist</h1>
                <form @submit.prevent="onSubmit" id="artist-form">
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                outlined
                                dense
                                v-model="name"
                                type="text"
                                id="name"
                                placeholder="Artist Name"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-textarea
                                required
                                outlined
                                dense
                                v-model="description"
                                id="description"
                                placeholder="Artist Description"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                outlined
                                dense
                                v-model="imageUrl"
                                type="text"
                                id="imageUrl"
                                placeholder="Image URL"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn
                            :disabled="$v.$invalid"
                            type="submit"
                            form="artist-form"
                            class="elevation-6"
                            primary
                        >Add Artist</v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {url, minLength } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            name: "",
            imageUrl: "",
            description: "",
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
                imageUrl: this.imageUrl,
            };
            console.log(formData);
            this.$store.dispatch("addArtist", formData);
        }
    }
};
</script>