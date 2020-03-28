<template>
    <v-container>
        <v-card>
            <v-card-text>
                <form @submit.prevent="onSubmit" id="artist-form">
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">
                            <v-text-field
                                outlined
                                dense
                                v-model="name"
                                type="text"
                                id="name"
                                placeholder="Artist Name"
                                @blur="$v.name.touch()"
                            >
                            </v-text-field>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" md="6" class="ml-auto mr-auto pa-0">

                        </v-col>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { required, url, minLength } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            name: '',
            imageUrl: '',
            gigs: []
        }
    },
    validations: {
        name: {
            required,
            minLen: minLength(2)
        },
        imageUrl: {
            required,
            url,
        }
    }
}
</script>