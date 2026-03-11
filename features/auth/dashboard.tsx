'use client'

import PostManagementTab from '@/components/company-tab/post-management-tab'
import MenuItem from '@/components/molecules/sidebar/menu-item'
import CompanyInfoTab from '@/components/tab/company-info-tab'
import { Building2, Calendar, FileText, MessageCircle, PenSquare, Settings, Users } from 'lucide-react'
import { useState } from 'react'
// import DocumentRequestsTab from './dashboard/DocumentRequestsTab'
// import EventManagement from './dashboard/EventManagement'
// import MessagesTab from './dashboard/MessagesTab'
// import PostManagement from './dashboard/PostManagement'
// import SettingsTab from './dashboard/SettingsTab'
// import VisitorManagement from './dashboard/VisitorManagement'

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('company-info')

  const menuItems = [
    { id: 'company-info', icon: <Building2 className='w-5 h-5' />, text: '企業情報編集' },
    { id: 'posts', icon: <PenSquare className='w-5 h-5' />, text: '投稿管理' },
    { id: 'events', icon: <Calendar className='w-5 h-5' />, text: 'イベント管理' },
    { id: 'visitors', icon: <Users className='w-5 h-5' />, text: '来場者管理' },
    { id: 'documents', icon: <FileText className='w-5 h-5' />, text: '資料請求管理' },
    { id: 'messages', icon: <MessageCircle className='w-5 h-5' />, text: 'メッセージ' },
    { id: 'settings', icon: <Settings className='w-5 h-5' />, text: '設定' }
  ]

  return (
    <div className='w-full flex-grow bg-gray-50'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 md:py-20'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>管理画面</h2>
          <p className='text-base sm:text-lg md:text-xl font-medium'>
            管理業務をこの画面からまとめて行えます
          </p>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto p-4 sm:p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 xl:gap-8'>
          <div className='lg:col-span-1'>
            <div className='bg-white rounded shadow-lg overflow-hidden'>
              <div className='p-4 bg-indigo-600 text-white'>
                <h2 className='font-semibold'>自然工房ホーム</h2>
                <p className='text-sm opacity-80'>管理者ダッシュボード</p>
              </div>
              <nav className='divide-y'>
                {menuItems.map(item => (
                  <MenuItem
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id)}
                  />
                ))}
              </nav>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='bg-white rounded shadow-lg p-0 lg:p-6'>
              { activeTab === 'company-info' && <CompanyInfoTab /> }
              { activeTab === 'posts' && <PostManagementTab /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage