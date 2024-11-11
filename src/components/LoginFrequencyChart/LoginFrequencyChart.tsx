import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { LoginStats } from '../../constants/LoginFrequencyStats';

export default function LoginFrequencyChart() {
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px #C7C5D0 solid',
        padding: '20px',
      }}
    >
      <h3
        style={{
          textAlign: 'left',
          color: 'black',
          fontSize: 14,
          fontFamily: 'Times New Roman',
          fontWeight: 'bold',
          lineHeight: '20px',
          letterSpacing: '0.10px',
          marginBottom: '20px',
        }}
      >
        Thống kê tần suất đăng nhập
      </h3>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={LoginStats} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0E9CFF"
            strokeWidth={2}
            dot={{ r: 3, fill: '#FFFFFF', stroke: '#0E9CFF', strokeWidth: 2 }}
          >
            <LabelList dataKey="value" position="top" style={{ fill: '#333333', fontWeight: 'bold' }} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
