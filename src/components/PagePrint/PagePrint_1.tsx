import 'bootstrap/dist/css/bootstrap.css';
import Number1Choosen from '../../assets/Number1Choosen.svg?react';
import Number2 from '../../assets/Number2.svg?react';
import Number3 from '../../assets/Number3.svg?react';
import NavigateNext from '../../assets/NavigateNext.svg?react';
import UploadImg from '../../assets/UploadImg.svg?react';
import './UploadArea.css';

function UploadDoc() {
  return (
    // ###############Khúc này phần nav đang ở mục nào
    <div>
      <div className="m-0 mt-5 w-full">
        <div className="flex justify-center space-x-4">
          <div className="flex w-1/4 items-center justify-center">
            <Number1Choosen />
            <span className="ml-4 mr-5">Đăng tải tài liệu</span>
            <NavigateNext />
          </div>
          <div className="flex w-1/4 items-center justify-center">
            <Number2 />
            <span className="ml-4 mr-5">Điều chỉnh</span>
            <NavigateNext />
          </div>
          <div className="flex w-1/4 items-center justify-center">
            <Number3 />
            <span className="ml-4 mr-5">Chọn máy in</span>
            <NavigateNext />
          </div>
          <div className="flex w-1/4 items-center justify-center">
            <Number2 />
            <span className="ml-4">Xác nhận</span>
          </div>
        </div>
      </div>

      {/* Khu này là chỗ kéo thả tài liệu */}
      <div className="mt-5 w-full">
        <div className="flex justify-center">
          <div className="w-1/4"></div>
          <div className="area relative rounded-lg bg-gray-100 p-8">
            <div className="absolute inset-1/3 -translate-x-1 -translate-y-1/2 transform text-center">
              <div className="mb-5 flex justify-center">
                <UploadImg />
              </div>
              <h3 className="inline">Kéo thả tài liệu hoặc </h3>
              <h3 className="inline text-blue-600">
                đăng tải
                <h4 className="text-gray-500">Kích thước tối đa 50 Mb</h4>
              </h3>
            </div>
            <input type="file" id="upload" className="absolute inset-0 cursor-pointer opacity-0" />
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
}
export default UploadDoc;
