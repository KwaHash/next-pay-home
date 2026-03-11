import { Edit, Plus, Search, Trash2, Users } from 'lucide-react'
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
// import EventModal from './EventModal'
// import EventReservations from './EventReservations'

export interface Event {
  id: number;
  title: string;
  type: 'セミナー' | '見学会' | '相談会';
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
  reservations?: Reservation[];
}

export interface Reservation {
  id: number;
  eventId: number;
  name: string;
  email: string;
  phone: string;
  participants: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export const initialReservations: Reservation[] = [
  {
    id: 1,
    eventId: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    phone: '090-xxxx-xxxx',
    participants: 2,
    notes: '自然素材の種類について詳しく知りたいです。',
    status: 'confirmed',
    createdAt: '2024-03-15 10:30'
  },
  {
    id: 2,
    eventId: 1,
    name: '佐藤花子',
    email: 'sato@example.com',
    phone: '090-xxxx-xxxx',
    participants: 1,
    status: 'pending',
    createdAt: '2024-03-16 15:45'
  },
  {
    id: 3,
    eventId: 2,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    phone: '090-xxxx-xxxx',
    participants: 3,
    notes: '駐車場の利用を希望します。',
    status: 'confirmed',
    createdAt: '2024-03-14 09:15'
  }
]

export const initialEvents: Event[] = [
  {
    id: 1,
    type: 'セミナー',
    title: '自然素材の家づくり勉強会',
    startDate: '2024-04-15',
    endDate: '2024-04-15',
    time: '14:00',
    location: '世田谷ショールーム',
    capacity: 10,
    description: '自然素材を使った家づくりのメリットや注意点について、実例を交えながら詳しく解説します。',
    reservations: initialReservations.filter(r => r.eventId === 1)
  },
  {
    id: 2,
    type: '見学会',
    title: '完成見学会',
    startDate: '2024-04-20',
    endDate: '2024-04-21',
    time: '10:00',
    location: '世田谷区桜新町',
    capacity: 5,
    description: '自然素材をふんだんに使用した新築一戸建ての見学会を開催します。',
    reservations: initialReservations.filter(r => r.eventId === 2)
  }
]

const EventManagement = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [showEventModal, setShowEventModal] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const handleSaveEvent = (event: Event) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === event.id ? event : e))
    } else {
      setEvents([...events, { ...event, id: Date.now() }])
    }
    setShowEventModal(false)
    setEditingEvent(null)
  }

  const handleDeleteEvent = (eventId: number) => {
    if (window.confirm('このイベントを削除してもよろしいですか？')) {
      setEvents(events.filter(event => event.id !== eventId))
    }
  }

  const handleUpdateReservation = (eventId: number, updatedReservation: Reservation) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          reservations: event.reservations?.map(r =>
            r.id === updatedReservation.id ? updatedReservation : r
          )
        }
      }
      return event
    }))
  }

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (startDate === endDate) {
      return start.toLocaleDateString('ja-JP')
    }
    
    return `${start.toLocaleDateString('ja-JP')} - ${end.toLocaleDateString('ja-JP')}`
  }

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase())
    if (selectedType === 'all') return matchesSearch
    return matchesSearch && event.type === selectedType
  })

  // if (selectedEvent) {
  //   return (
  //     <EventReservations
  //       event={selectedEvent}
  //       onBack={() => setSelectedEvent(null)}
  //       onUpdateReservation={handleUpdateReservation}
  //     />
  //   )
  // }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>イベント・セミナー管理</h2>
        <Button
          onClick={() => setShowEventModal(true)}
          className='bg-indigo-600 hover:bg-indigo-700 text-white gap-2'
        >
          <Plus className='w-5 h-5' />
          新規イベント作成
        </Button>
      </div>

      <div className='flex gap-4 mb-6'>
        <div className='flex-1 relative'>
          <Search className='w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none' />
          <Input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='イベント名で検索...'
            className='pl-10 w-full'
          />
        </div>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='種別で絞り込み' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>すべてのイベント</SelectItem>
            <SelectItem value='セミナー'>セミナー</SelectItem>
            <SelectItem value='見学会'>見学会</SelectItem>
            <SelectItem value='相談会'>相談会</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-4'>
        {filteredEvents.map((event) => (
          <div key={event.id} className='border rounded-lg p-4'>
            <div className='flex justify-between items-start'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <span
                    className={cn(
                      'px-2 py-1 rounded text-sm',
                      event.type === 'セミナー' && 'bg-blue-100 text-blue-600',
                      event.type === '見学会' && 'bg-green-100 text-green-600',
                      event.type === '相談会' && 'bg-purple-100 text-purple-600'
                    )}
                  >
                    {event.type}
                  </span>
                  <span className='text-gray-500'>
                    {formatDateRange(event.startDate, event.endDate)}
                  </span>
                  <span className='text-gray-500'>{event.time}</span>
                </div>
                <h3 className='font-semibold text-lg mb-2'>{event.title}</h3>
                <p className='text-gray-600 mb-2'>{event.description}</p>
                <div className='text-sm text-gray-500'>
                  <span className='mr-4'>場所: {event.location}</span>
                  <span>定員: {event.capacity}名</span>
                  {event.reservations && (
                    <span className='ml-4'>
                      予約: {event.reservations.filter(r => r.status === 'confirmed')
                        .reduce((total, r) => total + r.participants, 0)}名
                    </span>
                  )}
                </div>
              </div>
              <div className='flex gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setSelectedEvent(event)}
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='予約者一覧'
                >
                  <Users className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => {
                    setEditingEvent(event)
                    setShowEventModal(true)
                  }}
                  className='text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50'
                  title='編集'
                >
                  <Edit className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => handleDeleteEvent(event.id)}
                  className='text-muted-foreground hover:text-red-600 hover:bg-red-50'
                  title='削除'
                >
                  <Trash2 className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {showEventModal && (
        <EventModal
          event={editingEvent}
          onClose={() => {
            setShowEventModal(false)
            setEditingEvent(null)
          }}
          onSave={handleSaveEvent}
        />
      )} */}
    </div>
  )
}

export default EventManagement