<script setup lang="ts">
import { ref } from "vue";
import { uid } from "uid";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewEmployee from "./NewEmployee.vue";

import { IEmployee } from "@/interfaces";

import employees from "@/data/employees.json";

const dataTableEmployees = ref(
  employees.map((employee) => Object.assign(employee, { id: uid() }))
);

const createEmployee = (newEmployeeEntity: IEmployee) => {
  dataTableEmployees.value.push(newEmployeeEntity);
};
</script>

<template>
  <div>
    <div class="actions h-20 p-6">
      <NewEmployee @create-employee="createEmployee" />
    </div>

    <div class="p-6">
      <Table>
        <TableCaption>A list of your employees.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="employee in dataTableEmployees" :key="employee.id">
            <TableCell>{{ employee.id }}</TableCell>
            <TableCell>{{ employee.name }}</TableCell>
            <TableCell>{{ employee.age }}</TableCell>
            <TableCell>{{ employee.role }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style scoped></style>
