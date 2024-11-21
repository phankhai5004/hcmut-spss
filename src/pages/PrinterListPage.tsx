import Printer from '../assets/Printer.svg?react';
import PrintedPapers from '../assets/PrintedPapers.svg?react';
import PaperIcon from '../assets/PaperIcon.svg?react';
import PrinterFilter from '../components/PrinterFilter/PrinterFilter';
import Table from '../components/Table/Table';
import { PrinterListColumns } from '../components/PrinterList/PrinterListColumn';
import { printerListData } from '../constants/printerList';

export default function PrinterListPage() {
  return (
    <div className="flex w-full flex-col gap-10 pt-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-[#C7C5D0] shadow-lg">
        <div className="relative border-r border-[#C7C5D0] px-8 py-4">
          <div className="text-sm font-medium">Tổng số lượng máy in</div>

          <div className="relative flex h-full">
            <p className="text-[32px] font-medium">80</p>
            <p className="mt-2 text-[12px] font-medium">Máy</p>
          </div>

          <div className="absolute right-8 top-0 flex h-full w-fit items-center">
            <Printer className="size-10 fill-[#032B91]" />
          </div>
        </div>

        <div className="relative border-r border-[#C7C5D0] px-8 py-4">
          <div className="text-sm font-medium">Tổng số lượng máy in</div>

          <div className="relative flex h-full">
            <p className="text-[32px] font-medium">80</p>
            <p className="mt-2 text-[12px] font-medium">Máy</p>
          </div>

          <div className="absolute right-8 top-0 flex h-full w-fit items-center">
            <PrintedPapers className="size-10 fill-[#032B91]" />
          </div>
        </div>

        <div className="relative border-r border-[#C7C5D0] px-8 py-4">
          <div className="text-sm font-medium">Tổng số lượng máy in</div>

          <div className="relative flex h-full">
            <p className="text-[32px] font-medium">80</p>
            <p className="mt-2 text-[12px] font-medium">Máy</p>
          </div>

          <div className="absolute right-8 top-0 flex h-full w-fit items-center">
            <PaperIcon className="size-10 fill-[#032B91]" />
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <PrinterFilter />

      <Table hidePSS={false} columns={PrinterListColumns} data={printerListData} />
    </div>
  );
}
