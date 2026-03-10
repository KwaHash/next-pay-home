import BuildingProgress from '@/components/organisms/building-progress'
import FavoriteCompanies from '@/components/organisms/favorite-companies'
import { cn } from '@/lib/utils'
import { FaCalendar, FaComment, FaHeart } from 'react-icons/fa'

type NotificationType = 'message' | 'event' | 'like'

interface Notification {
  id: number
  type: NotificationType
  title: string
  content: string
  date: string
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'message',
    title: '新しいメッセージが届いています',
    content: '自然工房ホームから返信がありました',
    date: '5分前',
  },
  {
    id: 2,
    type: 'event',
    title: '予約したイベントが近づいています',
    content: '明日14:00から「自然素材の家づくり勉強会」が開催されます',
    date: '1時間前',
  },
  {
    id: 3,
    type: 'like',
    title: 'あなたの投稿にいいねがつきました',
    content: '「二階建ての収納スペースについて相談です」に3件のいいねがつきました',
    date: '2時間前',
  }
]

interface NotificationCardProps {
  notification: Notification
}

const NotificationCard = ({ notification }: NotificationCardProps) => (
  <div className='p-4 rounded border bg-white'>
    <div className='flex items-start gap-4'>
      <div
        className={cn('p-2 rounded-full',
          notification.type === 'message' && 'bg-blue-100 text-blue-600',
          notification.type === 'event' && 'bg-green-100 text-green-600',
          notification.type === 'like' && 'bg-pink-100 text-pink-600'
        )}
      >
        {notification.type === 'message' && <FaComment className='w-5 h-5' />}
        {notification.type === 'event' && <FaCalendar className='w-5 h-5' />}
        {notification.type === 'like' && <FaHeart className='w-5 h-5' />}
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between mb-1'>
          <h3 className='font-medium'>{notification.title}</h3>
          <span className='hidden lg:block text-sm text-gray-500'>{notification.date}</span>
        </div>
        <p className='text-gray-600 text-sm'>{notification.content}</p>
      </div>
    </div>
  </div>
)

const NotificationsTab = () => {
  return (
    <div className='flex flex-col gap-4'>
      <BuildingProgress />
      <div className='flex flex-col gap-4 mb-6 px-6 lg:px-0'>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
      <FavoriteCompanies />
    </div>
  )
}

export default NotificationsTab