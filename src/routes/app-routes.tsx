import { RouteObject } from 'react-router-dom'

import { AppLayout } from '@/_layout/app'
import { NotFound } from '@/pages/404'
import { DailyVerse } from '@/pages/app/daily-verse'

export const appRoutes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  errorElement: <NotFound />,
  children: [{ path: '/daily-verse', element: <DailyVerse /> }],
}
