<template>
    <v-container class="mt-10 mb-10">
        <v-card class="elevation-7" tile color="#1a1c45">
            <v-card-text>
                <h1 align="center" class="mt-2 mb-5 white--text font-weight-bold">Register</h1>
                <form @submit.prevent="onSubmit" id="register-form">
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
                                @blur="$v.email.$touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.email.email">Please provide a valid email address.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Age"
                                dense
                                number
                                name="age"
                                id="age"
                                v-model="age"
                                color="#fb3a64"
                                @blur="$v.age.$touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.age.minVal">You must be at least 18 years old.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="First Name"
                                dense
                                text
                                name="firstName"
                                id="firstName"
                                v-model="firstName"
                                color="#fb3a64"
                                @blur="$v.firstName.$touch()"
                            ></v-text-field>
                            <p
                                class="white--text"
                                v-if="!$v.firstName.minLen"
                            >Frist Name must be at least 3 charactes long!</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Last Name"
                                dense
                                number
                                name="lastName"
                                id="lastName"
                                v-model="lastName"
                                color="#fb3a64"
                                @blur="$v.lastName.$touch()"
                            ></v-text-field>
                            <p
                                class="white--text"
                                v-if="!$v.lastName.minLen"
                            >Last Name must be at least 3 charactes long!</p>
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
                                @blur="$v.passowrd.touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.password.minLen">Password must be at least 6 characters.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Confirm Password"
                                dense
                                type="password"
                                id="confirmPassword"
                                v-model="confirmPassword"
                                color="#fb3a64"
                                @blur="$v.confirmPassword.touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.confirmPassword.sameAs">Password must match.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                required
                                dark
                                placeholder="Profile Image URL"
                                dense
                                type="text"
                                id="imageUrl"
                                v-model="imageUrl"
                                color="#fb3a64"
                                @blur="$v.imageUrl.touch()"
                            ></v-text-field>
                            <p class="white--text" v-if="!$v.imageUrl.url">Please, enter valid url.</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-select
                                required
                                v-model="country"
                                dark
                                dense
                                :items="items"
                                color="#fb3a64"
                                label="Country"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row class="justify-center">
                        <v-btn
                            required
                            dark
                            :disabled="$v.$invalid"
                            type="submit"
                            form="register-form"
                            class="elevation-6"
                            color="success"
                        >Signup</v-btn>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {
    required,
    email,
    numeric,
    minValue,
    minLength,
    sameAs,
    url
} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            email: "",
            age: null,
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            roles: "",
            imageUrl: "",
            country: "Bulgaria",
            items: [
                "Albania",
                "Andorra",
                "Armenia",
                "Austria",
                "Azerbaijan",
                "Belarus",
                "Belgium",
                "Bosnia and Herzegovina",
                "Bulgaria",
                "Croatia",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Estonia",
                "Finland",
                "France",
                "Georgia",
                "Germany",
                "Greece",
                "Hungary",
                "Iceland",
                "Ireland",
                "Italy",
                "Kazakhstan",
                "Kosovo",
                "Latvia",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Malta",
                "Moldova",
                "Monaco",
                "Montenegro",
                "Netherlands",
                "North Macedonia",
                "Norway",
                "Poland",
                "Portugal",
                "Romania",
                "Russia",
                "San Marino",
                "Serbia",
                "Slovakia",
                "Slovenia",
                "Spain",
                "Sweden",
                "Switzerland",
                "Turkey",
                "Ukraine",
                "UK",
                "USA",
                "Canada",
                "Mexico",
                "Chile",
                "Argentina",
                "Brazil",
                "Colombia",
                "Australia",
                "New Zealand",
                "Japan",
                "South Africa"
            ]
        };
    },
    validations: {
        email: {
            required,
            email
        },
        age: {
            required,
            numeric,
            minVal: minValue(18)
        },
        firstName: {
            required,
            minLen: minLength(3)
        },
        lastName: {
            required,
            minLen: minLength(3)
        },
        password: {
            required,
            minLen: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs("password")
        },
        imageUrl: {
            required,
            url
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                age: this.age,
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
                confirmPassword: this.confirmPassword,
                roles: this.roles,
                imageUrl: this.imageUrl,
                country: this.country
            };
            console.log(formData);
            this.$store.dispatch("register", formData);
        }
    }
};
</script>