import SearchIcon from '../../assets/SearchIcon.svg?react';
import Dropdown from '../Dropdown/Dropdown';

const printerOptions = [
  { value: 'hp', label: 'HP' },
  { value: 'canon', label: 'Canon' },
  { value: 'epson', label: 'Epson' },
];

// const locationOptions = [
//   { value: 'hcm', label: 'Hồ Chí Minh' },
//   { value: 'hn', label: 'Thủ đức' },
// ];

const statusOptions = [
  { value: 'success', label: 'Thành công' },
  { value: 'fail', label: 'Thất bại' },
];

export default function HistoryFilter() {
  return (
    <div className="rounded-lg px-8 py-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_2px_6px_2px_rgba(0,0,0,0.15)]">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên máy in"
            className="w-full rounded-lg border bg-[#EFEDF4] px-4 py-2 pl-10 text-[#46464F]" // Added pl-10 for left padding
          />
          <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 fill-[#46464F]" />
        </div>

        <div className="flex gap-4 p-4">
          <Dropdown
            icon="printer"
            label="Hãng máy in"
            options={printerOptions}
            onChange={(value) => console.log(value)}
          />

          {/* <Dropdown icon="building" label="Cơ sở" options={locationOptions} onChange={(value) => console.log(value)} /> */}

          <Dropdown icon="clock" label="Trạng thái" options={statusOptions} onChange={(value) => console.log(value)} />
        </div>

        <button className="rounded-lg bg-[#525A92] px-4 py-2 text-white">Tìm kiếm</button>
      </div>
    </div>
  );
}
