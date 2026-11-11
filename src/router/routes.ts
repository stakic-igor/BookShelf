import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import LibraryView from '../views/LibraryView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
]
