import { notifications } from '../constants/notifications';

export default function UserNotificationPage() {
  return (
    <div className="w-full bg-white pt-10">
      <div className="flex flex-col gap-7">
        {notifications.map((notification) => (
          <div key={notification.id} className="rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
            <div className="mb-3 flex justify-between">
              <span className={`font-bold ${notification.success ? 'text-blue-900' : 'text-red-700'}`}>
                {notification.title}
              </span>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-700">{notification.content}</p>
            <br />
            <p className="text-sm text-gray-700">{notification.content2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
