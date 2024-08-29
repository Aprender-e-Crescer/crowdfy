import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <Header />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
