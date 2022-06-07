import { createRouter, createWebHistory } from 'vue-router'

//individual import
import LoginPage from '../views/users/passenger/LoginPage.vue'
import CreateAccount from '../views/users/passenger/CreateAccount.vue'
import About from '../views/documents/About.vue'
import HomeIndi from '../views/users/passenger/HomePage.vue'
import SettingsIndi from '../views/users/passenger/Settings.vue'
import GenerateQR from '../views/users/passenger/GenerateQR.vue'
import PhoneVerification from '../views/users/passenger/PhoneVerification.vue'
import ForgotPassword from '../views/users/passenger/ForgotPassword.vue'



//estab import
import LoginPageEstab from '../views/users/operator/LoginPage.vue'
import CreateAccountEstab from '../views/users/operator/CreateAccount.vue'
import HomePageEstab from '../views/users/operator/HomePage.vue'
import Scanner from '../views/users/operator/Scanner.vue'
import Settings from '../views/users/operator/Settings.vue'
import EForgotPassword from '../views/users/operator/ForgotPassword.vue'

//admin import
import LoginPageAdmin from '../views/users/admin/LoginPage.vue'
import AdminHome from '../views/users/admin/AdminHome.vue'
import CheckApplication from '../views/users/admin/CheckApplication.vue'
import EntryRecord from '../views/users/admin/EntryRecord.vue'
import Application from '../views/users/admin/Application.vue'
import Report from '../views/users/admin/Report.vue'
import ViewReport from '../views/users/admin/ViewReport.vue'

const routes = [

  {
    path: '/passenger/home/:phoneId',
    name: 'HomeIndi',
    component: HomeIndi,
  },

  {
    path: '/passenger/settings/:phoneId',
    name: 'SettingsIndi',
    component: SettingsIndi,
  },

  {
    path: '/passenger/generate-qr/:phoneId',
    name: 'GenerateQR',
    component: GenerateQR,
  },

  {
    path: '/passenger/login',
    name: 'LoginPage',
    component: LoginPage
  },

  
  {
    path: '/passenger/forgot-pass',
    name: 'ForgotPassword',
    component: ForgotPassword
  },

  {
    path: '/passenger/verify-user',
    name: 'PhoneVerification',
    component: PhoneVerification
  },

  {
    path: '/passenger/create-account/:phone',
    name: 'CreateAccount',
    component: CreateAccount,
  },
  {
    path: '/',
    name: 'About',
    component: About
  },

  {
    path: '/operator/create-account',
    name: 'CreateAccountEstab',
    component: CreateAccountEstab,
  },
  {
    path: '/operator/forgot-password',
    name: 'EForgotPassword',
    component: EForgotPassword,
  },
  {
    path: '/operator/login',
    name: 'LoginPageEstab',
    component: LoginPageEstab
  },
  {
    path: '/operator/home/:estabId',
    name: 'HomePageEstab',
    component: HomePageEstab,
  },

  {
    path: '/operator/scanner/:estabId',
    name: 'Scanner',
    component: Scanner,
  },

  {
    path: '/operator/settings/:estabId',
    name: 'Settings',
    component: Settings,
  },

  {
    path: '/admin-login',
    name: 'LoginPageAdmin',
    component: LoginPageAdmin
  },
  {
    path: '/admin-home/:id',
    name: 'AdminHome',
    component: AdminHome
  },

  {
    path: '/admin-entry-record/:id',
    name: 'EntryRecord',
    component: EntryRecord
  },

  {
    path: '/admin-application/:id',
    name: 'Application',
    component: Application
  },
  {
    path: '/admin-report/:id',
    name: 'Report',
    component: Report
  },
  {
    path: '/admin-report/view-report/:id/:reportId',
    name: 'ViewReport',
    component: ViewReport
  },

   {
    path: '/admin-check/:id/:applicationID',
    name: 'CheckApplication',
    component: CheckApplication
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
