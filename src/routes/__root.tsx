import FooterOverview from '@/component/footerOverview'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <FooterOverview />
      <TanStackRouterDevtools />
    </>
  ),
})  