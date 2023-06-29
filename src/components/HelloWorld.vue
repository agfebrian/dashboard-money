<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center">{{ msg }}</h1>

    <div class="card flex flex-col items-center gap-3">
      <button
        type="button"
        class="rounded-md border-2 border-primary px-3 py-1 text-primary outline-none hover:bg-primary hover:text-white"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank"
        >Volar</a
      >
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
