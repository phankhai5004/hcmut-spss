import { Link } from 'react-router-dom';
import Table from '../components/Table/Table';
import { adminPrintHistoryData } from '../constants/printHistoryData.ts';
import { AdminPHColumns } from '../components/PrintHistory/PHColumn.tsx';
import AdminDashboardDatas from '../components/DashboardDatas/AdminDashboardData.tsx';
import AdminLoginFrequencyChart from '../components/LoginFrequencyChart/AdminLoginFrequencyChart.tsx';

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="flex flex-col gap-10">
        <AdminDashboardDatas />
        {/* CHART */}
        <AdminLoginFrequencyChart />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-[26px] font-medium">Lịch sử in gần đây</h1>
          <button className="rounded-xl bg-[#525A92] px-6 text-white">
            <Link to="/admin/history">Xem nhiều lịch sử in hơn</Link>
          </button>
        </div>

        {/* TABLE */}
        <Table data={adminPrintHistoryData} columns={AdminPHColumns} hidePSS={true} />
      </div>
    </div>
  );
}
