"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart } from "react-icons/fi";
import { LuMessageCircleMore, LuBookmark } from "react-icons/lu";

const posts = [
  {
    id: 1,
    title: "自然素材にこだわった平屋の家",
    image: "/imgs/posts/01.jpg",
    author: "田中さん家",
    likes: 234,
    comments: 45,
    tags: ["平屋", "自然素材", "和モダン"]
  },
  {
    id: 2,
    title: "コストを抑えた高性能住宅",
    image: "/imgs/posts/02.jpg",
    author: "佐藤さん家",
    likes: 189,
    comments: 32,
    tags: ["コスト削減", "高性能", "省エネ"]
  },
  {
    id: 3,
    title: "二世帯住宅の快適な暮らし",
    image: "/imgs/posts/03.jpg",
    author: "鈴木さん家",
    likes: 156,
    comments: 28,
    tags: ["二世帯住宅", "間取り", "収納"]
  }
];

const PopularPosts = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">人気の投稿</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href="#" key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={330}
                  height={185}
                  className="absolute inset-0 w-full h-full object-cover"
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
  );
};

export default PopularPosts;