import { useNavigate } from 'react-router-dom';
import UploadImg from '../../assets/UploadImg.svg?react';
import { useState } from 'react';

export default function DragAndDrop() {
  const navigate = useNavigate(); // React Router's navigation hook
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setSelectedFile(file); // Optional: Store the file in state
      navigate('/dashboard/print/select-properties'); // Navigate to the desired path
    }
  };
  return (
    <div className="flex h-full w-full justify-center pt-[100px]">
      <div className="relative w-fit rounded-lg border-4 border-dashed border-[#767680] p-8 px-[120px] py-[180px]">
        <div className="flex flex-col justify-center text-center">
          <div className="mb-5 flex justify-center">
            <UploadImg />
          </div>

          <div>
            <p className="text-[28px] font-medium">
              Kéo thả tài liệu hoặc <span className="font-medium text-[#5D6ED7]"> đăng tải</span>
            </p>

            <p className="text-[20px] text-[#6B7280]">Kích thước tối đa 50 Mb</p>
          </div>

          <input
            onChange={handleFileChange}
            type="file"
            id="upload"
            className="absolute left-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
