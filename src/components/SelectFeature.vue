<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "vue-router";
import { IFeature } from "../interfaces.ts";

const router = useRouter();
const features: IFeature[] = [
  {
    cd_feature: "sonner",
    ds_feature: "Sonner",
  },
  {
    cd_feature: "table",
    ds_feature: "Table",
  },
];

const selectedValueChange = (cd_feature: string) => {
  router.push(`/${cd_feature}`);
};
</script>
<template>
  <Select @update:model-value="selectedValueChange">
    <SelectTrigger
      class="w-36 bg-slate-900 text-sky-50 dark:bg-slate-200 dark:text-black font-semibold"
    >
      <SelectValue placeholder="Select a Feature" />
    </SelectTrigger>
    <SelectContent
      class="bg-slate-900 text-sky-50 dark:bg-slate-200 dark:text-black"
    >
      <SelectGroup>
        <SelectLabel>Features</SelectLabel>
        <SelectItem
          v-for="(feature, idx) in features"
          :value="feature.cd_feature"
          :key="feature.cd_feature + idx"
          >{{ feature.ds_feature }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>
