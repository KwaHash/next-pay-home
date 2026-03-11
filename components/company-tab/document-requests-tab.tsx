'use client'

import { Download, FileText, Mail, MapPin, Phone, Search } from 'lucide-react'
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
import { cn } from '@/lib/utils'

const initialRequests = [
  {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    phone: '090-xxxx-xxxx',
    location: '東京都世田谷区',
    date: '2024/03/15',
    status: '未対応',
    notes: '自然素材の家に興味があります。価格帯も知りたいです。'
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    phone: '090-xxxx-xxxx',
    location: '神奈川県横浜市',
    date: '2024/03/14',
    status: '対応済み',
    notes: '二世帯住宅の実例を見たいです。'
  }
]

const DocumentRequestsTab = () => {
  const [requests, setRequests] = useState(initialRequests)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredRequests = requests.filter(request => {
    const matchesSearch = 
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || request.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (requestId: number, newStatus: string) => {
    setRequests(requests.map(request =>
      request.id === requestId ? { ...request, status: newStatus } : request
    ))
  }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>資料請求管理</h2>
        <Button className='bg-indigo-600 hover:bg-indigo-700 text-white gap-2'>
          <Download className='w-5 h-5' />
          CSVダウンロード
        </Button>
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
            <SelectItem value='未対応'>未対応</SelectItem>
            <SelectItem value='対応済み'>対応済み</SelectItem>
            <SelectItem value='フォロー中'>フォロー中</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-4'>
        {filteredRequests.map((request) => (
          <div key={request.id} className='border rounded-lg p-4'>
            <div className='flex justify-between items-start'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <span
                    className={cn(
                      'px-2 py-1 rounded text-sm',
                      request.status === '未対応' && 'bg-yellow-100 text-yellow-600',
                      request.status === '対応済み' && 'bg-green-100 text-green-600',
                      request.status === 'フォロー中' && 'bg-blue-100 text-blue-600'
                    )}
                  >
                    {request.status}
                  </span>
                  <span className='text-gray-500'>
                    請求日: {request.date}
                  </span>
                </div>
                <h3 className='font-semibold text-lg mb-2'>{request.name}</h3>
                <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <Mail className='w-4 h-4' />
                    {request.email}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Phone className='w-4 h-4' />
                    {request.phone}
                  </div>
                  <div className='flex items-center gap-1'>
                    <MapPin className='w-4 h-4' />
                    {request.location}
                  </div>
                </div>
                {request.notes && (
                  <p className='mt-2 text-gray-600 text-sm'>{request.notes}</p>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <Select
                  value={request.status}
                  onValueChange={(value) => handleStatusChange(request.id, value)}
                >
                  <SelectTrigger className='w-[120px] h-9 text-sm'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='未対応'>未対応</SelectItem>
                    <SelectItem value='対応済み'>対応済み</SelectItem>
                    <SelectItem value='フォロー中'>フォロー中</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='資料を表示'
                >
                  <FileText className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='メールを送信'
                >
                  <Mail className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DocumentRequestsTab