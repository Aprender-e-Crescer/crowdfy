import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
        <Link to="/campaing-create" className="[&.active]:font-bold">
          Campaign Create
        </Link>
        <Link to="/profileNotifications" className="[&.active]:font-bold">
          Profile Notifications
        </Link>
        <Link to="/Campaigns" className="[&.active]:font-bold">
          Campaings
        </Link>
        <Link to="/explore-map" className="[&.active]:font-bold">
          Explore Map
        </Link>
        <Link to="/my-campaigns" className="[&.active]:font-bold">
          My Campaigns
        </Link>
        <Link to="/profile-settings" className="[&.active]:font-bold">
          Profile Settings
        </Link>
        <Link to="/explore" className="[&.active]:font-bold">
          Explore
        </Link>
      </div>

      <Outlet />
      <TanStackRouterDevtools />

      <div className="mt-5">
        <Footer />
      </div>
    </>
  ),
})
