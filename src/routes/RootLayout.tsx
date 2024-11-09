import { ReactElement, ElementType } from 'react';
import Document from '../assets/Document.svg?react';
import Printing from '../assets/Printing.svg?react';
import Notification from '../assets/Notification.svg?react';
import BKPrint from '../assets/BKPrint.svg?react';
import Dashboard from '../assets/Dashboard.svg?react';
import { Outlet, NavLink } from 'react-router-dom';
import Topbar from '../components/Topbar';

type RoutingButtonProps = {
  text: string;
  to: string;
  icon: ElementType;
};

function RoutingButton({ text, to, icon: Icon }: RoutingButtonProps): ReactElement {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group mt-3 flex h-10 w-full flex-col items-start justify-center gap-2 self-stretch rounded border-[1px] hover:border-[#000F5D] ${isActive ? 'border-[#000F5D]' : 'border-[#F5F2FA]'}`
      }
    >
      {({ isActive }) => (
        <div
          className={`flex flex-1 items-center gap-2 self-stretch py-[10px] pl-4 pr-[24px] group-hover:text-[#000F5D] ${isActive && 'border-[#000F5D]'}`}
        >
          {Icon && (
            <Icon
              className={`group-active: h-[18px] w-[18px] group-hover:fill-[#000F5D] ${isActive ? 'fill-[#000F5D]' : 'fill-[#525A92]'}`}
            />
          )}
          <p
            className={`text-[14px] font-normal group-hover:text-[#000F5D] ${isActive ? 'text-[#000F5D]' : 'text-[#525A92]'}`}
          >
            {text}
          </p>
        </div>
      )}
    </NavLink>
  );
}

export default function RootLayout(): ReactElement {
  return (
    <div className="flex h-lvh gap-5 p-3">
      {/*SIDE BAR*/}
      <div className="h-full w-[260px] rounded-xl bg-[#F5F2FA] px-4">
        <div className="p-4">
          <BKPrint />
        </div>

        {/*DIVIDER*/}
        <div className="h-[1px] w-full bg-[#C7C5D0]" />

        <div className="pb-5 pt-2">
          <RoutingButton text="Bảng điều khiển" icon={Dashboard} to="/" />
        </div>

        {/*DIVIDER*/}
        <div className="h-[1px] w-full bg-[#C7C5D0]" />

        <div className="mt-5">
          <p className="text-[14px] font-normal text-[#46464F]">Chức năng chính</p>
          <RoutingButton text="In tài liệu" icon={Document} to="print" />
        </div>

        <div className="mt-5">
          <p className="text-[14px] font-normal text-[#46464F]">Thống kê</p>

          <div>
            <RoutingButton text="Lịch sử" icon={Document} to="/history" />
            <RoutingButton text="Danh sách máy in" icon={Printing} to="/printer-list" />
            <RoutingButton text="Thông báo" icon={Notification} to="/notification" />
          </div>
        </div>
      </div>
      <div className="h-full w-full rounded-xl px-4 py-8">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
