import NextProgressButton from '../NextProgressButton/NextProgressButton';
import PDFPreview from '../Preview/Preview';

export default function SelectProperties() {
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
                type="text"
                placeholder="All"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
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
                type="number"
                id="so-luong-ban-in"
                defaultValue={1}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
              />
            </div>

            {/* Số trang trên mỗi tờ */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="so-trang-moi-to" className="pb-2 text-sm font-semibold">
                Số trang trên mỗi tờ
              </label>
              <input
                type="number"
                id="so-trang-moi-to"
                defaultValue={1}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* PROPERTIES */}
        <div>
          <h1 className="pb-4 text-xl font-bold">Tuỳ chỉnh tài liệu</h1>

          <div className="flex flex-wrap justify-between gap-x-6">
            {/* Hướng in */}
            <div className="min-w-[360px] pb-4">
              <label htmlFor="huong-in" className="pb-2 text-sm font-semibold">
                Hướng in
              </label>
              <select id="huong-in" className="w-full rounded-lg border border-gray-300 bg-inherit px-3 py-2 shadow-lg">
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
                id="kich-thuoc"
                className="w-full rounded-lg border border-gray-300 bg-inherit px-3 py-2 shadow-lg"
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
                id="so-mat-in"
                className="w-full rounded-lg border border-gray-300 bg-inherit px-3 py-2 shadow-lg"
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
              <select id="mau" className="w-full rounded-lg border border-gray-300 bg-inherit px-3 py-2 shadow-lg">
                <option>Trắng - đen</option>
                <option>Màu</option>
              </select>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <NextProgressButton />
      </div>

      {/* PREVIEW */}
      <PDFPreview />
    </div>
  );
}
