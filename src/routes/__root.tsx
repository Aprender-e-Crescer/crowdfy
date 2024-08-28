import Header from '@/componentes/header'
import Footer from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>

        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>

        <Link to="/my-campaigns">My Campaigns</Link>

        <Link to="/">HOME</Link>

        <Link to="/CampaingCreate" className="[&.active]:font-bold">
          Campaign Create
        </Link>
        <Link to="/profileNotifications" className="[&.active]:font-bold">
          profileNotifications
        </Link>
        <Link to="/profile-settings" className="[&.active]:font-bold">
          Profile Settings
        </Link>
      </div>

      <hr />
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
