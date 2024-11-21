import { useLocation, useNavigate } from 'react-router-dom';
import CheckedIcon from '../../assets/CheckedIcon.svg?react';
import NavigateNext from '../../assets/NavigateNext.svg?react';

interface ProgressButtonProps {
  state: number;
  text: string;
  path: string;
}

const progressButtons: ProgressButtonProps[] = [
  {
    state: 1,
    text: 'Đăng tải tài liệu',
    path: '/print',
  },
  {
    state: 2,
    text: 'Điều chỉnh',
    path: '/print/select-properties',
  },
  {
    state: 3,
    text: 'Chọn máy in',
    path: '/print/select-printers',
  },
  {
    state: 4,
    text: 'Xác nhận',
    path: '/print/confirm',
  },
  { state: 5, text: 'sucess', path: '/print/success' },
];

export default function PrintProgress() {
  const navigate = useNavigate();
  const location = useLocation();

  const current = progressButtons.find((button) => button.path === location.pathname);

  return (
    <>
      <p className="text-justify">
        Bạn có thể dễ dàng tải tài liệu lên hệ thống dưới nhiều định dạng khác nhau như .docx, .pdf, và nhiều định dạng
        khác. Trang web của chúng tôi được tối ưu hóa để hoạt động mượt mà trên nhiều nền tảng, bao gồm máy tính để bàn,
        laptop, và điện thoại di động, giúp bạn truy cập và sử dụng tiện lợi ở bất kỳ đâu. Khi bạn đã sẵn sàng in, chỉ
        cần nhấp vào nút "In tài liệu" để bắt đầu quá trình. Chúng tôi cam kết mang đến trải nghiệm in ấn tiện lợi và
        hiệu quả, hỗ trợ bạn hoàn thành công việc một cách nhanh chóng và chuyên nghiệp.
      </p>

      {/* PROGRESS */}
      <div className="w-full pt-5">
        <div className="flex justify-between">
          {progressButtons.map(
            (but) =>
              but.state < 5 && (
                <button key={but.path} className="flex items-center gap-4" onClick={() => navigate(but.path)}>
                  <p
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-[2px] text-center text-sm font-semibold ${current && current.state > but.state ? 'border-inherit' : 'border-[#3648AF]'}`}
                  >
                    {current && current.state > but.state ? <CheckedIcon className="fill-[#3648AF]" /> : but.state}
                  </p>
                  <span className="flex h-6 items-center gap-5">
                    {but.text}
                    <NavigateNext />
                  </span>
                </button>
              ),
          )}
        </div>
      </div>
    </>
  );
}
