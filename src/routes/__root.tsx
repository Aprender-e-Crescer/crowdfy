import Footer from '@/components/footer'
import Header from '@/components/header'
import { SubHeader } from '@/components/subHeader'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex flex-wrap gap-2 md:flex-nowrap">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/campaing-create" className="[&.active]:font-bold">
          Campaign Create
        </Link>
        <Link to="/Campaigns" className="[&.active]:font-bold">
          Campaigns
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
        <Link to="/profile-notifications" className="[&.active]:font-bold">
          Profile notification
        </Link>
        <Link to="/history" className="[&.active]:font-bold">
          history
        </Link>
        <Link to="/favorites" className="[&.active]:font-bold">
          favorites
        </Link>
      </div>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  ),
})
