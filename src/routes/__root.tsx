import { createRootRoute, Link, Outlet } from '@tanstack/react-router' 
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import CardOverview from '@/componentes/CardOverview'


export const Route = createRootRoute({
  component: () => (
    <>
      
      <Outlet />
      <CardOverview />
      <TanStackRouterDevtools />

    </>
  ),
})