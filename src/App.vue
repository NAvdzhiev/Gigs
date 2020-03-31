<template>
    <v-app>
        <app-header></app-header>
        <router-view></router-view>
    </v-app>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
    components: {
        "app-header": Header
    }
};
</script>

