import { useLocation, useNavigate } from 'react-router-dom';

export default function NextProgressButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClickNext = () => {
    if (location.pathname === '/print/select-properties') {
      navigate('/print/select-printers');
    } else if (location.pathname === '/print/select-printers') {
      navigate('/print/confirm');
    } else if (location.pathname === '/print/confirm') {
      navigate('/print/success');
    }
  };

  const handleOnClickPrev = () => {
    if (location.pathname === '/print/confirm') {
      navigate('/print/select-printers');
    } else if (location.pathname === '/print/select-printers') {
      navigate('/print/select-properties');
    } else if (location.pathname === '/print/select-properties') {
      navigate('/print');
    }
  };

  return (
    <div className="flex w-[360px] gap-4 self-end pt-[160px]">
      <button
        className="w-full rounded-xl border border-solid border-[#767680] py-[10px] text-center text-base font-semibold text-[#525A92]"
        onClick={handleOnClickPrev}
      >
        Quay lại
      </button>
      <button className="w-full rounded-xl bg-[#525A92] font-semibold text-white" onClick={handleOnClickNext}>
        {location.pathname === '/print/confirm' ? 'Xác nhận' : 'Tiếp tục'}
      </button>
    </div>
  );
}
