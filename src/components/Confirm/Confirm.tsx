import ErrorIcon from '../../assets/ErrorIcon.svg?react';

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import NextProgressButton from '../NextProgressButton/NextProgressButton';
import PDFPreview from '../Preview/Preview';

type Printer = {
  id: string;
  location: string;
  bk: 'BKLTK' | 'BKTD';
};

const data: Printer[] = [{ id: '27Toshiba', location: 'A3-210', bk: 'BKTD' }];

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
];

export default function Confirm() {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="grid h-full grid-cols-2 gap-10 pt-10">
      {/* PROPERTIES */}
      <div className="flex flex-col items-end">
        {/* TRANG */}
        <div>
          <h1 className="pb-4 text-[20px] font-semibold">Trang</h1>

          <div className="flex flex-wrap justify-between gap-x-4">
            {/* Trang Selection */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="trang" className="pb-2 text-sm font-semibold">
                Trang
              </label>
              <input
                disabled
                type="text"
                placeholder="All"
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              />
              {/* SUPPORTIVE TEXT */}
              <p className="pt-2 text-[13px] text-[#99A1B0]">
                Ví dụ: Tất cả - All, Lẻ - Odd, Chẵn - Even, Khoảng - 3-12
              </p>
            </div>

            {/* Số lượng bản in */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="so-luong-ban-in" className="pb-2 text-sm font-semibold">
                Số lượng bản in
              </label>
              <input
                disabled
                type="number"
                id="so-luong-ban-in"
                defaultValue={1}
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              />
            </div>

            {/* Số trang trên mỗi tờ */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="so-trang-moi-to" className="pb-2 text-sm font-semibold">
                Số trang trên mỗi tờ
              </label>
              <input
                disabled
                type="number"
                id="so-trang-moi-to"
                defaultValue={1}
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* PROPERTIES */}
        <div>
          <h1 className="pb-4 pt-10 text-xl font-bold">Tuỳ chỉnh tài liệu</h1>

          <div className="flex flex-wrap justify-between gap-x-6">
            {/* Hướng in */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="huong-in" className="pb-2 text-sm font-semibold">
                Hướng in
              </label>
              <select
                disabled
                id="huong-in"
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              >
                <option>In dọc</option>
                <option>In ngang</option>
              </select>
            </div>

            {/* Kích thước */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="kich-thuoc" className="pb-2 text-sm font-semibold">
                Kích thước
              </label>
              <select
                disabled
                id="kich-thuoc"
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              >
                <option>A4</option>
                <option>A3</option>
                <option>A5</option>
              </select>
            </div>

            {/* Số mặt in */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="so-mat-in" className="pb-2 text-sm font-semibold">
                Số mặt in
              </label>
              <select
                disabled
                id="so-mat-in"
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              >
                <option>Một mặt</option>
                <option>Hai mặt</option>
              </select>
            </div>

            {/* Màu */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="mau" className="pb-2 text-sm font-semibold">
                Màu
              </label>
              <select
                id="mau"
                disabled
                className="w-full rounded-lg border border-gray-300 bg-[#E9E7EF] px-3 py-2 shadow-lg"
              >
                <option>Trắng - đen</option>
                <option>Màu</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full overflow-hidden rounded-xl">
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
        </div>

        <div className="mt-10 flex self-start rounded-xl bg-[#FFDAD6] px-3 py-2">
          <ErrorIcon className="fill-[#410002]" />
          <p className="text-[#BA1A1A]">Giấy không đủ vui lòng mua thêm</p>
        </div>

        {/* BUTTON */}
        <NextProgressButton />
      </div>

      {/* PREVIEW */}
      <PDFPreview />
    </div>
  );
}
