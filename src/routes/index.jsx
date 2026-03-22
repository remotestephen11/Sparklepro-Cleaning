import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout'
import {
  AboutPage,
  ContactPage,
  HomePage,
  PricingPage,
  ServicesPage,
} from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
])
