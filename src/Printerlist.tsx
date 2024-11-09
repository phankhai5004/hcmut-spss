export default function PrinterlistScreen() {
  return (
    <>
      <div className="flex h-screen bg-[#FBF8FF]">
        {/* Sidebar */}
        <aside className="flex w-1/5 flex-col justify-between bg-indigo-100 p-6">
          <div className="mb-6 text-center text-xl font-bold text-blue-700">BKPrint</div>
        </aside>

        {/* Main Component */}
        <div className="flex w-4/5 flex-col p-8">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="pb-3 text-4xl font-semibold">Danh sách máy in</h1>
            <div className="text-gray-500">Xin Chào, Tuấn Anh</div>
          </div>

          {/* Divider Line */}
          <hr className="mb-5 pb-1" style={{ borderColor: '#C7C5D0', borderWidth: '1px 0 0 0' }} />

          {/* Summary Cards */}
          <div
            className="h-26 mb-6 grid grid-cols-3 overflow-hidden rounded-lg border shadow-lg"
            style={{ borderColor: '#C7C5D0', borderWidth: '2px' }}
          >
            <div className="p-4 pl-8" style={{ borderColor: '#C7C5D0' }}>
              <div className="" style={{ fontWeight: 500, fontSize: '14px' }}>
                Tổng số lượng máy in
              </div>
              <div className="flex items-start">
                <span className="mr-1 text-[32px] font-medium">80</span>
                <span className="-ml-1 mt-2 text-[12px] font-medium">Máy</span>
              </div>
            </div>
            <div className="border-l p-4 pl-8" style={{ borderColor: '#C7C5D0', borderWidth: '0 0 0 2px' }}>
              <div className="" style={{ fontWeight: 500, fontSize: '14px' }}>
                Số lượng máy in khả dụng
              </div>
              <div className="flex items-start">
                <span className="mr-1 text-[32px] font-medium">40</span>
                <span className="-ml-1 mt-2 text-[12px] font-medium">Máy</span>
              </div>
            </div>
            <div className="border-l p-4 pl-8" style={{ borderColor: '#C7C5D0', borderWidth: '0 0 0 2px' }}>
              <div className="" style={{ fontWeight: 500, fontSize: '14px' }}>
                Số lượng máy in đang sửa chữa
              </div>
              <div className="flex items-start">
                <span className="mr-1 text-[32px] font-medium">40</span>
                <span className="-ml-1 mt-2 text-[12px] font-medium">Máy</span>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mb-4 mt-2 rounded-lg border border-gray-300 p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Tìm kiếm theo tên máy in"
                className="flex-1 rounded-lg border bg-[#EFEDF4] px-4 py-2 text-[#46464F]"
              />
              <select className="rounded-lg border bg-gray-200 px-4 py-2">
                <option>Hãng máy in</option>
              </select>
              <select className="rounded-lg border bg-gray-200 px-4 py-2">
                <option>Cơ sở</option>
              </select>
              <select className="rounded-lg border bg-gray-200 px-4 py-2">
                <option>Trạng thái</option>
              </select>
              <button className="rounded-lg bg-[#525A92] px-4 py-2 text-white">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
