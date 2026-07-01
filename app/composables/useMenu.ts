import type { NavigationMenuItem } from '@nuxt/ui'

export function useMenu() {
  const { t } = useI18n()
  const localePath = useLocalePath()

  const items = computed<NavigationMenuItem[]>(() => [
    { label: t('menu.home'), to: localePath('/') },
    { label: t('menu.about'), to: localePath('/hakkimizda') },
    {
      label: t('menu.products'),
      to: localePath('/urunler'),
      // Dropdown children are PLACEHOLDERS — replaced by CMS data in the Products slice.
      children: [
        { label: 'Placeholder ürün grubu 1', to: localePath('/urunler') },
        { label: 'Placeholder ürün grubu 2', to: localePath('/urunler') },
      ],
    },
    {
      label: t('menu.distributors'),
      to: localePath('/distributorlukler'),
      children: [
        { label: 'Placeholder distribütör 1', to: localePath('/distributorlukler') },
        { label: 'Placeholder distribütör 2', to: localePath('/distributorlukler') },
      ],
    },
    { label: t('menu.catalogs'), to: localePath('/kataloglar') },
    { label: t('menu.videos'), to: localePath('/videolar') },
    { label: t('menu.news'), to: localePath('/haberler') },
    { label: t('menu.contact'), to: localePath('/iletisim') },
  ])

  return { items }
}
