<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <template v-slot:activator="{on}">
            <v-btn color="error" class="mt-5" slot="activator" v-on="on">Edit</v-btn>
        </template>
        <v-card class="pa-10" color="#1a1c45">
            <h2 align="center" class="mb-10 font-weight-bold white--text">Edit Artist Info</h2>
            <v-card-text>
                <v-row class="mt-5">
                    <form @submit.prevent="editArtist" id="gigs-form">
                        <v-text-field
                            dark
                            required
                            text
                            dense
                            placeholder="Artist Name"
                            v-model="editedName"
                            color="#fb3a64"
                        ></v-text-field>
                        <v-textarea
                            dark
                            required
                            text
                            dense
                            placeholder="Description"
                            v-model="editedDescription"
                            color="#fb3a64"
                        ></v-textarea>
                        <v-text-field
                            dark
                            required
                            text
                            dense
                            placeholder="Image URL"
                            v-model="editedImg"
                            color="#fb3a64"
                        ></v-text-field>
                        <v-row>
                            <v-col cols="5">
                                <v-btn color="error" class="elevation-5" @click="editDialog = false">Cancel</v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-btn
                                    color="success"
                                    class="elevation-5"
                                    light
                                    type="submit"
                                    form="gigs-form"
                                >Edit Artist</v-btn>
                            </v-col>
                        </v-row>
                    </form>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: ["artist"],
    data() {
        return {
            editDialog: false,
            editedName: this.artist.name,
            editedImg: this.artist.imageUrl,
            editedDescription: this.artist.description
        };
    },
    methods: {
        editArtist() {
            this.editDialog = false;
            this.$store.dispatch("updateArtist", {
                id: this.artist.id,
                name: this.editedName,
                description: this.editedDescription,
                imageUrl: this.editedImg
            });
        }
    }
};
</script>