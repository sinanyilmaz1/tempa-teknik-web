# Feature folder template

Every feature (about, contact, catalogs, videos, news, distributors, products)
follows this structure under `app/features/<feature-name>/`:

  components/        Presentational + container components for this feature
  composables/       Feature-specific composables (data fetching, logic)
  <feature>.service.ts   API calls to Strapi for this feature (uses shared client)
  <feature>.store.ts     Pinia store for this feature's state
  <feature>.types.ts     TypeScript types for this feature (extend shared Strapi types)

The matching route lives in app/pages/ and stays THIN — it imports the
feature's container component and renders it. No business logic in pages/.

Container/Presentational pattern:
  - Container component: fetches data (via composable/store), handles state,
    passes plain props down.
  - Presentational component: receives props, renders UI, emits events. No data
    fetching, no store access.

## Data fetching: store vs useAsyncData (SSR)
Because this is an SSR app, WHERE you fetch matters:

- For data a page needs at render time (SEO-critical content like product/news
  pages): fetch in the page/container with `useAsyncData`/`useFetch` so it is
  rendered on the server. Example:
    const { fetchAll } = useNewsService()
    const { data, pending, error } = await useAsyncData('news', () => fetchAll())

- For client-side state that persists across navigation, is shared between
  sibling components, or is mutated on the client: use the feature's Pinia store.

- You can hydrate a store from useAsyncData results when you need both SSR
  rendering AND persistent client state.

Loading/error handling is consistent everywhere via the ApiError shape.
