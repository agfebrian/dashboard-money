<template>
  <button
    :class="`${sizing} rounded-md bg-primary font-medium text-white transition-all delay-75 hover:bg-blue-800`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useSizing } from "@/composables/globals/useSizing";

interface Props {
  size: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const sizing = useSizing(props.size);
</script>
