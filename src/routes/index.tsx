import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/404"));
const Success = lazy(() => import("../pages/Success"));

interface AppRoute {
  path: string;
  element: React.ReactNode; // Use React.ReactNode instead of React.ReactElement
  children?: AppRoute[]; // Nested routes
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <Success />,
  },

  {
    path: "/*",
    element: <NotFound />,
  },
];

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((childRoute) => <Route key={childRoute.path} path={childRoute.path} element={childRoute.element} />)}
      </Route>
    ))}
  </Routes>
);
