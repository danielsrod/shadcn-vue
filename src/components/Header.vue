<script setup lang="ts">
import { Button } from "@/components/ui/button";
import DarkMode from "./DarkMode.vue";
import SelectFeature from "./SelectFeature.vue";
</script>
<template>
  <main class="h-20 w-screen bg-slate-100 dark:bg-slate-900">
    <header>
      <nav class="flex row justify-between items-center p-6">
        <div>
          <SelectFeature @change-feature="" />
        </div>
        <div>
          <router-link to="/">
            <Button variant="link" class="text-1xl">Home</Button>
          </router-link>
        </div>
        <div>
          <DarkMode />
        </div>
      </nav>
    </header>
  </main>
</template>

<style scoped></style>
