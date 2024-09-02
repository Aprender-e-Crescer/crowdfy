import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/componentes/header";
import Footer from '@/components/footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/my-campaigns">My Campaigns</Link>

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
        
        <Link to="/profile-settings" className="[&.active]:font-bold">
          Profile Settings
        </Link>
      </div>
        
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
      
      <div className="mt-5">
        <Footer />
      </div>
    </>
  ),
});
