<script setup lang="ts">
import { AppDisplayFlex, AppText } from "@components/index.ts";

defineProps({
  columns: {
    type: Array<string>,
    default: [],
  },
  rows: {
    type: Array<Array<string>>,
    default: [],
  },
});
</script>

<template>
  <AppDisplayFlex class="px-3 py-9">
    <table class="table-auto">
      <thead>
        <tr>
          <th
            :key="index"
            v-for="(column, index) in columns"
            class="border_base"
          >
            <AppText :value="column" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(row, index) in rows">
          <td :key="index" v-for="(item, index) in row" class="border_base p-3">
            <AppText :value="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </AppDisplayFlex>
</template>
