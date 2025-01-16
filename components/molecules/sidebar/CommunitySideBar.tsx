import React from 'react';
import Image from 'next/image';
import { HiTrendingUp } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";

import { PopularTopicsProps, FeaturedExportProps } from '@/utils/types';

interface CommunitySideBarProps {
  popularTopics: PopularTopicsProps[];
  experts: FeaturedExportProps[];
}

const CommunitySideBar: React.FC<CommunitySideBarProps> = ({ popularTopics, experts }) => {
  return (
    <div className="space-y-6">
      {/* Popular Topics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <HiTrendingUp className="w-5 h-5 text-indigo-600" />
          人気のトピック
        </h3>
        <div className="space-y-4">
          {popularTopics.map((topic) => (
            <div key={topic.id} className="flex items-start gap-3">
              <span className="bg-indigo-100 inline-block w-16 text-center text-indigo-600 text-sm font-bold px-2 py-1 rounded">
                {topic.category}
              </span>
              <p className="text-gray-700 py-1 text-sm flex-1">{topic.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Experts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaRegStar className="w-5 h-5 text-indigo-600" />
          注目の専門家
        </h3>
        <div className="space-y-4">
          {experts.map((expert) => (
            <div key={expert.id} className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                src={expert.avatar}
                alt={expert.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <p className="text-gray-900">{expert.name}</p>
                <p className="text-sm text-gray-500">{expert.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySideBar;