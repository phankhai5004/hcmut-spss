import { useNavigate } from 'react-router-dom';

export default function AdminAddPrinterPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-[20px] font-semibold">Thông tin máy in</h1>

        <div className="flex justify-between pt-4">
          <div className="min-w-[440px] pb-4">
            <label htmlFor="trang" className="pb-2 text-sm font-semibold">
              Hãng máy in
            </label>
            <input
              type="text"
              placeholder="Toshiba"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
            />
          </div>

          <div className="min-w-[440px] pb-4">
            <label htmlFor="trang" className="pb-2 text-sm font-semibold">
              Vị trí
            </label>
            <input
              type="text"
              placeholder="B6-102"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
            />
          </div>

          <div className="min-w-[440px] pb-4">
            <label htmlFor="trang" className="pb-2 text-sm font-semibold">
              Cơ sở
            </label>
            <input
              type="text"
              placeholder="LTK"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-[20px] font-semibold">Chức năng</h1>

        <div className="flex gap-20">
          <label className="flex items-center gap-2 p-2">
            <input type="checkbox" className="m-4 size-4 border-[2px]" />
            In hai mặt
          </label>

          <label className="flex items-center gap-2 p-2">
            <input type="checkbox" className="m-4 size-4 border-[2px]" />
            In màu
          </label>

          <label className="flex items-center gap-2 p-2">
            <input type="checkbox" className="m-4 size-4 border-[2px]" />
            Scan tài liệu
          </label>

          <label className="flex items-center gap-2 p-2">
            <input type="checkbox" className="m-4 size-4 border-[2px]" />
            In nhiều loại giấy
          </label>
        </div>
      </div>

      <div className="ml-auto flex w-[360px] gap-4 self-end pt-[160px]">
        <button
          className="w-full rounded-xl border border-solid border-[#767680] py-[10px] text-center text-base font-semibold text-[#525A92]"
          onClick={() => navigate('/admin/printer-list')}
        >
          Hủy bỏ
        </button>
        <button
          className="w-full rounded-xl bg-[#525A92] font-semibold text-white"
          onClick={() => navigate('/admin/printer-list')}
        >
          Xác nhận
        </button>
      </div>
    </>
  );
}
