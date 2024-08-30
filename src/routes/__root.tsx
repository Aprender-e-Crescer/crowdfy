import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from '@/components/footer';
import { useLocation } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const hideFooter = location.pathname === '/explore';

    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/my-campaigns">
            My Campaigns
          </Link>

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
            Favorites
          </Link>

          <Link to="/history" className="[&.active]:font-bold">
            History
          </Link>

          <Link to="/profile-settings" className="[&.active]:font-bold">
            Profile Settings
          </Link>
        </div>

        <Outlet />
        <TanStackRouterDevtools />

        <div className={`mt-5 ${hideFooter ? 'hidden' : ''}`}>
          <Footer />
        </div>
      </>
    );
  },
});
