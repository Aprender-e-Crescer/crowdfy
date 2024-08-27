import Footer from '@/components/ui/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '@/componentes/header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/CampaingCreate" className="[&.active]:font-bold">
          Campaign Create
        </Link>
        <Link to="/profileNotifications" className="[&.active]:font-bold">
          profileNotifications
        </Link>
      </div>

      <hr />
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
