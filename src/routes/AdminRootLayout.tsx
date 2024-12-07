import Document from '../assets/Document.svg?react';
import Printing from '../assets/Printing.svg?react';
import Notification from '../assets/Notification.svg?react';
import BKPrint from '../assets/BKPrint.svg?react';
import Dashboard from '../assets/Dashboard.svg?react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar/Topbar';
import RoutingButton from '../components/RoutingButton/RoutingButton';

export default function RootLayout() {
  return (
    <div className="flex h-fit min-h-dvh gap-5 p-3">
      {/*SIDE BAR*/}
      <div className="sticky top-4 h-svh w-[260px] rounded-xl bg-[#F5F2FA] px-4">
        <div className="p-4">
          <BKPrint />
        </div>

        {/*DIVIDER*/}
        <div className="h-[1px] w-full bg-[#C7C5D0]" />

        <div className="pb-5 pt-2">
          <RoutingButton text="Bảng điều khiển" icon={Dashboard} to="/admin" end={true} />
        </div>

        {/*DIVIDER*/}
        <div className="h-[1px] w-full bg-[#C7C5D0]" />

        <div>
          <RoutingButton text="Lịch sử" icon={Document} to="/admin/history" end={false} />
          <RoutingButton text="Danh sách máy in" icon={Printing} to="/admin/printer-list" end={false} />
          <RoutingButton text="Thông báo" icon={Notification} to="/admin/notification" end={false} />
        </div>
      </div>
      <div className="h-fit min-h-screen w-full rounded-xl px-4 py-8">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
