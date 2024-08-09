import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { routes } from './routes'

export const App = () => (
  <HelmetProvider>
    <RouterProvider router={routes} />
  </HelmetProvider>
)
