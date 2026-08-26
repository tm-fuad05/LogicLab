import { createBrowserRouter } from 'react-router';
import RootLayout, { rootLoader } from '../layouts/RootLayout';
import HomePage, { homeLoader } from '../pages/HomePage';
import CategoryOverview, { categoryLoader } from '../pages/CategoryOverview';
import PlaygroundPage, { playgroundLoader } from '../pages/PlaygroundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: 'category/:categoryId',
        element: <CategoryOverview />,
        loader: categoryLoader,
      },
      {
        path: 'playground/:logicId',
        element: <PlaygroundPage />,
        loader: playgroundLoader,
      },
    ],
  },
]);
