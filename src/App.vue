<template>
  <app-blank v-if="route.meta.layout === 'blank'">
    <router-view />
  </app-blank>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import AppBlank from "@/components/layouts/AppBlank.vue";

const route = useRoute();
</script>

<style scoped></style>
