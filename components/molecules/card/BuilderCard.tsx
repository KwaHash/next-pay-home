"use client";

import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { PostProps } from '@/utils/types';
import dynamic from 'next/dynamic';
import { FaRegStar } from "react-icons/fa";
import { LuBuilding2, LuMapPin, LuUsers, LuClock } from "react-icons/lu";

const Image = dynamic(() => import('next/image'), { ssr: false });

interface PostCardProps {
  post: PostProps;
  onLike?: (postId: number) => void;
  onComment?: (postId: number, comment: string) => void;
}

const BuilderCard = ({ company, onClick }: { company: any; onClick: () => void }) => (
  <div
    className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-xl font-bold">{company.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaRegStar className="w-5 h-5 fill-current" />
            <span className="font-semibold">{company.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <LuMapPin className="w-4 h-4" />
            <span>{company.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <LuUsers className="w-4 h-4" />
            <span>施工実績 {company.projects}件</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <LuClock className="w-4 h-4" />
            <span>創業{company.established}年</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <LuBuilding2 className="w-4 h-4" />
            <span>{company.type}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{company.description}</p>

        <div className="flex flex-wrap gap-2">
          {company.specialties.map((specialty: string) => (
            <span
              key={specialty}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BuilderCard;