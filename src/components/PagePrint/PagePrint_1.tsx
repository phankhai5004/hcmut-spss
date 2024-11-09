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
      <div className="container-fluid m-0 mt-5">
        <div className="row justify-content-center">
          <div className="col-3">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Number1Choosen />
              <span className="ml-4 mr-5">Đăng tải tài liệu</span>
              <NavigateNext />
            </div>
          </div>
          <div className="col-3 box">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Number2 />
              <span className="ml-4 mr-5">Điều chỉnh</span>
              <NavigateNext />
            </div>
          </div>

          <div className="col-3 box">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Number3 />
              <span className="ml-4 mr-5">Chọn máy in</span>
              <NavigateNext />
            </div>
          </div>
          <div className="col-3 box">
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Number2 />
              <span className="ml-4">Xác nhận</span>
            </div>
          </div>
        </div>
      </div>
      {/* #################### */}

      {/* #####################    Khu này là chỗ kéo thả tài liệu */}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-3"></div>
          <div className="area col-6 round">
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="justify-content-center flex-container pl-5">
                <UploadImg />
              </div>
              <h3 className="inline">Kéo thả tài liệu hoặc </h3>
              <h3 className="inline" style={{ color: '#3648af' }}>
                đăng tải
                <h4 style={{ color: 'gray' }}>Kích thước tối đa 50 Mb</h4>
              </h3>
            </div>
            <input type="file" id="upload" />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
export default UploadDoc;
