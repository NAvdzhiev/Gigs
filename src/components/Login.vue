<template>
    <v-container class="mt-10">
        <v-card class="elevation-7" tile color="#1a1c45">
            <v-card-text>
                <h1 align="center" class="mt-7 mb-10 white--text font-weight-bold">Login</h1>
                <v-form @submit.prevent="onSubmit" id="login-form">
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Email"
                                dense
                                type="email"
                                id="email"
                                v-model="email"
                                color="#fb3a64"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Password"
                                dense
                                type="password"
                                id="password"
                                v-model="password"
                                color="#fb3a64"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-btn color="success" type="submit" form="login-form">Signin</v-btn>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                password: this.password
            };
            console.log(formData);
            this.$store.dispatch("login", {
                email: formData.email,
                password: formData.password
            });
        }
    }
};
</script>
