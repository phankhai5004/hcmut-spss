import { ReactElement, ElementType } from 'react';
import Document from '../assets/Document.svg?react';
import Printing from '../assets/Printing.svg?react';
import Notification from '../assets/Notification.svg?react';
import BKPrint from '../assets/BKPrint.svg?react';
import Dashboard from '../assets/Dashboard.svg?react';
import { Outlet, NavLink } from 'react-router-dom';
import Topbar from '../components/Topbar/Topbar';
import CustomToast from '../components/ToastComponent/ToastComponent';
import { toast, ToastContainer } from 'react-toastify';

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
  const showInfoToast = () => {
    toast.info(<CustomToast successs />, {
      // className: 'bg-red-500 rounded-lg shadow-lg p-4',
      closeButton: true,
      hideProgressBar: true,
      autoClose: 5000,
      draggable: false,
    });
  };

  const showFailToast = () => {
    toast.error(<CustomToast successs={false} />, {
      // className: 'bg-red-500 rounded-lg shadow-lg p-4',
      closeButton: true,
      hideProgressBar: true,
      autoClose: 5000,
      draggable: false,
    });
  };

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
      <div className="h-fit min-h-screen w-full rounded-xl px-4 py-8">
        <Topbar />
        <Outlet />
      </div>
      <div className="absolute bottom-0">
        <button
          onClick={showInfoToast}
          className="rounded-lg bg-inherit px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none"
        >
          Show Toast
        </button>
        <button
          onClick={showFailToast}
          className="rounded-lg bg-inherit px-4 py-2 text-white hover:bg-red-700 focus:outline-none"
        >
          Show Toast
        </button>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
