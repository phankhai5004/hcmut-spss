import RadioButtonChecked from '../../assets/RadioButtonChecked.svg?react';

interface IStatusChip {
  success: boolean;
}

const StatusChip = ({ success }: IStatusChip) => {
  return (
    <div
      className={`flex min-h-[32px] w-full items-center justify-start gap-2 self-stretch rounded-lg border-[1px] border-solid px-0.5 py-1.5 pl-2 pr-4 text-sm font-medium ${success ? 'border-[#4355BC] text-[#4355BC]' : 'border-[#BA1A1A] text-[#BA1A1A]'}`}
    >
      <RadioButtonChecked className={`${success ? 'fill-[#4355BC]' : 'fill-[#BA1A1A]'}`} />
      <span className="my-auto self-stretch">Thành công</span>
    </div>
  );
};

export default StatusChip;
