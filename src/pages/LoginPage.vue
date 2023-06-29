<template>
  <div class="flex h-screen w-full items-center justify-center bg-slate-300">
    <form action="#" autocomplete="off">
      <div class="flex w-[500px] flex-col gap-3 rounded-md bg-white p-4">
        <h2 class="mb-2 text-center text-2xl font-bold">Login</h2>
        <div class="flex flex-col">
          <label for="email" class="mb-1 text-base text-slate-400">
            Email
          </label>
          <app-input id="email" placeholder="Email" />
        </div>
        <div class="flex flex-col">
          <label for="password" class="mb-1 text-base text-slate-400">
            Password
          </label>
          <app-input-password id="password" />
        </div>
        <app-button> Submit </app-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import AppInput from "@/components/ui/input/AppInput.vue";
import AppInputPassword from "@/components/ui/input/AppInputPassword.vue";
import AppButton from "@/components/ui/buttons/AppButton.vue";
</script>
