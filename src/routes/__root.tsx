import FooterOverview from '@/component/footerOverview'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import CardsDonations from '@/component/cardsViews'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <CardsDonations />
      <TanStackRouterDevtools />
    </>
  ),
})  