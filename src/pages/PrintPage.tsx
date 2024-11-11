import NavigateNext from '../assets/NavigateNext.svg?react';
import UploadImg from '../assets/UploadImg.svg?react';

export default function PrintPage() {
  return (
    <div className="h-full pt-8">
      {/* INFORMATION */}
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
          <div className="flex items-center gap-4">
            <p className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-center text-sm font-semibold">
              1
            </p>
            <span className="flex h-6 items-center gap-5">
              Đăng tải tài liệu <NavigateNext />
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-center text-sm font-semibold">
              2
            </p>
            <span className="flex h-6 items-center gap-5">
              Đăng tải tài liệu <NavigateNext />
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-center text-sm font-semibold">
              3
            </p>
            <span className="flex h-6 items-center gap-5">
              Đăng tải tài liệu <NavigateNext />
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-center text-sm font-semibold">
              4
            </p>
            <span className="flex h-6 items-center gap-5">
              Đăng tải tài liệu <NavigateNext />
            </span>
          </div>
        </div>
      </div>

      {/* Drag and Drop Area */}
      <div className="flex h-full w-full justify-center pt-[100px]">
        <div className="relative w-fit rounded-lg border-4 border-dashed border-[#767680] p-8 px-[120px] py-[180px]">
          <div className="flex flex-col justify-center text-center">
            <div className="mb-5 flex justify-center">
              <UploadImg />
            </div>

            <div>
              <p className="text-[28px] font-medium">
                Kéo thả tài liệu hoặc <span className="font-medium text-[#5D6ED7]"> đăng tải</span>
              </p>

              <p className="text-[20px] text-[#6B7280]">Kích thước tối đa 50 Mb</p>
            </div>

            <input type="file" id="upload" className="absolute left-0 h-full w-full cursor-pointer opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
