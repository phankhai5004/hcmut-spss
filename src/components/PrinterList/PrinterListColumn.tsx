import { ColumnDef } from '@tanstack/react-table';
import StatusChip from '../PrintHistory/StatusChip';

export type PrinterListColumnType = {
  id: number;
  printerName: string;
  printerBrand: string;
  printerLocation: string;
  printerBK: 'BKLTK' | 'BKTD';
  active: boolean;
};

// Dash board print history
export const PrinterListColumns: ColumnDef<PrinterListColumnType>[] = [
  {
    accessorKey: 'id',
    header: () => <p className="text-left text-xs">STT</p>,
    cell: (info) => <p className="w-full text-center text-xs font-semibold">{info.getValue() as string}</p>,
    size: 60,
  },

  {
    accessorKey: 'printerName',
    header: () => <p className="w-full text-left text-xs">Mã máy in</p>,
    cell: (info) => <p className="text-sm font-black text-[#07208D]">{info.getValue() as string}</p>,
    size: 400,
  },

  {
    accessorKey: 'printerBrand',
    header: () => <p className="text-left text-xs">Hãng máy in</p>,
    cell: (info) => <p className="text-sm font-medium">{info.getValue() as string}</p>,
  },

  {
    accessorKey: 'printerLocation',
    header: () => <p className="text-left text-xs">Vị trí</p>,
    cell: (info) => <p className="text-sm font-medium">{info.getValue() as string}</p>,
  },

  {
    accessorKey: 'printerBK',
    header: () => <p className="text-left text-xs">Cơ sở</p>,
    cell: (info) => <p className="text-sm font-medium">{info.getValue() as string}</p>,
  },

  {
    accessorKey: 'active',
    header: () => <p className="text-left text-xs">Trạng thái</p>,
    cell: (info) => {
      return <StatusChip success={info.getValue() as boolean} successText="Khả dụng" failText="Bảo trì" />;
    },
  },
];
