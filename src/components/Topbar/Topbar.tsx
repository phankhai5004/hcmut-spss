import { useLocation } from 'react-router-dom';
import { PageName } from '../../constants/PageName.ts';

export default function Topbar() {
  const location = useLocation();
  const currentPageName = PageName[location.pathname];

  return (
    <header className="flex flex-col gap-6">
      {/* INFORMATION */}
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-semibold">{currentPageName}</h1>
        <div className="flex items-center gap-4">
          <h1 className="text-[22px]">Xin chào, Tuan Anh</h1>
          <div className="size-10 rounded-full bg-blue-500" />
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="h-[1px] bg-[#C7C5D0]" />
    </header>
  );
}
