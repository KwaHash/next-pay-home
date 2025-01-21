"use client";

import React, { useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { PostProps } from '@/utils/types';
import dynamic from 'next/dynamic';
import { GiRoundStar } from "react-icons/gi";
import { LuBuilding2, LuMapPin, LuUsers, LuClock } from "react-icons/lu";
import { BuilderProps } from '@/utils/types';

const Image = dynamic(() => import('next/image'), { ssr: false });

interface BuilderCardProps {
  builder: BuilderProps;
}

const BuilderCard: React.FC<BuilderCardProps> = ({ builder }) => (
  <div
    className="bg-white rounded shadow hover:shadow-md transition-all duration-300 ease-out p-6 cursor-pointer"
  >
    <div className="flex flex-col md:flex-row gap-6">
      <div className="relative aspect-video md:w-1/3">
        <Image
          src={builder.image}
          alt={builder.name}
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          className="absolute object-cover rounded"
          priority
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-xl font-bold">{builder.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <GiRoundStar className="w-5 h-5 fill" />
            <span className="mt-1 font-semibold">{builder.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <LuMapPin className="w-4 h-4" />
            <span>{builder.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <LuUsers className="w-4 h-4" />
            <span>施工実績 {builder.projects}件</span>
          </div>
          <div className="flex items-center gap-2">
            <LuClock className="w-4 h-4" />
            <span>創業{builder.established}年</span>
          </div>
          <div className="flex items-center gap-2">
            <LuBuilding2 className="w-4 h-4" />
            <span>{builder.type}</span>
          </div>
        </div>

        <p className="mb-4">{builder.description}</p>

        <div className="flex flex-wrap gap-2">
          {builder.specialities.map((speciality: string) => (
            <span
              key={speciality}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {speciality}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BuilderCard;