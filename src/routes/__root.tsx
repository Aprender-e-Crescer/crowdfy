import Header from '@/components/header'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
       <div>
      <Header />
      </div>
      <Outlet />
   
    
     <TanStackRouterDevtools />
    </>
  ),
});

