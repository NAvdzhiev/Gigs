<template>
    <v-card flat tile>
        <v-divider style="background-color: #fb3a64" class="pt-1"></v-divider>
        <v-toolbar color="#1b1d2f">
            <router-link to="/" exact>
                <v-btn color="white" class="subtitle-2 font-weight-black" text large>Logo for Home</v-btn>
            </router-link>
            <v-spacer></v-spacer>
            <router-link v-if="auth" active-class="active" to="/add-artist">
                <v-btn class="subtitle-2 font-weight-black" text dark>Add Artist</v-btn>
            </router-link>
            <router-link active-class="active" to="/artist-list">
                <v-btn text dark class="subtitle-2 font-weight-black">Artists</v-btn>
            </router-link>
            <v-menu v-if="auth">
                <template v-slot:activator="{ on }">
                    <v-avatar v-if="auth">
                        <v-img :src="imageUrl" text dark v-on="on"></v-img>
                    </v-avatar>
                </template>
                <v-list color="#1b1d2f">
                    <v-list-item>
                        <router-link :to="'/profile/' + userId">
                            <v-btn class="subtitle-2 font-weight-black" text dark>Profile</v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link :to="'/whishlist/' + userId">
                            <v-btn class="subtitle-2 font-weight-black" text dark>Wishlist</v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link :to="'/my-concerts/' + userId">
                            <v-btn class="subtitle-2 font-weight-black" text dark>Concerts</v-btn>
                        </router-link>
                    </v-list-item>
                    <v-list-item>
                        <v-btn
                            @click="logout"
                            v-if="auth"
                            text
                            class="subtitle-2 font-weight-black logout"
                            dark
                        >Logout</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
            <router-link v-if="!auth" to="/register" active-class="active">
                <v-btn color="white" class="subtitle-2 font-weight-black" text>Register</v-btn>
            </router-link>
            <router-link v-if="!auth" to="/login" active-class="active">
                <v-btn color="white" text class="subtitle-2 font-weight-black">Login</v-btn>
            </router-link>
        </v-toolbar>
    </v-card>
</template>

<script>
import db from "../../firebaseInit";
export default {
    computed: {
        auth() {
            return (
                this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
            );
        },
        userId() {
            return this.$store.getters.user.id;
        }
    },

    data() {
        return {
            imageUrl: ""
        };
    },

    beforeUpdate() {
        if (this.auth) {
            db.collection("users")
                .doc(this.userId)
                .get()
                .then(doc => {
                    this.imageUrl = doc.data().imageUrl;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
        }
    }
};
</script>
