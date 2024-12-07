import UserIcon from '../assets/UserIcon.svg?react';
import Printer from '../assets/Printer.svg?react';
import { SVGProps } from 'react';

type Data = {
  title: string;
  value: string;
  unit: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};
export const AdminDashboardData: Array<Data> = [
  {
    title: 'Người dùng',
    value: '2000',
    unit: 'Người dùng',
    icon: UserIcon,
  },
  {
    title: 'Số lượng máy in',
    value: '150',
    unit: 'Máy in',
    icon: Printer,
  },
];
