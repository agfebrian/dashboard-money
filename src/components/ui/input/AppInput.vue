<template>
  <input
    type="text"
    :class="`${sizing} rounded-md border-2 border-slate-400 outline-none focus:border-primary`"
  />
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
