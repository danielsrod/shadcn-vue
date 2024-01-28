<script setup lang="ts">
import { defineEmits } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { uid } from "uid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const emits = defineEmits(["create-employee"]);

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    age: z.number(),
    role: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  const newEmployeeEntity = {
    ...values,
    id: uid(),
  };
  emits("create-employee", newEmployeeEntity);
});
</script>

<template>
  <form @submit="onSubmit">
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="default">New Employee</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Employee Register</DialogTitle>
          <DialogDescription
            >Provide the employee informations and click Create to register in
            the system.</DialogDescription
          >
        </DialogHeader>

        <form class="w-2/3 space-y-6" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Type the employee name"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="age">
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Type the employee age"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="role">
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Type the employee role"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <DialogClose>
            <Button type="submit"> Create </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  </form>
</template>

<style scoped></style>
