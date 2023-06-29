<template>
  <div class="relative rounded-md">
    <app-input :size="size" />
  </div>
</template>

<script setup lang="ts">
import AppInput from "./AppInput.vue";

interface Props {
  size: string;
}

withDefaults(defineProps<Props>(), {
  size: "md",
});
</script>
