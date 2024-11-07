import './Notifications.css';

const notifications = [
  {
    id: 1,
    title: '[THÔNG TIN] YÊU CẦU CỦA BẠN ĐÃ THÀNH CÔNG',
    time: '8:35PM',
    content:
      'At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit scelerisque massa justo et convallis mauris. ',
    content2:
      'Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cuus sed aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse scelerisque vitae ut mauris odio. Et enim curabitur rius massa velit gravida sed et. Quam arcu porttitor massa cursus.',
  },
  {
    id: 2,
    title: '[THÔNG TIN] YÊU CẦU KHÔNG THÀNH CÔNG',
    time: '8:35PM',
    content:
      'At vitae vel dui gravida. Sem lacus cursus cursus neque nulla. Id amet rutrum sagittis turpis. Nec elementum hac enim aliquam sed nunc faucibus nunc. Sit scelerisque massa justo et convallis mauris. ',
    content2:
      'Eu sed sed pretium pellentesque urna auctor. Sem id rhoncus arcu ullamcorper. Nunc natoque magna in morbi ac aliquet magnis turpis. Justo quam tincidunt cuus sed aliquam malesuada semper consectetur pharetra. Faucibus quis condimentum habitasse scelerisque vitae ut mauris odio. Et enim curabitur rius massa velit gravida sed et. Quam arcu porttitor massa cursus.',
  },
  // Thêm các thông báo khác theo cấu trúc trên
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      {/* <header className="notifications-header">
                <h2>Thông báo</h2>
                <div className="user-greeting">Xin Chào, Tuấn Anh</div>
            </header> */}
      <div className="notifications-list">
        {notifications
          .filter((notification) => notification.id == 2)
          .map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-header">
                <span className="notification-title-error">{notification.title}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-content">{notification.content}</p>
              <br></br>
              <p className="notification-content">{notification.content2}</p>
            </div>
          ))}
      </div>

      <div className="notifications-list">
        {notifications
          .filter((notification) => notification.id == 2)
          .map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-header">
                <span className="notification-title-error">{notification.title}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-content">{notification.content}</p>
              <br></br>
              <p className="notification-content">{notification.content2}</p>
            </div>
          ))}
      </div>

      <div className="notifications-list">
        {notifications
          .filter((notification) => notification.id == 1)
          .map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-header">
                <span className="notification-title">{notification.title}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-content">{notification.content}</p>
              <br></br>
              <p className="notification-content">{notification.content2}</p>
            </div>
          ))}
      </div>

      <div className="notifications-list">
        {notifications
          .filter((notification) => notification.id == 1)
          .map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-header">
                <span className="notification-title">{notification.title}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-content">{notification.content}</p>
              <br></br>
              <p className="notification-content">{notification.content2}</p>
            </div>
          ))}
      </div>

      <div className="notifications-list">
        {notifications
          .filter((notification) => notification.id == 1)
          .map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-header">
                <span className="notification-title">{notification.title}</span>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-content">{notification.content}</p>
              <br></br>
              <p className="notification-content">{notification.content2}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
