/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileNotificationsImport } from './routes/profileNotifications'
import { Route as MyCampaignsImport } from './routes/my-campaigns'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProfileNotificationsRoute = ProfileNotificationsImport.update({
  path: '/profileNotifications',
  getParentRoute: () => rootRoute,
} as any)

const MyCampaignsRoute = MyCampaignsImport.update({
  path: '/my-campaigns',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/my-campaigns': {
      id: '/my-campaigns'
      path: '/my-campaigns'
      fullPath: '/my-campaigns'
      preLoaderRoute: typeof MyCampaignsImport
      parentRoute: typeof rootRoute
    }
    '/profileNotifications': {
      id: '/profileNotifications'
      path: '/profileNotifications'
      fullPath: '/profileNotifications'
      preLoaderRoute: typeof ProfileNotificationsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  MyCampaignsRoute,
  ProfileNotificationsRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/my-campaigns"
        "/my-campaigns",
        "/profileNotifications"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/my-campaigns": {
      "filePath": "my-campaigns.tsx"
    },
    "/profileNotifications": {
      "filePath": "profileNotifications.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
