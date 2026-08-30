import { createBrowserRouter, Navigate } from "react-router";
import RootLayout, { rootLoader } from "../layouts/RootLayout";
import LandingPage from "../pages/LandingPage";
import HomePage, { homeLoader } from "../pages/HomePage";
import CategoryOverview, { categoryLoader } from "../pages/CategoryOverview";
import PlaygroundPage, { playgroundLoader } from "../pages/PlaygroundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        path: "home",
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "category/:categoryId",
        element: <CategoryOverview />,
        loader: categoryLoader,
      },
      {
        path: "playground/:logicId",
        element: <PlaygroundPage />,
        loader: playgroundLoader,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
