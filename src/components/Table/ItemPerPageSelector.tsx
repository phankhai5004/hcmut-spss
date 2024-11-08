import { Table } from '@tanstack/react-table';
import NavigateNext from '../../assets/NavigateNext.svg?react';

interface PageSizeSelectorProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

const PageSizeSelector = <TData,>({ table, pageSizeOptions = [10, 20, 30, 50] }: PageSizeSelectorProps<TData>) => {
  return (
    <div className="relative flex items-center">
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        className="h-10 w-20 appearance-none rounded-xl border border-gray-300 bg-white px-6 text-sm"
      >
        {pageSizeOptions.map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <NavigateNext className="h-4 w-4 rotate-90" />
      </div>
    </div>
  );
};

export default PageSizeSelector;
