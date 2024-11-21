import 'react-toastify/dist/ReactToastify.css';

export default function CustomToast({ successs }: { successs: boolean }) {
  return (
    <div
      className={`min-w[400px] flex w-full items-center justify-between ${successs ? 'text-[#525A92]' : 'text-[#BA1A1A]'} `}
    >
      <span className="text-sm font-bold text-inherit">
        Yêu cầu {successs ? 'thành công, máy đang in tài liệu' : 'thất bại, yêu cầu bị hủy bỏ'}
      </span>
      <button
        className="text-sm font-bold text-inherit underline hover:no-underline focus:outline-none"
        onClick={() => alert('Chi tiết clicked!')}
      >
        Chi tiết
      </button>
    </div>
  );
}
