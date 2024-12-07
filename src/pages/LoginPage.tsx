// LoginForm.tsx
import { useNavigate } from 'react-router-dom';
import BKPrint from '../assets/BKPrint.svg?react';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Check the username and password
    if (username === 'user' && password === 'user') {
      // Navigate to /user if username and password are 'user'
      navigate('/user');
    } else if (username === 'admin' && password === 'admin') {
      // Navigate to /admin if username and password are 'admin'
      navigate('/admin');
    } else {
      // Handle incorrect login (optional)
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="flex h-full w-full truncate bg-white p-[12px]">
      <div className="flex w-[30%] flex-col justify-start p-[30px]">
        <div className="absolute -left-4 mb-[20px] flex w-[30%] justify-center text-[24px] font-bold text-[#1a73e8]">
          <BKPrint />
        </div>
        <div className="flex h-full flex-col justify-center">
          <h2 className="mb-[10px] text-4xl font-bold text-[#333]">Đăng nhập</h2>
          <p className="mb-[20px] text-[14px] text-[#666]">Nhập thông tin tài khoản của bạn</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-[15px] w-full">
              <label htmlFor="username" className="mb-[5px] block text-[12px] text-[#555]">
                Tài khoản
              </label>
              <input
                className="w-full rounded-[5px] border-[1px] border-solid p-[10px]"
                type="text"
                id="username"
                placeholder="Tài khoản"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-[15px] w-full">
              <label htmlFor="password" className="mb-[5px] block text-[12px] text-[#555]">
                Mật khẩu
              </label>
              <input
                className="mb-[15px] w-full rounded-[5px] border-[1px] border-solid p-[10px]"
                type="password"
                id="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-[20px] flex items-center text-[12px] text-[#666]">
              <input className="mr-[5px]" type="checkbox" id="rememberMe" />
              <label className="font-bold" htmlFor="rememberMe">
                Ghi nhớ đăng nhập của bạn
              </label>
            </div>
            <button
              className="w-full cursor-pointer rounded-[5px] bg-[#1A2E98] p-[10px] text-[16px] text-[#fff] hover:bg-[#1669c1]"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center self-stretch overflow-hidden rounded-xl bg-[#e9ecef]">
        <img className="h-screen w-full object-cover" src="src/assets/BKImg.jpeg" alt="University Building" />
      </div>
    </div>
  );
}
