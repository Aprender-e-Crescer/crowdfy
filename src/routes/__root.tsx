import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div c>
        <Header />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
      
    </>
  ),
})
