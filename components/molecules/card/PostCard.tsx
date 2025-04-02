'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { FiHeart } from 'react-icons/fi'
import { LuMessageCircleMore } from 'react-icons/lu'
import { type PostProps } from '@/utils/types'

const Image = dynamic(() => import('next/image'), { ssr: false })

// import UserProfileModal from './UserProfileModal';
// import CommentModal from './CommentModal';
// import { useAuth } from '../../contexts/AuthContext';

interface PostCardProps {
  post: PostProps;
  onLike?: (postId: number) => void;
  onComment?: (postId: number, comment: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment }) => {
  // const { isLoggedIn } = useAuth();
  const [showUserProfile, setShowUserProfile] = useState(false)
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    // if (!isLoggedIn) {
    //   onNavigate('login');
    //   return;
    // }
    setIsLiked(!isLiked)
    onLike?.(post.id)
  }

  const handleComment = () => {
    // if (!isLoggedIn) {
    //   onNavigate('login');
    //   return;
    // }
    setShowCommentModal(true)
  }

  const handleCommentSubmit = (comment: string) => {
    onComment?.(post.id, comment)
    setShowCommentModal(false)
  }

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setShowUserProfile(true)}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300 ease-out"
          >
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-left text-gray-500">{post.date}</p>
            </div>
          </button>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content}</p>
        {post.image && (
          <div className="relative aspect-video mb-4">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1023px) 100vw, 66vw"
              className="absolute object-cover"
              priority
            />
          </div>
        )}
        <div className="flex flex-col-reverse gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex mt-4 md:mt-0 items-center gap-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 hover:text-indigo-600 transition-all duration-300 ease-out ${isLiked ? 'text-indigo-600' : ''}`}
            >
              <FiHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button
              onClick={handleComment}
              className="flex items-center gap-1 hover:text-indigo-600 transition-all duration-300 ease-out"
            >
              <LuMessageCircleMore className="w-5 h-5" />
              <span>{post.comments.length}</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* {showUserProfile && (
        <UserProfileModal
          user={post.author}
          onClose={() => setShowUserProfile(false)}
        />
      )}

      {showCommentModal && (
        <CommentModal
          onClose={() => setShowCommentModal(false)}
          onSubmit={handleCommentSubmit}
        />
      )} */}
    </div>
  )
}

export default PostCard