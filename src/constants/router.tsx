import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../routes/RootLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <RootLayout />,
    element: <RootLayout/>,
    children: [
      {
        index: true, // Indicates the default route within this parent path
        // element: <DashboardPage />, // Example root content
        element: <h1>DashboardPage</h1>
      },
      {
        path: 'print', // Relative path (no leading slash)
        // element: <PrintPage />,
        element: <h1>Print Page</h1>
      },
      {
        path: 'history', // Relative path (no leading slash)
        // element: <HistoryPage />,
        element: <h1>History Page</h1>
      },
      {
        path: 'printer-list', // Relative path (no leading slash)
        // element: <PrinterListPage />,
        element: <h1>PrinterListPage</h1>
      },
      {
        path: 'notification', // Relative path (no leading slash)
        // element: <NotificationPage />,
        element: <h1>Notification Page</h1>
      },
    ],
  },
]);
