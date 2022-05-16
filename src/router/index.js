import { createRouter, createWebHistory } from 'vue-router'

//individual import
import LoginPage from '../views/users/individual/LoginPage.vue'
import CreateAccount from '../views/users/individual/CreateAccount.vue'
import About from '../views/documents/About.vue'
import PrivacyPolicy from '../views/documents/PrivacyPolicy.vue'
import HomeIndi from '../views/users/individual/HomePage.vue'
import SettingsIndi from '../views/users/individual/Settings.vue'
import GenerateQR from '../views/users/individual/GenerateQR.vue'
import PhoneVerification from '../views/users/individual/PhoneVerification.vue'
import ForgotPassword from '../views/users/individual/ForgotPassword.vue'



//estab import
import LoginPageEstab from '../views/users/estab/LoginPage.vue'
import CreateAccountEstab from '../views/users/estab/CreateAccount.vue'
import HomePageEstab from '../views/users/estab/HomePage.vue'
import Scanner from '../views/users/estab/Scanner.vue'
import Settings from '../views/users/estab/Settings.vue'
import EForgotPassword from '../views/users/estab/ForgotPassword.vue'

//admin import
import LoginPageAdmin from '../views/users/admin/LoginPage.vue'
import AdminHome from '../views/users/admin/AdminHome.vue'
import CheckApplication from '../views/users/admin/CheckApplication.vue'
import EntryRecord from '../views/users/admin/EntryRecord.vue'
import Application from '../views/users/admin/Application.vue'
import Report from '../views/users/admin/Report.vue'
import ViewReport from '../views/users/admin/ViewReport.vue'

// import {getAuth} from 'firebase/auth'
// import app from '../firebase/auth-individual/firebase'

// const auth = getAuth(app);

const routes = [

  {
    path: '/individual-home/:phoneId',
    name: 'HomeIndi',
    component: HomeIndi,
  },

  {
    path: '/individual-settings/:phoneId',
    name: 'SettingsIndi',
    component: SettingsIndi,
  },

  {
    path: '/individual-generate-qr/:phoneId',
    name: 'GenerateQR',
    component: GenerateQR,
  },

  {
    path: '/individual-login',
    name: 'LoginPage',
    component: LoginPage
  },

  
  {
    path: '/individual-forgot-pass',
    name: 'ForgotPassword',
    component: ForgotPassword
  },

  {
    path: '/individual-verify-user',
    name: 'PhoneVerification',
    component: PhoneVerification
  },

  {
    path: '/individual-create-account/:phone',
    name: 'CreateAccount',
    component: CreateAccount,
  },
  {
    path: '/',
    name: 'About',
    component: About
  },

  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },

  {
    path: '/estab-create-account',
    name: 'CreateAccountEstab',
    component: CreateAccountEstab,
  },
  {
    path: '/estab-forgot-password',
    name: 'EForgotPassword',
    component: EForgotPassword,
  },
  {
    path: '/estab-login',
    name: 'LoginPageEstab',
    component: LoginPageEstab
  },
  {
    path: '/estab-home/:estabId',
    name: 'HomePageEstab',
    component: HomePageEstab,
  },

  {
    path: '/estab-scanner/:estabId',
    name: 'Scanner',
    component: Scanner,
  },

  {
    path: '/estab-settings/:estabId',
    name: 'Settings',
    component: Settings,
  },

  {
    path: '/admin-login',
    name: 'LoginPageAdmin',
    component: LoginPageAdmin
  },
  {
    path: '/admin-home',
    name: 'AdminHome',
    component: AdminHome
  },

  {
    path: '/admin-entry-record',
    name: 'EntryRecord',
    component: EntryRecord
  },

  {
    path: '/admin-application',
    name: 'Application',
    component: Application
  },
  {
    path: '/admin-report',
    name: 'Report',
    component: Report
  },
  {
    path: '/admin/report/view-report/:reportId',
    name: 'ViewReport',
    component: ViewReport
  },

   {
    path: '/admin-check/:applicationID',
    name: 'CheckApplication',
    component: CheckApplication
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
