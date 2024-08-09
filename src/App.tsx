import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { routes } from './routes'

export const App = () => (
  <HelmetProvider>
    <ThemeProvider storageKey="daily-verses-theme" defaultTheme="system">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </HelmetProvider>
)
