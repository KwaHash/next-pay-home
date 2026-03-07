import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { LuExternalLink, LuHeart, LuMessageCircle } from 'react-icons/lu'

const bookmarks = [
  {
    id: 1,
    type: 'post',
    title: '自然素材の家づくりのポイント',
    author: '自然工房ホーム',
    date: '2024/03/15',
    excerpt: '自然素材を使用した家づくりで重要なポイントをご紹介します。素材選びから施工方法まで、長年の経験から得られたノウハウをシェアさせていただきます。',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    likes: 156,
    comments: 23
  },
  {
    id: 2,
    type: 'article',
    title: '収納計画の失敗しないポイント',
    author: 'モダンライフ建設',
    date: '2024/03/14',
    excerpt: '家族構成や生活スタイルに合わせた収納計画のポイントをご紹介します。',
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80&w=800',
    likes: 98,
    comments: 15
  }
]

const BookmarksTab = () => {
  return (
    <div className='space-y-6'>
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className='bg-white rounded shadow'>
          <div className='flex flex-col md:flex-row gap-6 p-4'>
            <div className='relative aspect-video w-full md:w-1/3'>
              <Image
                src={bookmark.image}
                alt={bookmark.title}
                fill
                sizes='(max-width: 767px) 100vw, 33vw'
                className='absolute object-cover rounded-none'
              />
            </div>
            <div className='md:w-2/3'>
              <div className='flex items-center justify-between mb-2'>
                <span className={cn('px-2 py-1 rounded text-sm',
                  bookmark.type === 'post' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                )}>
                  {bookmark.type === 'post' ? '投稿' : '記事'}
                </span>
                <span className='text-sm text-gray-500'>{bookmark.date}</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>{bookmark.title}</h3>
              <p className='text-gray-600 mb-4 text-sm line-clamp-2'>{bookmark.excerpt}</p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 text-gray-500'>
                  <span className='flex items-center gap-1'>
                    <LuHeart className='w-4 h-4' />
                    {bookmark.likes}
                  </span>
                  <span className='flex items-center gap-1'>
                    <LuMessageCircle className='w-4 h-4' />
                    {bookmark.comments}
                  </span>
                </div>
                <Button variant='link' className='text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:no-underline'>
                  <LuExternalLink className='w-4 h-4' />
                  開く
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookmarksTab