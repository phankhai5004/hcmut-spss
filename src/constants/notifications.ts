type Notification = {
  id: number;
  title: string;
  time: string;
  success: boolean;
  content: string;
  content2: string;
};

export const notifications: Notification[] = [
  {
    id: 1,
    title: '[THÔNG TIN] YÊU CẦU CỦA BẠN ĐÃ THÀNH CÔNG',
    time: '8:35PM',
    success: true,
    content:
      'At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit scelerisque massa justo et convallis mauris.',
    content2:
      'Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cuus sed aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse scelerisque vitae ut mauris odio. Et enim curabitur rius massa velit gravida sed et. Quam arcu porttitor massa cursus.',
  },
  {
    id: 2,
    title: '[THÔNG TIN] YÊU CẦU KHÔNG THÀNH CÔNG',
    time: '8:35PM',
    success: false,
    content:
      'At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit scelerisque massa justo et convallis mauris.',
    content2:
      'Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cuus sed aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse scelerisque vitae ut mauris odio. Et enim curabitur rius massa velit gravida sed et. Quam arcu porttitor massa cursus.',
  },
  {
    id: 3,
    title: '[CẢNH BÁO] CẬP NHẬT HỆ THỐNG',
    time: '10:15AM',
    success: true,
    content: 'Hệ thống sẽ được nâng cấp vào lúc 23:00 tối nay. Vui lòng lưu lại công việc của bạn trước thời điểm này.',
    content2:
      'Thời gian bảo trì dự kiến kéo dài 2 giờ. Chúng tôi sẽ cố gắng hoàn thành sớm nhất có thể. Xin cảm ơn sự thông cảm của bạn.',
  },
  {
    id: 4,
    title: '[LỖI] KHÔNG THỂ KẾT NỐI MÁY CHỦ',
    time: '11:20AM',
    success: false,
    content: 'Đã xảy ra lỗi kết nối với máy chủ. Vui lòng kiểm tra lại kết nối internet của bạn.',
    content2: 'Nếu vấn đề vẫn tiếp tục, hãy liên hệ với bộ phận kỹ thuật để được hỗ trợ. Hotline: 1900-xxxx',
  },
  {
    id: 5,
    title: '[THÔNG TIN] THANH TOÁN THÀNH CÔNG',
    time: '4:50PM',
    success: true,
    content: 'Giao dịch của bạn đã được xử lý thành công. Mã giao dịch: TRX-2024111-789',
    content2:
      'Hóa đơn điện tử sẽ được gửi đến email của bạn trong vòng 24 giờ tới. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.',
  },
  {
    id: 6,
    title: '[CẢNH BÁO] ĐĂNG NHẬP BẤT THƯỜNG',
    time: '3:15AM',
    success: false,
    content:
      'Phát hiện đăng nhập không thành công nhiều lần từ địa chỉ IP lạ. Vui lòng kiểm tra lại tài khoản của bạn.',
    content2: 'Để bảo vệ tài khoản, chúng tôi khuyến nghị bạn thay đổi mật khẩu ngay lập tức và bật xác thực 2 lớp.',
  },
  {
    id: 7,
    title: '[THÔNG BÁO] CẬP NHẬT THÔNG TIN CÁ NHÂN',
    time: '9:05AM',
    success: true,
    content: 'Thông tin cá nhân của bạn đã được cập nhật thành công trong hệ thống.',
    content2:
      'Vui lòng kiểm tra lại thông tin đã cập nhật. Nếu có bất kỳ thay đổi nào, bạn có thể chỉnh sửa trong phần Cài đặt tài khoản.',
  },
  {
    id: 8,
    title: '[LỖI] KHÔNG THỂ TẢI TỆP TIN',
    time: '1:30PM',
    success: false,
    content: 'Đã xảy ra lỗi trong quá trình tải tệp tin. Mã lỗi: ERR-404',
    content2:
      'Nguyên nhân có thể do tệp tin không tồn tại hoặc đã bị xóa. Vui lòng thử lại sau hoặc liên hệ với admin để được hỗ trợ.',
  },
  {
    id: 9,
    title: '[THÔNG BÁO] LỊCH HỌP MỚI',
    time: '5:25PM',
    success: true,
    content: 'Bạn có một cuộc họp mới được lên lịch vào ngày mai lúc 10:00AM.',
    content2: 'Chủ đề: Báo cáo quý III/2024. Địa điểm: Phòng họp 3A. Vui lòng xác nhận tham dự trong hệ thống.',
  },
];

export const adminNotifications: Notification[] = [
  {
    id: 1,
    title: '[THÔNG BÁO] LỊCH HỌP MỚI',
    time: '5:25PM',
    success: true,
    content: 'Bạn có một cuộc họp mới được lên lịch vào ngày mai lúc 10:00AM.',
    content2: 'Chủ đề: Báo cáo quý III/2024. Địa điểm: Phòng họp 3A. Vui lòng xác nhận tham dự trong hệ thống.',
  },
  {
    id: 2,
    title: '[CẢNH BÁO] MÁY IN ĐANG BẢO TRÌ',
    time: '2:00PM',
    success: false,
    content: 'Máy in của bạn đang trong quá trình bảo trì. Vui lòng chờ cho đến khi quá trình bảo trì hoàn tất.',
    content2:
      'Nếu bạn cần trợ giúp ngay lập tức, vui lòng liên hệ với bộ phận kỹ thuật hoặc chờ thông báo hoàn thành bảo trì.',
  },
  {
    id: 3, // New ID for the printer back online notification
    title: '[THÔNG TIN] MÁY IN ĐÃ HOẠT ĐỘNG TRỞ LẠI',
    time: '1:15PM', // Adjust time as needed
    success: true, // Indicating that the action was successful
    content:
      'Máy in của bạn đã hoàn tất bảo trì và hoạt động trở lại bình thường. Bạn có thể sử dụng máy in ngay bây giờ.',
    content2:
      'Chúng tôi cảm ơn sự kiên nhẫn của bạn trong suốt quá trình bảo trì. Nếu có vấn đề nào, vui lòng liên hệ với bộ phận kỹ thuật để được hỗ trợ.',
  },
];
