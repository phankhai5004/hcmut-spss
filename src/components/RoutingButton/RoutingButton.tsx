import { ElementType } from 'react';
import { NavLink } from 'react-router-dom';

export type RoutingButtonProps = {
  text: string;
  to: string;
  icon: ElementType;
  end: boolean;
};

export default function RoutingButton({ text, to, icon: Icon, end }: RoutingButtonProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `group mt-3 flex h-10 w-full flex-col items-start justify-center gap-2 self-stretch rounded border-[1px] hover:border-[#000F5D] ${isActive ? 'border-[#000F5D]' : 'border-[#F5F2FA]'}`
      }
    >
      {({ isActive }) => (
        <div
          className={`flex flex-1 items-center gap-2 self-stretch py-[10px] pl-4 pr-[24px] group-hover:text-[#000F5D] ${isActive && 'border-[#000F5D]'}`}
        >
          {Icon && (
            <Icon
              className={`group-active: h-[18px] w-[18px] group-hover:fill-[#000F5D] ${isActive ? 'fill-[#000F5D]' : 'fill-[#525A92]'}`}
            />
          )}
          <p
            className={`text-[14px] font-normal group-hover:text-[#000F5D] ${isActive ? 'text-[#000F5D]' : 'text-[#525A92]'}`}
          >
            {text}
          </p>
        </div>
      )}
    </NavLink>
  );
}
