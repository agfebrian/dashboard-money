<template>
  <div class="relative flex flex-col justify-center rounded-md">
    <app-input
      :id="id"
      :size="size"
      :type="type"
      :placeholder="placeholder"
      class="w-full"
    />
    <font-awesome-icon
      v-if="!showPassword"
      :icon="['fas', 'eye']"
      class="absolute right-2 cursor-pointer text-slate-400"
      @click="toggle"
    />
    <font-awesome-icon
      v-else
      :icon="['fas', 'eye-slash']"
      class="absolute right-2 cursor-pointer text-slate-400"
      @click="toggle"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import AppInput from "./AppInput.vue";

interface Props {
  id?: string;
  size?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  id: "",
  size: "md",
  placeholder: "Password",
});

const showPassword = ref<boolean>(false);
const toggle = () => (showPassword.value = !showPassword.value);

const type = computed(() => (showPassword.value ? "text" : "password"));
</script>
