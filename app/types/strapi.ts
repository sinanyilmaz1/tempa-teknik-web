// Generic Strapi v5 response envelope types.
// Every feature's own types build on these.

export interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiMeta {
  pagination?: StrapiPagination
}

// A single entity response: { data: T, meta: {} }
export interface StrapiSingleResponse<T> {
  data: T
  meta: StrapiMeta
}

// A collection response: { data: T[], meta: { pagination } }
export interface StrapiCollectionResponse<T> {
  data: T[]
  meta: StrapiMeta
}

// Strapi media (images, PDFs uploaded to the media library)
export interface StrapiMediaFormat {
  url: string
  width: number
  height: number
  size: number
  mime: string
}

export interface StrapiMedia {
  id: number
  documentId: string
  name: string
  alternativeText?: string | null
  caption?: string | null
  width?: number | null
  height?: number | null
  formats?: Record<string, StrapiMediaFormat> | null
  url: string
  mime: string
  size: number
}

// Common fields present on every Strapi v5 entity
export interface StrapiBaseEntity {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt?: string | null
  locale?: string | null
}
