import Footer from '@/components/ui/footer'
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
        <Link to="/explore" className="[&.active]:font-bold">
          Explore
        </Link>
        <Link to="/favorites" className="[&.active]:font-bold">
          favorites
        </Link>
     
        <Link to="/history" className="[&.active]:font-bold">
          history
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
