import BalanceIcon from '../assets/coin2.svg?react';
import PrintedIcon from '../assets/Group.svg?react';
import PaperIcon from '../assets/paper2.svg?react';
import LoginIcon from '../assets/enter1.svg?react';
import { SVGProps } from 'react';

type Data = {
  title: string;
  value: string;
  unit: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};
export const DashboardData: Array<Data> = [
  {
    title: 'Số dư',
    value: '200.000',
    unit: 'VNĐ',
    icon: BalanceIcon,
  },
  {
    title: 'Số giấy đã in',
    value: '200',
    unit: 'Tờ',
    icon: PrintedIcon,
  },
  {
    title: 'Số giấy hiện có',
    value: '5000',
    unit: 'Tờ',
    icon: PaperIcon,
  },
  {
    title: 'Tổng lượt đăng nhập',
    value: '100',
    unit: 'Lượt',
    icon: LoginIcon,
  },
];
