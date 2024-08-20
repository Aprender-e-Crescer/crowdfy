import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ViewActivity from '@/componentes/Activity'
import Titulo from '@/componentes/Titulo'

export const Route = createRootRoute({
  component: () => (
    <>
     
      <Outlet />
      <Titulo />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <TanStackRouterDevtools />
      <Link />
    </>
    
  ),
})