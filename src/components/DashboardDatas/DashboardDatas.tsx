import { DashboardData } from '../../constants/DashboardData';

const DashboardDatas = () => {
  return (
    <div className="grid grid-cols-4 overflow-hidden rounded-lg border border-gray-300">
      {DashboardData.map((item, index) => (
        <div
          key={index}
          className="relative col-span-1 flex flex-col items-start border-r border-gray-300 px-8 py-4 transition-shadow hover:shadow-lg"
        >
          <div className="text-sm font-medium text-[#1B1B21]">{item.title}</div>
          <div className="text absolute right-8 top-0 flex h-full w-fit items-center">
            <item.icon className="size-10 fill-[#032B91]" />
          </div>
          <div className="flex">
            <div className="text-[32px] font-medium text-[#1B1B21]">{item.value}</div>
            <div className="text-xs font-medium text-[#1B1B21]">{item.unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardDatas;
