# Frontend architecture — tempa-teknik-web

## Framework
Nuxt 4 (SSR enabled for SEO). Vue 3 Composition API. TypeScript. Pinia for state.
Tailwind v4 for styling (theme tokens, not raw utility soup). Data fetching via
Nuxt's native $fetch/useFetch (SSR-aware).

## Folder strategy: feature-grouped
Business logic is grouped BY FEATURE under app/features/<feature>/, not by type.
Nuxt's required directories (pages/, layouts/, components/, etc.) are kept,
but pages/ files are THIN route entries that delegate to feature containers.

  app/
    features/
      _template/        <- the shape every feature copies
      about/
      contact/
      ...
    pages/              <- thin route entries (Nuxt routing)
    layouts/            <- default layout (header + page + footer)
    components/ui/      <- shared presentational primitives
    composables/        <- shared composables
    api/                <- shared Strapi client + base response types
    types/              <- shared TS types (Strapi wrappers, media, pagination)
    stores/             <- shared/global Pinia stores
    middleware/         <- route guards
    assets/css/         <- Tailwind entry + theme

## Component pattern: Container / Presentational
- Container: fetches data, owns state, handles loading/error. Passes props down.
- Presentational: pure UI. Props in, events out. No fetching, no store.

## API & errors
All Strapi calls go through the shared client in app/api/. Errors surface as a
typed ApiError shape (see MD 3). Strapi responses are { data, meta }.

## Localization
Static UI text via @nuxt/i18n (i18n foundation slice). CMS content localization is
per-field, decided when each feature's content type is modelled.

## Adding a new feature (the recipe)
1. Copy features/_template/ to features/<name>/.
2. Model the Strapi content type; commit schema (in the CMS repo).
3. Write <name>.types.ts extending shared Strapi types.
4. Write <name>.service.ts using the shared client.
5. Write <name>.store.ts (state + actions).
6. Build container + presentational components.
7. Add a thin pages/<route>.vue that renders the container.
8. Make it responsive. Wire localized fields. Write owner test instructions.
9. PR through development -> master.
