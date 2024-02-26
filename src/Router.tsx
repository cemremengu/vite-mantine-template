import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
import { HomePage } from '@/pages/Home.page';
import { DashboardPage } from '@/pages/Dashboard.page';
import App from '@/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <RouterProvider
      fallbackElement={
        <LoadingOverlay visible zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
      }
      router={router}
    />
  );
}
