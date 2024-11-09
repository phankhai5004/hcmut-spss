import { DashboardData } from '../constants/DashboardData';
import '../components/DashboardData.css';

const DashboardDatas = () => {
  return (
    <div className="flex">
      {DashboardData.map((item, index) => (
        <div key={index} className="card">
          <div className="card-title">{item.title}</div>
          <div className="card-icon">
            <item.icon className="icon-class" />
          </div>
          <div className="card-value-container">
            <div className="card-value">{item.value}</div>
            <div className="card-subtitle">{item.unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardDatas;
