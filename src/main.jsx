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
import TestPage from './pages/TestPage.jsx';
import LoginForm from './components/LoginForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // Default route
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
      {
        path: '/test',
        element: <TestPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
