import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import TituloPage from "@/componentes/tituloPage"

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      < TituloPage />
      <TanStackRouterDevtools />
    </>
  ),
})