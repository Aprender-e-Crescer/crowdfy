import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ViewActivity from '@/componentes/Activity'

export const Route = createRootRoute({
  component: () => (
    <>
     
   
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
      <ViewActivity />
    </>
    
  ),
})