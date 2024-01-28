<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  disableTransition: false,
});
const toggleDark = useToggle(isDark);
const themeText = (isDarkParam: boolean) => {
  return isDarkParam ? "Light" : "Dark";
};
</script>
<template>
  <Button variant="default" @click="toggleDark()">
    Go To {{ themeText(isDark) }}
  </Button>
</template>

<style scoped></style>
