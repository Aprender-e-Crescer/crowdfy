import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/componentes/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/my-campaigns">My Campaigns</Link>
      </div>

      <hr />
      <Header />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
