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
    title: 'First Name',
    align: 'start',
    sortable: false,
    key: 'first_name',
  },
  {
    title: 'Last Name',
    key: 'last_name',
    align: 'end'
  },
])
const search = ref('')
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)

const loadItems = async () => {
  loading.value = true
  const items = await repositories.get('guest').index()
  if (items.data && items.data.length) {
    serverItems.value = items.data
    totalItems.value = items.data.length
  }
  loading.value = false
}
</script>
