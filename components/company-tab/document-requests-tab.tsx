'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn, escapeCsvCell } from '@/lib/utils'
import { useState } from 'react'
import { LuDownload, LuFileText, LuMail, LuMapPin, LuPhone, LuSearch } from 'react-icons/lu'

const initialRequests = [
  {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    phone: '090-xxxx-xxxx',
    location: '東京都世田谷区',
    date: '2026/03/15',
    status: '未対応',
    notes: '自然素材の家に興味があります。価格帯も知りたいです。'
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    phone: '090-xxxx-xxxx',
    location: '神奈川県横浜市',
    date: '2026/03/14',
    status: '対応済み',
    notes: '二世帯住宅の実例を見たいです。'
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    phone: '070-xxxx-xxxx',
    location: '千葉県船橋市',
    date: '2026/03/15',
    status: '対応中',
    notes: '土地探しから相談したいです。'
  },
  {
    id: 4,
    name: '高橋美咲',
    email: 'takahashi@example.com',
    phone: '080-xxxx-xxxx',
    location: '埼玉県さいたま市',
    date: '2026/03/16',
    status: '未対応',
    notes: 'リフォームと新築で迷っています。'
  },
  {
    id: 5,
    name: '伊藤健太',
    email: 'ito@example.com',
    phone: '090-xxxx-xxxx',
    location: '東京都世田谷区',
    date: '2026/03/17',
    status: '対応済み',
    notes: '省エネ住宅の仕様について教えてください。'
  },
  {
    id: 6,
    name: '渡辺優子',
    email: 'watanabe@example.com',
    phone: '070-xxxx-xxxx',
    location: '神奈川県川崎市',
    date: '2026/03/18',
    status: '対応中',
    notes: '住宅ローンの相談をしたいです。'
  }
]

const DocumentRequestsTab = () => {
  const [requests, setRequests] = useState(initialRequests)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('すべてのステータス')

  const filteredRequests = requests.filter(request => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const matchesSearch = 
      request.name.toLowerCase().includes(clearSearchQuery) ||
      request.email.toLowerCase().includes(clearSearchQuery) ||
      request.phone.toLowerCase().includes(clearSearchQuery) ||
      request.location.toLowerCase().includes(clearSearchQuery) ||
      request.notes.toLowerCase().includes(clearSearchQuery)
    const matchesStatus = selectedStatus === 'すべてのステータス' || request.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (requestId: number, newStatus: string) => {
    setRequests(requests.map(request => request.id === requestId ? { ...request, status: newStatus } : request))
  }

  const handleDownloadCSV = () => {
    const headers = ['No', '名前', 'メールアドレス', '電話', '所在地', '請求日', 'ステータス', '備考']
    const rows = filteredRequests.map((r) => [
      r.id, r.name, r.email, r.phone,
      r.location, r.date, r.status, r.notes
    ])
    const csvLines = [
      headers.map(escapeCsvCell).join(','),
      ...rows.map((row) => row.map(escapeCsvCell).join(','))
    ].join('\r\n')

    const blob = new Blob([`\uFEFF${csvLines}`], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `資料請求_${new Date().toISOString().slice(0, 19)}.csv`
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>資料請求管理</h2>
        <Button 
          className='rounded-none bg-indigo-600 hover:bg-indigo-700 text-white gap-2 transition-all duration-300 ease-out font-medium shadow-md'
          onClick={handleDownloadCSV}
        >
          <LuDownload className='w-5 h-5' />
          <span>CSVダウンロード</span>
        </Button>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 lg:gap-4 mb-6'>
        <div className='flex-1 relative'>
          <LuSearch className='w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none' />
          <Input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='キーワードで検索...'
            className='pl-10 w-full'
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className='w-full sm:w-[180px] rounded-none'>
            <SelectValue placeholder='ステータス' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='すべてのステータス'>すべてのステータス</SelectItem>
            <SelectItem value='未対応'>未対応</SelectItem>
            <SelectItem value='対応済み'>対応済み</SelectItem>
            <SelectItem value='対応中'>対応中</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col gap-4'>
        {filteredRequests.map((request) => (
          <div key={request.id} className='border rounded p-4'>
            <div className='flex justify-between items-start'>
              <div className='flex-1 flex flex-col gap-2'>
                <h3 className='font-semibold text-lg mb-2'>{request.name}</h3>
                <p className='flex items-center gap-2 text-gray-500 text-sm'>
                  <span className='font-semibold w-[50px] inline-block'>請求日:</span>
                  <span className='text-gray-600 inline-block mr-4'>{request.date}</span>
                  <span className={cn('px-2 py-1 text-sm',
                    request.status === '未対応' && 'bg-yellow-100 text-yellow-600',
                    request.status === '対応済み' && 'bg-green-100 text-green-600',
                    request.status === '対応中' && 'bg-blue-100 text-blue-600')}
                  >
                    {request.status}
                  </span>
                </p>
                <div className='flex flex-col gap-1 text-gray-600'>
                  <div className='flex items-center gap-2'>
                    <LuMail className='w-4 h-4' />
                    <span className='text-[15px]'>{request.email}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <LuPhone className='w-4 h-4' />
                    <span className='text-[15px]'>{request.phone}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <LuMapPin className='w-4 h-4' />
                    <span className='text-[15px]'>{request.location}</span>
                  </div>
                </div>
                <p className='mt-2 text-gray-600 text-sm'>{request.notes}</p>
              </div>

              <div className='flex items-center gap-1'>
                <Select
                  value={request.status}
                  onValueChange={(value) => handleStatusChange(request.id, value)}
                >
                  <SelectTrigger className='w-[110px] h-9 text-sm rounded-none'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='未対応'>未対応</SelectItem>
                    <SelectItem value='対応済み'>対応済み</SelectItem>
                    <SelectItem value='対応中'>対応中</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 ease-out'
                  title='資料を表示'
                >
                  <LuFileText className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300 ease-out'
                  title='メールを送信'
                >
                  <LuMail className='w-5 h-5' />
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