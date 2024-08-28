/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileNotificationsImport } from './routes/profileNotifications'
import { Route as MyCampaignsImport } from './routes/my-campaigns'
import { Route as CampaingformtreestepImport } from './routes/campaingformtreestep'
import { Route as CampaingformsecondstepImport } from './routes/campaingformsecondstep'
import { Route as AboutImport } from './routes/about'
import { Route as CampaingCreateImport } from './routes/CampaingCreate'
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

const CampaingformtreestepRoute = CampaingformtreestepImport.update({
  path: '/campaingformtreestep',
  getParentRoute: () => rootRoute,
} as any)

const CampaingformsecondstepRoute = CampaingformsecondstepImport.update({
  path: '/campaingformsecondstep',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const CampaingCreateRoute = CampaingCreateImport.update({
  path: '/CampaingCreate',
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
    '/CampaingCreate': {
      id: '/CampaingCreate'
      path: '/CampaingCreate'
      fullPath: '/CampaingCreate'
      preLoaderRoute: typeof CampaingCreateImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/campaingformsecondstep': {
      id: '/campaingformsecondstep'
      path: '/campaingformsecondstep'
      fullPath: '/campaingformsecondstep'
      preLoaderRoute: typeof CampaingformsecondstepImport
      parentRoute: typeof rootRoute
    }
    '/campaingformtreestep': {
      id: '/campaingformtreestep'
      path: '/campaingformtreestep'
      fullPath: '/campaingformtreestep'
      preLoaderRoute: typeof CampaingformtreestepImport
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
  CampaingCreateRoute,
  AboutRoute,
  CampaingformsecondstepRoute,
  CampaingformtreestepRoute,
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
        "/CampaingCreate",
        "/about",
        "/campaingformsecondstep",
        "/campaingformtreestep",
        "/my-campaigns",
        "/profileNotifications"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/CampaingCreate": {
      "filePath": "CampaingCreate.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/campaingformsecondstep": {
      "filePath": "campaingformsecondstep.tsx"
    },
    "/campaingformtreestep": {
      "filePath": "campaingformtreestep.tsx"
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
