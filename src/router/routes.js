
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'menu', component: () => import('pages/menu.vue') },

      { path: 'table', component: () => import('pages/table.vue') },
      { path: 'search', component: () => import('pages/search.vue') },
      { path: 'search_page', component: () => import('pages/search_page.vue') },
      { path: 'contacts', component: () => import('pages/contacts.vue') },
      { path: 'impressum', component: () => import('pages/impressum.vue') },
      { path: 'datenschutz', component: () => import('pages/datenschutz.vue') },
    ]
  },
  {
    path: '/richtunge',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':slug', name:'richtunge', component: () => import('pages/info_page') },

    ]
  },
  {
    path: '/hilfreicheTabellen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':slug', name:'table', component: () => import('pages/table') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
