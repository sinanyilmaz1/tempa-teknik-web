// EXAMPLE service — copy this shape into each feature as <feature>.service.ts.
// Do not import this file anywhere; it documents the pattern.

import { useStrapiClient } from '~/api/client'
import type { StrapiCollectionResponse, StrapiSingleResponse } from '~/types/strapi'

// 1) Define the feature's entity type in <feature>.types.ts, extending StrapiBaseEntity.
// 2) The service exposes typed functions that call the shared client.
// 3) Pages/containers call these inside useAsyncData/useFetch for SSR-safe fetching.

export function useExampleService() {
  const { get } = useStrapiClient()

  // List endpoint, e.g. GET /api/examples?populate=*
  function fetchAll() {
    return get<StrapiCollectionResponse<unknown>>('/examples', { populate: '*' })
  }

  // Single by documentId, e.g. GET /api/examples/:documentId
  function fetchOne(documentId: string) {
    return get<StrapiSingleResponse<unknown>>(`/examples/${documentId}`, { populate: '*' })
  }

  return { fetchAll, fetchOne }
}

// In a page/container, SSR-safe usage:
//   const { fetchAll } = useExampleService()
//   const { data, pending, error } = await useAsyncData('examples', () => fetchAll())
