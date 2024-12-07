import { ColumnDef } from '@tanstack/react-table';
import StatusChip from '../PrintHistory/StatusChip';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Popup from '../Popup/Popup';
import { useState } from 'react';

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

export const AdminPrinterListColumns: ColumnDef<PrinterListColumnType>[] = [
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
    header: () => <p className="text-left text-xs">Tắt/bật máy in</p>,
    cell: ({ row }) => {
      const activeState = row.original.active; // Get the 'active' state from the row
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [isPopupVisible, setPopupVisible] = useState(false); // State for the popup visibility

      const handleToggle = (newState: boolean) => {
        row.original.active = newState;
        // Display popup depending on the state (on or off)
        setPopupVisible(true);
      };

      const handlePopupClose = () => {
        setPopupVisible(false);
      };

      return (
        <>
          <ToggleSwitch isOn={activeState} onChange={handleToggle} />
          {isPopupVisible && <Popup isOn={activeState} onClose={handlePopupClose} />}
        </>
      );
    },
    size: 100,
  },
];
