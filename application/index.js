import Vue from 'vue'
import VueRouter from 'vue-router'
import { DateTime } from 'luxon'

import Layout from './layout'
import TimePage from './page-time'
import CalendarPage from './page-calendar'
import InformationPage from './page-information'
import YearPage from './page-year'
import NotFound from './page-not-found'

import svgIcon from './ui/svg-icons'
import pageTitle from './ui/page-title'

Vue.use(VueRouter)

Vue.filter(`hoursMinutesSeconds`, value => {
  const isLuxonDateTime = value instanceof DateTime
  if (!isLuxonDateTime) return `00:00:00`
  return value.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
})

Vue.component(`t-icon`, svgIcon)
Vue.component(`t-page-title`, pageTitle)

const routes = [
  {
    path: `/`,
    component: TimePage,
  },
  {
    path: `/calendar`,
    component: CalendarPage,
  },
  {
    path: `/information`,
    component: InformationPage,
  },
  {
    path: `/year`,
    component: YearPage,
  },
  {
    path: `/*`,
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
  base: `/`,
})

const application = new Vue({
  el: `#vue-root`,
  render: h => h(Layout),
  router,
})
