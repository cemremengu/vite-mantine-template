import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/Home.page';
import { DashboardPage } from '@/pages/Dashboard.page';

const router = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    element: <DashboardPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
