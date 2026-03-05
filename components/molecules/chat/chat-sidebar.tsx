import { Button } from '@/components/ui/button'
import { ThreadListPrimitive } from '@assistant-ui/react'
import { FaHistory } from 'react-icons/fa'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

const CHAT_HISTORY = [
  { id: '1', title: '二世帯住宅の間取り相談' },
  { id: '2', title: '自然素材の選び方について' },
  { id: '3', title: '予算計画の立て方' },
  { id: '4', title: '断熱材の種類とコスト' },
  { id: '5', title: '土地探しのポイント' },
] as const

const ChatSidebar = () => {
  return (
    <aside className='flex shrink-0 flex-col border-r border-gray-200 bg-white w-[300px]'>
      <div className='flex items-center justify-center border-b border-gray-200 py-4'>
        <span className='text-lg font-bold text-gray-900'>ぺいほーむAI</span>
      </div>
      <div className='flex items-center gap-2 p-3'>
        <ThreadListPrimitive.New
          className='flex flex-1 items-center gap-2 rounded border border-gray-200 px-3 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 text-gray-700'
        >
          <HiOutlinePencilSquare className='h-4 w-4 shrink-0' />
          <span>新しいチャット</span>
        </ThreadListPrimitive.New>
      </div>
      <div className='flex-1 overflow-y-auto px-2'>
        <p className='flex items-center gap-2 px-2 py-2 font-medium uppercase tracking-wide text-gray-700'>
          <FaHistory className='h-4 w-4 shrink-0' />
          <span className='text-base'>あなたのチャット</span>
        </p>
        <ul className='flex flex-col'>
          {CHAT_HISTORY.map(item => (
            <li key={item.id}>
              <Button
                variant='ghost'
                className='flex w-full items-center justify-between gap-1 rounded px-3 py-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900'
              >
                <span className='line-clamp-1 flex min-w-0 items-center gap-1'>
                  <span className='truncate text-[13px]'>{item.title}</span>
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default ChatSidebar