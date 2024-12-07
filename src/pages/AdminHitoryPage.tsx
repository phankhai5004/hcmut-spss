import Table from '../components/Table/Table';
import { adminPrintHistoryData } from '../constants/printHistoryData';
import { AdminPHColumns } from '../components/PrintHistory/PHColumn';
import HistoryFilter from '../components/HistoryFilter/HistoryFilter';

export default function AdminHistoryPage() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <HistoryFilter />

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-[26px] font-medium">Lịch sử in gần đây</h1>
        </div>

        {/* TABLE */}
        <Table data={adminPrintHistoryData} columns={AdminPHColumns} hidePSS={false} />
      </div>
    </div>
  );
}
