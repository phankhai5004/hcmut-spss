import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import NavigateNext from '../../assets/NavigateNext.svg?react';
import NextProgressButton from '../NextProgressButton/NextProgressButton';
import PageSizeSelector from '../Table/ItemPerPageSelector';

type Printer = {
  id: string;
  location: string;
  bk: 'BKLTK' | 'BKTD';
};

const data: Printer[] = [
  { id: '27Toshiba', location: 'A3-210', bk: 'BKTD' },
  { id: '22Brothers', location: 'C4-304', bk: 'BKLTK' },
  { id: 'u2i3na', location: 'B6-102', bk: 'BKTD' },
  { id: 'GH700U', location: 'D2-201', bk: 'BKLTK' },
  { id: 'HN7000GN', location: 'E1-101', bk: 'BKLTK' },
  { id: 'HA45YI', location: 'B6-102', bk: 'BKTD' },
  { id: 'Canon72', location: 'A3-210', bk: 'BKTD' },
  { id: '802JKCanon', location: 'C4-304', bk: 'BKLTK' },
  { id: '90BADSF', location: 'D2-201', bk: 'BKLTK' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
  { id: '78HHGGY', location: 'E1-101', bk: 'BKTD' },
];

const columns: ColumnDef<Printer>[] = [
  {
    accessorKey: 'id',
    header: () => <p>Mã máy in</p>,
    cell: (info) => <p>{info.getValue() as string}</p>,
  },
  {
    accessorKey: 'location',
    header: () => <p>Địa chỉ</p>,
    cell: (info) => <p>{info.getValue() as string}</p>,
  },
  {
    accessorKey: 'bk',
    header: () => <p>Cơ sở</p>,
    cell: (info) => <p>{info.getValue() as string}</p>,
  },
  {
    accessorKey: 'status',
    header: () => <p>Trạng thái</p>,
    cell: () => (
      <button className="h-10 w-full rounded-lg border bg-[#525A92] text-white hover:border-solid hover:border-[#525A92] hover:bg-inherit hover:text-[#525A92]">
        Chọn
      </button>
    ),
  },
];

export default function SelectPrintersTable() {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col items-end overflow-hidden rounded-xl">
      <table className="w-full border-collapse rounded-lg bg-white text-left shadow-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-12 rounded-t-lg bg-gray-100 pb-2 text-gray-700">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-b border-gray-300 bg-[#E9E7EF] px-4 py-2 font-semibold">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-gray-700 hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-t border-gray-300 bg-[#F5F2FA] px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`flex w-full justify-between pt-5`}>
        <div className="flex w-fit gap-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="flex size-10 items-center justify-center rounded-xl border-[1px] border-solid border-[#767680]"
          >
            <NavigateNext className="rotate-180" />
          </button>
          <div className="flex h-10 items-center justify-center">
            <p>
              {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
            </p>
          </div>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="flex size-10 items-center justify-center rounded-xl border-[1px] border-solid border-[#767680]"
          >
            <NavigateNext />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <p>Số lượng hàng mỗi trang</p>
          <PageSizeSelector table={table} />
        </div>
      </div>

      <NextProgressButton />
    </div>
  );
}
