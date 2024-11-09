import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../routes/RootLayout';
import DashboardPage from '../pages/DashboardPage';
import PrintPage from '../pages/PrintPage_1';
import HistoryPage from '../pages/HitoryPage';
import PrinterListPage from '../pages/PrinterListPage';
import NotificationPage from '../pages/NotificationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <RootLayout />,
    element: <RootLayout />,
    children: [
      {
        index: true, // Indicates the default route within this parent path
        element: <DashboardPage />, // Example root content
      },
      {
        path: 'print', // Relative path (no leading slash)
        element: <PrintPage />,
      },
      {
        path: 'history', // Relative path (no leading slash)
        element: <HistoryPage />,
      },
      {
        path: 'printer-list', // Relative path (no leading slash)
        element: <PrinterListPage />,
      },
      {
        path: 'notification', // Relative path (no leading slash)
        element: <NotificationPage />,
      },
    ],
  },
]);
