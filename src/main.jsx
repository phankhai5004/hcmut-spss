import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import PrintPage from './pages/PrintPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import PrinterListPage from './pages/PrinterListPage.jsx';
import NotificationPage from './pages/NotificationPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', // Default route
        element: <DashboardPage />, // Example root content
      },
      {
        path: '/print', // Default route
        element: <PrintPage />, // Example root content
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
      {
        path: '/printer-list',
        element: <PrinterListPage />,
      },
      {
        path: '/notification',
        element: <NotificationPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
