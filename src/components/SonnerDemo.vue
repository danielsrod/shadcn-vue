<script setup lang="ts">
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";

const executeSonnerDemo = () => {
  return toast("Meeting Scheduled!", {
    description: "Your meeting was scheduled to tomorrow",
    action: {
      label: "X",
      onClick: () => {},
    },
  });
};
</script>
<template>
  <div class="grid place-items-center w-svw mt-16 gap-3">
    <h1 class="text-3xl">Sonner Demo</h1>
    <Button variant="default" @click="executeSonnerDemo"
      >Postpone Meeting</Button
    >
  </div>
</template>

<style lang="scss" scoped></style>
