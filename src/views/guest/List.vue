<template>
  <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="name"
      @update:options="loadItems"
  ></v-data-table-server>
</template>

<script setup>
import {inject, ref} from "vue";
const repositories = inject('repositories')
const itemsPerPage = ref(5)
const headers = ref([
  {
    title: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Calories', key: 'calories', align: 'end' },
  { title: 'Fat (g)', key: 'fat', align: 'end' },
  { title: 'Carbs (g)', key: 'carbs', align: 'end' },
  { title: 'Protein (g)', key: 'protein', align: 'end' },
  { title: 'Iron (%)', key: 'iron', align: 'end' },
])
const search = ref('')
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)
function loadItems ({ page, itemsPerPage, sortBy }) {
  loading.value = true
  repositories.get('guests').index().finally(() => {
    loading.value = false
  })
}
</script>
