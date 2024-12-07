import DashboardDatas from '../components/DashboardDatas/DashboardDatas';
import Table from '../components/Table/Table';
import { printHistoryData } from '../constants/printHistoryData';
import { PHColumns } from '../components/PrintHistory/PHColumn';
import HistoryFilter from '../components/HistoryFilter/HistoryFilter';

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <DashboardDatas />

      <HistoryFilter />

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-[26px] font-medium">Lịch sử in gần đây</h1>
          {/* <button className="rounded-xl bg-[#525A92] px-6 text-white"> */}
          {/*   <Link to="/history">Xem nhiều lịch sử in hơn</Link> */}
          {/* </button> */}
        </div>

        {/* TABLE */}
        <Table data={printHistoryData} columns={PHColumns} hidePSS={false} />
      </div>
    </div>
  );
}
