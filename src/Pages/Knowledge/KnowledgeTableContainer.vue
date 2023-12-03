<script setup lang="ts">
import { AppDisplayFlex, AppText } from "@components/index.ts";
import { useGetDB } from "@composables/index.ts";
</script>

<template>
  <AppDisplayFlex class="p-3">
    <table class="table-auto">
      <thead>
        <tr>
          <th
            :key="index"
            v-for="(column, index) in useGetDB().knowledge_section.columns"
            class="border_base"
          >
            <AppText :value="column" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="index"
          v-for="(row, index) in useGetDB().knowledge_section.rows"
        >
          <td :key="index" v-for="(item, index) in row" class="border_base p-3">
            <AppText :value="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </AppDisplayFlex>
</template>
