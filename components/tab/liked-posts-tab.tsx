import { Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const likedPosts = [
  {
    id: 1,
    title: '二階建ての収納スペースについて相談です',
    content: '現在、間取りを検討中なのですが、二階の収納スペースの配置で悩んでいます。子供部屋を2部屋設ける予定なのですが、効率的な収納の配置方法についてアドバイスいただけますでしょうか？',
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80&w=800',
    author: {
      name: '田中さん家族',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2時間前',
    likes: 24,
    comments: 5,
    tags: ['収納', '間取り', '二階建て']
  },
  {
    id: 2,
    title: '自然素材を活用した家づくりのポイント',
    content: '自然素材を使用した家づくりで重要なポイントをご紹介します。素材選びから施工方法まで、長年の経験から得られたノウハウをシェアさせていただきます。',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    author: {
      name: '佐藤建築事務所',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '5時間前',
    likes: 156,
    comments: 12,
    tags: ['自然素材', '設計', '施工方法']
  }
]

const LikedPostsTab = () => {
  return (
    <div className='flex flex-col gap-6'>
      {likedPosts.map((post) => (
        <div key={post.id} className='bg-white rounded-lg shadow'>
          <div className='p-6'>
            <div className='flex items-center gap-4 mb-4'>
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className='w-12 h-12 rounded-full'
              />
              <div>
                <p className='font-medium text-gray-900'>{post.author.name}</p>
                <p className='text-sm text-gray-500'>{post.date}</p>
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
            <p className='text-gray-600 mb-4'>{post.content}</p>
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={256}
                className='w-full h-64 object-cover rounded mb-4'
                priority
              />
            )}
            <div className='flex items-center justify-between text-gray-500'>
              <div className='flex items-center gap-6'>
                <span className='flex items-center gap-1'>
                  <Heart className='w-5 h-5 text-indigo-600 fill-current' />
                  <span>{post.likes}</span>
                </span>
                <span className='flex items-center gap-1'>
                  <MessageCircle className='w-5 h-5' />
                  <span>{post.comments}</span>
                </span>
              </div>
              <div className='flex gap-2'>
                {post.tags.map((tag) => (
                  <span key={tag} className='bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm'>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LikedPostsTab