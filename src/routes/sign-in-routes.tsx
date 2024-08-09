import { RouteObject } from 'react-router-dom'

import { AuthLayout } from '@/_layout/auth'
import { NotFound } from '@/pages/404'
import { SignIn } from '@/pages/auth/sign-in'

export const signinRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  errorElement: <NotFound />,
  children: [{ path: '/sign-in', element: <SignIn /> }],
}
