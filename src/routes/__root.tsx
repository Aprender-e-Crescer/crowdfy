import { createRootRoute, Link, Outlet } from '@tanstack/react-router' 
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '@/componentes/header'

export const Route = createRootRoute({
  component: () => (
    <>
    <Outlet />
     < Header />
     < TanStackRouterDevtools />
    </>
  ),
})