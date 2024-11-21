import SuccessIcon from '../../assets/Success.svg?react';

export default function SuccessPrint() {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-[160px]">
      <SuccessIcon className="size-[80px] rounded-full bg-[#525A92] fill-[#FFFFFF]" />

      <h1 className="pt-[60px] text-center text-[45px]">
        Yêu cầu của bạn đang được xử lý,
        <br /> vui lòng chờ thông báo
      </h1>
    </div>
  );
}
