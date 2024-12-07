import WarningIcon from '../../assets/WarningIcon.svg?react';
import InfoIcon from '../../assets/InfoIcon.svg?react';

export default function Popup({ onClose, isOn }: { onClose: () => void; isOn: boolean }) {
  if (isOn) {
    return <OpenPopup onClose={onClose} />;
  }

  return <ClosePopup onClose={onClose} />;
}

export function ClosePopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="flex h-1/3 w-[650px] flex-col items-center justify-center rounded bg-white p-6 shadow-lg">
        <p className="text-[32px] font-semibold text-[#DE3730]">Tắt máy in</p>

        <WarningIcon />

        <p className="text-[20px] font-medium">Bạn có muốn tắt máy in này không?</p>
        <p className="text-base font-medium text-[#DE3730]">Máy in này sẽ không nhận yêu cầu nữa</p>
        <p className="text-base font-medium">Thông báo sẽ được gửi tới toàn bộ người dùng</p>
        <button onClick={onClose} className="mt-4 rounded bg-[#DE3730] px-4 py-2 text-white">
          Xác nhận
        </button>
      </div>
    </div>
  );
}

export function OpenPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="flex h-1/3 w-[650px] flex-col items-center justify-center rounded bg-white p-6 shadow-lg">
        <p className="text-[32px] font-semibold text-[#525A92]">Bật máy in</p>

        <InfoIcon />

        <p className="text-[20px] font-medium">Bạn có muốn tắt máy in này không?</p>
        <p className="text-base font-medium text-[#525A92]">Máy in này sẽ không nhận yêu cầu nữa</p>
        <p className="text-base font-medium">Thông báo sẽ được gửi tới toàn bộ người dùng</p>
        <button onClick={onClose} className="mt-4 rounded bg-[#525A92] px-4 py-2 text-white">
          Xác nhận
        </button>
      </div>
    </div>
  );
}
