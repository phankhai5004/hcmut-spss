import Document from '../assets/Document.svg?react';
import Printing from '../assets/Printing.svg?react';
import Notification from '../assets/Notification.svg?react';
import BKPrint from '../assets/BKPrint.svg?react';
import Dashboard from '../assets/Dashboard.svg?react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar/Topbar';
import CustomToast from '../components/ToastComponent/ToastComponent';
import { toast, ToastContainer } from 'react-toastify';
import RoutingButton from '../components/RoutingButton/RoutingButton';

export default function UserRootLayout() {
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
          <RoutingButton text="Bảng điều khiển" icon={Dashboard} to="/user" end={true} />
        </div>

        {/*DIVIDER*/}
        <div className="h-[1px] w-full bg-[#C7C5D0]" />

        <div className="mt-5">
          <p className="text-[14px] font-normal text-[#46464F]">Chức năng chính</p>
          <RoutingButton text="In tài liệu" icon={Document} to="/user/print" end={false} />
        </div>

        <div className="mt-5">
          <p className="text-[14px] font-normal text-[#46464F]">Thống kê</p>

          <div>
            <RoutingButton text="Lịch sử" icon={Document} to="/user/history" end={false} />
            <RoutingButton text="Danh sách máy in" icon={Printing} to="/user/printer-list" end={false} />
            <RoutingButton text="Thông báo" icon={Notification} to="/user/notification" end={false} />
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
