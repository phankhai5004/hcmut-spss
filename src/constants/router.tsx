import { createBrowserRouter } from 'react-router-dom';
import UserRootLayout from '../routes/UserRootLayout';
import UserDashboardPage from '../pages/UserDashboardPage';
import UserPrintPage from '../pages/UserPrintPage';
import UserHistoryPage from '../pages/UserHitoryPage';
import UserPrinterListPage from '../pages/UserPrinterListPage';
import UserNotificationPage from '../pages/UserNotificationPage';
import LoginPage from '../pages/LoginPage';
import DragAndDrop from '../components/DragAndDrop/DragAndDrop';
import SelectProperties from '../components/SelectProperties/SelectProperties';
import SelectPrinters from '../components/SelectPrinters/SelectPrinters';
import Confirm from '../components/Confirm/Confirm';
import SuccessPrint from '../components/SuccessPrint/SuccessPrint';
import AdminRootLayout from '../routes/AdminRootLayout';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import AdminHistoryPage from '../pages/AdminHitoryPage';
import AdminPrinterListPage from '../pages/AdminPrinterListPage';
import AdminNotificationPage from '../pages/AdminNotificationPage';
import AdminAddPrinterPage from '../pages/AdminAddPrinterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },

  {
    path: '/user',
    element: <UserRootLayout />,
    children: [
      {
        index: true, // Indicates the default route within this parent path
        element: <UserDashboardPage />, // Example root content
      },
      {
        path: 'print', // Relative path (no leading slash)
        element: <UserPrintPage />,
        children: [
          {
            index: true,
            element: <DragAndDrop />,
          },
          {
            path: 'select-properties',
            element: <SelectProperties />,
          },
          {
            path: 'select-printers',
            element: <SelectPrinters />,
          },
          {
            path: 'confirm',
            element: <Confirm />,
          },
          {
            path: 'success',
            element: <SuccessPrint />,
          },
        ],
      },
      {
        path: 'history', // Relative path (no leading slash)
        element: <UserHistoryPage />,
      },
      {
        path: 'printer-list', // Relative path (no leading slash)
        element: <UserPrinterListPage />,
      },
      {
        path: 'notification', // Relative path (no leading slash)
        element: <UserNotificationPage />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminRootLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: 'history',
        element: <AdminHistoryPage />,
      },
      {
        path: 'printer-list',
        element: <AdminPrinterListPage />,
      },
      {
        path: 'add-printer',
        element: <AdminAddPrinterPage />,
      },
      {
        path: 'notification',
        element: <AdminNotificationPage />,
      },
    ],
  },
]);
