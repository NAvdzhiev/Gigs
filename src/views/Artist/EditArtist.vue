<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <template v-slot:activator="{on}">
            <v-btn class="mt-5" slot="activator" v-on="on">Edit</v-btn>
        </template>
        <v-card class="pa-10">
            <h2 align="center">Add New Gig</h2>
            <v-card-text>
                <v-row class="mt-5">
                    <form @submit.prevent="editArtist" id="gigs-form">
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Artist Name"
                            v-model="editedName"
                        ></v-text-field>
                        <v-textarea
                            required
                            outlined
                            text
                            dense
                            placeholder="Description"
                            v-model="editedDescription"
                        ></v-textarea>
                        <v-text-field
                            required
                            outlined
                            text
                            dense
                            placeholder="Image URL"
                            v-model="editedImg"
                        ></v-text-field>
                        <v-row>
                            <v-col cols="5">
                                <v-btn class="elevation-5" @click="editDialog = false">Cancel</v-btn>
                            </v-col>
                            <v-col cols="5">
                                <v-btn
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
    props:['artist'],
    data() {
        return {
            editDialog: false,
            editedName: this.artist.name,
            editedImg: this.artist.imageUrl,
            editedDescription: this.artist.description
        }
    },
    methods: {
        editArtist() {
            this.editDialog = false
            this.$store.dispatch('updateArtist', {
                id: this.artist.id,
                name: this.editedName,
                description: this.editedDescription,
                imageUrl: this.editedImg
            })
        }
    }
}
</script>