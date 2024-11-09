import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import NavigateNext from '../../assets/NavigateNext.svg?react';
import PageSizeSelector from './ItemPerPageSelector';

interface DashboardPrintHistoryProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  hidePSS: boolean;
}

export default function Table<TData, TValue>({ data, columns, hidePSS }: DashboardPrintHistoryProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="w-full overflow-hidden rounded-xl border-[1px] border-solid border-[#C7C5D0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_2px_6px_2px_rgba(0,0,0,0.15)]">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b-[1px] border-r-[1px] border-solid border-[#C7C5D0] bg-[#E9E7EF]"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3" style={{ width: header.column.columnDef.size }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b-[1px] border-solid border-[#C7C5D0]">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-3"
                    style={{ width: cell.column.columnDef.size, maxWidth: cell.column.columnDef.size }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* NAVIGATE BUTTONS */}
      <div className={`flex justify-between pt-5 ${hidePSS ? 'hidden' : ''}`}>
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
    </div>
  );
}
