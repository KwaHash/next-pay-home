'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FiHeart } from 'react-icons/fi'
import { LuMessageCircleMore, LuBookmark } from 'react-icons/lu'
import { posts } from '@/utils/data'

const Image = dynamic(() => import('next/image'), { ssr: false })

const PopularPosts = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">人気の投稿</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href="#" key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="absolute object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.author}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FiHeart size={18} />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuMessageCircleMore size={18} />
                      {post.comments}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <LuBookmark size={18} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularPosts