import Footer from '@/components/footer'
import Header from '@/components/header'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  ),
})
