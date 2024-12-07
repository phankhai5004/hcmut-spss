import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../routes/RootLayout';
import DashboardPage from '../pages/DashboardPage';
import PrintPage from '../pages/PrintPage';
import HistoryPage from '../pages/HitoryPage';
import PrinterListPage from '../pages/PrinterListPage';
import NotificationPage from '../pages/NotificationPage';
import LoginPage from '../pages/LoginPage';
import DragAndDrop from '../components/DragAndDrop/DragAndDrop';
import SelectProperties from '../components/SelectProperties/SelectProperties';
import SelectPrinters from '../components/SelectPrinters/SelectPrinters';
import Confirm from '../components/Confirm/Confirm';
import SuccessPrint from '../components/SuccessPrint/SuccessPrint';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },

  {
    path: '/dashboard',
    element: <RootLayout />,
    children: [
      {
        index: true, // Indicates the default route within this parent path
        element: <DashboardPage />, // Example root content
      },
      {
        path: 'print', // Relative path (no leading slash)
        element: <PrintPage />,
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
