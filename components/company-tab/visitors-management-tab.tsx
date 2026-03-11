'use client'

import { Building2, Calendar, FileText, Mail, MapPin, MessageCircle, Phone, Search, Star } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface Visitor {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  status: 'visited' | 'scheduled' | 'cancelled';
  visitDate: string;
  eventId: number;
  notes?: string;
  feedback?: {
    rating: number;
    comment: string;
  };
  followUpStatus?: string;
  nextContactDate?: string;
}

export const initialVisitors: Visitor[] = [
  {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    phone: '090-xxxx-xxxx',
    location: '東京都世田谷区',
    propertyType: '注文住宅',
    status: 'visited',
    visitDate: '2024-03-15',
    eventId: 1,
    notes: '自然素材に強い関心あり。予算は4,000万円程度。',
    feedback: {
      rating: 4.5,
      comment: '詳しい説明で大変参考になりました。'
    },
    followUpStatus: '資料送付済み',
    nextContactDate: '2024-03-22'
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    phone: '090-xxxx-xxxx',
    location: '神奈川県横浜市',
    propertyType: '建て替え',
    status: 'scheduled',
    visitDate: '2024-03-20',
    eventId: 2,
    notes: '現在の住宅の老朽化が課題。',
    nextContactDate: '2024-03-21'
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    phone: '090-xxxx-xxxx',
    location: '東京都目黒区',
    propertyType: '注文住宅',
    status: 'visited',
    visitDate: '2024-03-10',
    eventId: 1,
    feedback: {
      rating: 5,
      comment: '実際の素材に触れられて良かったです。'
    },
    followUpStatus: '見積もり作成中'
  }
]

const VisitorManagement = () => {
  const [visitors, setVisitors] = useState<Visitor[]>(initialVisitors)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState('all')

  const filteredVisitors = visitors.filter(visitor => {
    const matchesSearch = 
      visitor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || visitor.status === selectedStatus
    const matchesEvent = selectedEvent === 'all' || visitor.eventId === parseInt(selectedEvent)
    return matchesSearch && matchesStatus && matchesEvent
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'visited':
        return 'bg-green-100 text-green-600'
      case 'scheduled':
        return 'bg-blue-100 text-blue-600'
      case 'cancelled':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'visited':
        return '来場済み'
      case 'scheduled':
        return '来場予定'
      case 'cancelled':
        return 'キャンセル'
      default:
        return status
    }
  }

  // const handleStatusChange = (visitorId: number, newStatus: string) => {
  //   setVisitors(visitors.map(visitor =>
  //     visitor.id === visitorId ? { ...visitor, status: newStatus } : visitor
  //   ))
  // }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>来場者管理</h2>
      </div>

      <div className='flex gap-4 mb-6'>
        <div className='flex-1 relative'>
          <Search className='w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none' />
          <Input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='名前やメールアドレスで検索...'
            className='pl-10 w-full'
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='ステータス' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>すべてのステータス</SelectItem>
            <SelectItem value='visited'>来場済み</SelectItem>
            <SelectItem value='scheduled'>来場予定</SelectItem>
            <SelectItem value='cancelled'>キャンセル</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedEvent} onValueChange={setSelectedEvent}>
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder='イベント' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>すべてのイベント</SelectItem>
            <SelectItem value='1'>自然素材の家づくり勉強会</SelectItem>
            <SelectItem value='2'>完成見学会</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-4'>
        {filteredVisitors.map((visitor) => (
          <div key={visitor.id} className='border rounded-lg p-4'>
            <div className='flex justify-between items-start'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <span className={`px-2 py-1 rounded text-sm ${getStatusColor(visitor.status)}`}>
                    {getStatusText(visitor.status)}
                  </span>
                  <span className='text-gray-500'>
                    来場日: {visitor.visitDate}
                  </span>
                </div>
                <h3 className='font-semibold text-lg mb-2'>{visitor.name}</h3>
                <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <Mail className='w-4 h-4' />
                    {visitor.email}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Phone className='w-4 h-4' />
                    {visitor.phone}
                  </div>
                  <div className='flex items-center gap-1'>
                    <MapPin className='w-4 h-4' />
                    {visitor.location}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Building2 className='w-4 h-4' />
                    {visitor.propertyType}
                  </div>
                </div>
                {visitor.notes && (
                  <p className='mt-2 text-gray-600 text-sm'>{visitor.notes}</p>
                )}
                {visitor.feedback && (
                  <div className='mt-2'>
                    <div className='flex items-center gap-1 text-yellow-500 mb-1'>
                      <Star className='w-4 h-4 fill-current' />
                      <span className='font-medium'>{visitor.feedback.rating}</span>
                    </div>
                    <p className='text-sm text-gray-600'>{visitor.feedback.comment}</p>
                  </div>
                )}
              </div>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => {}}
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='メッセージを送信'
                >
                  <MessageCircle className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => {}}
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='資料を送信'
                >
                  <FileText className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => {}}
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='予約を管理'
                >
                  <Calendar className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisitorManagement