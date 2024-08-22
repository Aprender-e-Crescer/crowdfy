import Footer from '@/components/footer'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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
        <Link to="/profile-settings" className="[&.active]:font-bold">
          Profile Settings
        </Link>
      </div>
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
