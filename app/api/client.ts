import type { ApiError } from '~/types/api-error'

// Normalizes any thrown fetch error into our ApiError shape.
function toApiError(err: unknown): ApiError {
  const e = err as { statusCode?: number; status?: number; message?: string; data?: unknown }
  return {
    status: e?.statusCode ?? e?.status ?? 0,
    message: e?.message ?? 'Unknown API error',
    details: e?.data,
  }
}

// Composable: returns typed GET helpers bound to the configured Strapi base URL.
// Uses Nuxt's $fetch under the hood (SSR-aware).
export function useStrapiClient() {
  const config = useRuntimeConfig()
  const baseURL = `${config.public.apiBaseUrl}/api`

  async function get<T>(path: string, query?: Record<string, unknown>): Promise<T> {
    try {
      return await $fetch<T>(path, { baseURL, query })
    } catch (err) {
      throw toApiError(err)
    }
  }

  return { get, baseURL }
}
