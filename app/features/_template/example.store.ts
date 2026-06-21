// EXAMPLE store — copy this shape into each feature as <feature>.store.ts.
// Uses Pinia setup-style (Composition API). Do not import this file anywhere;
// it documents the pattern.

import { defineStore } from 'pinia'
import type { ApiError } from '~/types/api-error'
import { isApiError } from '~/types/api-error'
import { useExampleService } from './example.service'

// Replace `unknown` with the feature's entity type from <feature>.types.ts.
type ExampleEntity = unknown

export const useExampleStore = defineStore('example', () => {
  // --- state ---
  const items = ref<ExampleEntity[]>([])
  const current = ref<ExampleEntity | null>(null)
  const loading = ref(false)
  const error = ref<ApiError | null>(null)

  // --- actions ---
  async function loadAll() {
    loading.value = true
    error.value = null
    try {
      const { fetchAll } = useExampleService()
      const res = await fetchAll()
      items.value = res.data as ExampleEntity[]
    } catch (e) {
      error.value = isApiError(e) ? e : { status: 0, message: 'Unexpected error' }
    } finally {
      loading.value = false
    }
  }

  async function loadOne(documentId: string) {
    loading.value = true
    error.value = null
    try {
      const { fetchOne } = useExampleService()
      const res = await fetchOne(documentId)
      current.value = res.data as ExampleEntity
    } catch (e) {
      error.value = isApiError(e) ? e : { status: 0, message: 'Unexpected error' }
    } finally {
      loading.value = false
    }
  }

  return { items, current, loading, error, loadAll, loadOne }
})
