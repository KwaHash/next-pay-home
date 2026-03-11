'use client'

import MenuItem from '@/components/molecules/sidebar/menu-item'
import BookmarksTab from '@/components/tab/bookmark-tab'
import LikedPostsTab from '@/components/tab/liked-posts-tab'
import MessagesTab from '@/components/tab/messages-tab'
import NotificationsTab from '@/components/tab/notification-tab'
import SettingsTab from '@/components/tab/settings-tab'
import { Bell, Bookmark, Heart, MessageCircle, Settings, User } from 'lucide-react'
import { useState } from 'react'

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
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>山田太郎</h2>
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

export default MyPage