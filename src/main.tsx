import ReactDOM from 'react-dom/client';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './views/layout/Layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './views/homePage/HomePage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
