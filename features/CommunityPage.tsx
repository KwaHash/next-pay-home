"use client";

import { useEffect, useState } from "react";
import NewPostButton from "@/components/molecules/button/NewPostBtn";
import CommunitySearchBar from "@/components/molecules/searchbar/CommunitySearchBar";
import CommunityFilterTab from "@/components/molecules/CommunityFilterTab";
import PostCard from "@/components/molecules/card/PostCard";

import { PostProps } from "@/utils/types";
import { initialPosts } from "@/utils/data";

const CommunityPage: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [keyword, setKeyword] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('すべて');
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);

  useEffect(() => {

  }, [activeFilter])

  const handleNewPostClick = () => {
    // if (!isLoggedIn) {
    //   onNavigate('login');
    //   return;
    // }
    setShowNewPostModal(true);
  };

  const handleSearch = () => {

  };

  return (
    <div className="w-full flex-grow bg-gray-50">
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">ぺいほーむコミュニティ</h1>
              <p className="text-lg opacity-90">家づくりの経験や知恵を共有しよう</p>
            </div>
            <NewPostButton onClick={handleNewPostClick} />
          </div>

          <CommunitySearchBar
            value={keyword}
            onChange={setKeyword}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CommunityFilterTab
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <div className="mt-6 space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* <Sidebar
              popularTopics={popularTopics}
              experts={experts}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage;