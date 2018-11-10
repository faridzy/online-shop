// App Imports
import Home from '../../modules/pages/Home'
import Men from '../../modules/pages/Men'
import Women from '../../modules/pages/Women'
import WhatsNew from '../../modules/pages/WhatsNew'

// Home routes
export default {
  home: {
    path: '/',
    component: Home,
    exact: true
  },

  men: {
    path: '/men',
    component: Men
  },

  women: {
    path: '/women',
    component: Women
  },

  whatsNew: {
    path: '/whats-new',
    component: WhatsNew
  }
}
