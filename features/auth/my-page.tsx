'use client'

import BookmarksTab from '@/components/tab/bookmark-tab'
import LikedPostsTab from '@/components/tab/liked-posts-tab'
import MessagesTab from '@/components/tab/messages-tab'
import NotificationsTab from '@/components/tab/notification-tab'
import SettingsTab from '@/components/tab/settings-tab'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Bell, Bookmark, Heart, MessageCircle, Settings, User } from 'lucide-react'
import { ReactNode, useState } from 'react'

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('notifications')

  return (
    <div className='w-full flex-grow bg-gray-50'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 sm:py-12 md:py-16'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-8'>
          <div className='flex items-center gap-6'>
            <div className='w-24 h-24 rounded-full bg-white flex items-center justify-center'>
              <User className='w-12 h-12 text-indigo-600' />
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>山田太郎</h1>
              <p className='opacity-90'>2024年に注文住宅を建てる予定です</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto p-4 sm:p-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 xl:gap-8'>
          <div className='lg:col-span-1'>
            <div className='bg-white rounded shadow-lg overflow-hidden'>
              <nav className='divide-y'>
                <MenuItem
                  icon={<Bell className='w-5 h-5' />}
                  text='お知らせ'
                  badge='3'
                  isActive={activeTab === 'notifications'}
                  onClick={() => setActiveTab('notifications')}
                />
                <MenuItem
                  icon={<Bookmark className='w-5 h-5' />}
                  text='ブックマーク'
                  isActive={activeTab === 'bookmarks'}
                  onClick={() => setActiveTab('bookmarks')}
                />
                <MenuItem
                  icon={<MessageCircle className='w-5 h-5' />}
                  text='メッセージ'
                  isActive={activeTab === 'messages'}
                  onClick={() => setActiveTab('messages')}
                />
                <MenuItem
                  icon={<Heart className='w-5 h-5' />}
                  text='いいねした投稿'
                  isActive={activeTab === 'liked'}
                  onClick={() => setActiveTab('liked')}
                />
                <MenuItem
                  icon={<Settings className='w-5 h-5' />}
                  text='設定'
                  isActive={activeTab === 'settings'}
                  onClick={() => setActiveTab('settings')}
                />
              </nav>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='bg-white rounded shadow-lg p-0 lg:p-6'>
              { activeTab === 'notifications' && <NotificationsTab /> }
              { activeTab === 'bookmarks' && <BookmarksTab /> }
              { activeTab === 'messages' && <MessagesTab /> }
              { activeTab === 'liked' && <LikedPostsTab /> }
              { activeTab === 'settings' && <SettingsTab /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MenuItemProps {
  icon: ReactNode;
  text: string;
  badge?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ icon, text, badge, isActive, onClick }: MenuItemProps) => (
  <Button
    onClick={onClick}
    className={cn(
      'w-full h-auto flex items-center justify-between bg-white px-6 py-4 transition-colors rounded-none duration-300',
      isActive ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' : 'hover:bg-gray-100 text-gray-700'
    )}
  >
    <div className='flex items-center gap-3'>
      {icon}
      <span>{text}</span>
    </div>
    {badge && (
      <span className='bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
        {badge}
      </span>
    )}
  </Button>
)

export default MyPage