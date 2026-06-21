// Consistent, typed error shape surfaced by the API client.
// Components/stores handle this single shape instead of raw fetch errors.

export interface ApiError {
  status: number
  message: string
  // Strapi error payloads include a details object; keep it loosely typed.
  details?: unknown
}

export function isApiError(value: unknown): value is ApiError {
  return (
    typeof value === 'object' &&
    value !== null &&
    'status' in value &&
    'message' in value
  )
}
