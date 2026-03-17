'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { LuExternalLink, LuHeart, LuMessageCircle, LuPlus, LuSearch } from 'react-icons/lu'
// import NewPostModal from '../community/NewPostModal'
// import EditPostModal from './EditPostModal'

export interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
}

export interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  tags: string[];
  draft?: boolean;
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: '自然素材を活用した家づくりのポイント',
    content: '自然素材を使用した家づくりで重要なポイントをご紹介します。素材選びから施工方法まで、長年の経験から得られたノウハウをシェアさせていただきます。',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    author: {
      name: '自然工房ホーム',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2024/03/15',
    likes: 156,
    comments: [],
    tags: ['自然素材', '設計', '施工方法'],
    draft: false
  },
  {
    id: 2,
    title: '二世帯住宅の設計ポイント',
    content: '二世帯住宅を成功させるための重要なポイントをご紹介します。プライバシーと共有スペースのバランス、動線計画など、実例を交えて解説します。',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    author: {
      name: '自然工房ホーム',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '2024/03/10',
    likes: 98,
    comments: [],
    tags: ['二世帯住宅', '間取り', '設計'],
    draft: true
  }
]

const PostManagementTab = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [_showNewPostModal, setShowNewPostModal] = useState(false)
  const [_editingPost, setEditingPost] = useState<Post | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const _handleNewPost = (post: Post) => {
    setPosts([post, ...posts])
    setShowNewPostModal(false)
  }

  const _handleEditPost = (updatedPost: Post) => {
    setPosts(posts.map(post =>
      post.id === updatedPost.id ? updatedPost : post
    ))
    setEditingPost(null)
  }

  const handleDeletePost = (postId: number) => {
    if (window.confirm('この投稿を削除してもよろしいですか？')) {
      setPosts(posts.filter(post => post.id !== postId))
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase())
    if (selectedStatus === 'all') return matchesSearch
    return matchesSearch && (
      selectedStatus === 'draft' ? Boolean(post.draft) : !post.draft
    )
  })

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>投稿管理</h2>
        <Button
          onClick={() => setShowNewPostModal(true)}
          className='rounded-none bg-indigo-600 text-white hover:bg-indigo-700 transition-colors gap-2'
        >
          <LuPlus className='w-5 h-5' />
          <span>新規投稿</span>
        </Button>
      </div>

      <div className='flex gap-4 mb-6'>
        <div className='flex-1 relative'>
          <LuSearch className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 z-10' />
          <Input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='タイトルや内容で検索...'
            className='w-full pl-10 rounded-none'
          />
        </div>
        <Select
          value={selectedStatus}
          onValueChange={setSelectedStatus}
        >
          <SelectTrigger className='w-[180px] rounded-none'>
            <SelectValue placeholder='ステータス' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>すべての投稿</SelectItem>
            <SelectItem value='published'>公開中</SelectItem>
            <SelectItem value='draft'>下書き</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col gap-4'>
        {filteredPosts.map((post) => (
          <div key={post.id} className='bg-white rounded shadow'>
            <div className='flex flex-col md:flex-row gap-6 p-4'>
              <div className='relative aspect-video w-full md:w-1/3'>
                <Image
                  src={post.image || ''}
                  alt={post.title}
                  fill
                  sizes='(max-width: 767px) 100vw, 33vw'
                  className='absolute object-cover rounded-none'
                />
              </div>
              <div className='md:w-2/3'>
                <div className='flex items-center justify-between mb-2'>
                  <span className={cn('px-2 py-1 rounded text-sm',
                    post.draft === true ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  )}>
                    {post.draft === true ? '下書き' : '公開中'}
                  </span>
                  <span className='text-sm text-gray-500'>{post.date}</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
                <p className='text-gray-600 line-clamp-2'>{post.content}</p>
                <div className='flex gap-2 mt-2'>
                  {post.tags.map((tag) => (
                    <span key={tag}
                      className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-[13px]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4 text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <LuHeart className='w-4 h-4' />
                      {post.likes}
                    </span>
                    <span className='flex items-center gap-1'>
                      <LuMessageCircle className='w-4 h-4' />
                      {post.comments.length}
                    </span>
                  </div>
                  <Button variant='link' className='text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:no-underline'>
                    <LuExternalLink className='w-4 h-4' />
                    <span>開く</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* {_showNewPostModal && (
        <NewPostModal
          onClose={() => setShowNewPostModal(false)}
          onSubmit={_handleNewPost}
        />
      )}

      {_editingPost && (
        <EditPostModal
          post={_editingPost}
          onClose={() => setEditingPost(null)}
          onSubmit={_handleEditPost}
        />
      )} */}
    </div>
  )
}

export default PostManagementTab