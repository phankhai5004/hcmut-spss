import { ColumnDef } from '@tanstack/react-table';
import StatusChip from './StatusChip.tsx';
import { PHColumnType } from './PHColumnType.ts';

// Dash board print history
export const PHColumns: ColumnDef<PHColumnType>[] = [
  {
    accessorKey: 'id',
    header: () => <p className="text-left text-xs">STT</p>,
    cell: (info) => <p className="w-full text-center text-xs font-semibold">{info.getValue() as string}</p>,
    size: 60,
  },
  {
    accessorKey: 'documentName',
    header: () => <p className="w-full text-left text-xs">Tài liệu</p>,
    cell: (info) => <p className="text-sm font-black text-[#07208D]">{info.getValue() as string}</p>,
    size: 560,
  },
  {
    accessorKey: 'printingState',
    header: () => <p className="text-left text-xs">Trạng thái</p>,
    cell: (info) => {
      const value = info.getValue() as string;
      return <StatusChip success={value === 'success'} />;
    },
    size: 240,
  },
  {
    accessorKey: 'printingTime',
    header: () => <p className="text-left text-xs">Thời gian</p>,
    cell: (info) => {
      const date = new Date(info.getValue() as Date);
      return (
        <p className="text-sm font-medium">
          {date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          })}
        </p>
      );
    },
    size: 260,
  },
  {
    accessorKey: 'printerName',
    header: () => <p className="text-left text-xs">Máy in</p>,
    cell: (info) => <p className="text-sm font-medium">{info.getValue() as string}</p>,
    size: 160,
  },
  {
    accessorKey: 'properties',
    header: () => <p className="text-left text-xs">Tùy chọn</p>,
    cell: (info) => (
      <div className="max-w-[680px] truncate text-sm font-medium" title={info.getValue() as string}>
        {info.getValue() as string}
      </div>
    ),
    size: 500,
  },
];
