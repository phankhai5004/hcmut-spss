import { Link } from 'react-router-dom';
import LoginFrequencyChart from '../components/LoginFrequencyChart';
import DashboardDatas from '../components/DashboardData';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5 pt-10">
      <DashboardDatas />
      <LoginFrequencyChart />
      <div className="flex justify-between">
        <h1 className="text-[26px] font-medium">Lịch sử in gần đây</h1>
        <button className="rounded-xl bg-[#525A92] px-6 text-white">
          <Link to="/history">Xem nhiều lịch sử in hơn</Link>
        </button>
      </div>
    </div>
  );
}
