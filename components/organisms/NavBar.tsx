"use client";

import React from 'react';
import Link from 'next/link';
import NavLink from '@/components/atoms/NavLink';

import { FiHome, FiMessageCircle, FiUser, FiFileText } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";

interface NavbarProps {
  isCompanyLoggedIn: boolean;
}

const NavBar = ({ isCompanyLoggedIn }: NavbarProps) => {
  return (
    <nav className="w-full fixed bg-white shadow-lg z-50">
      <div className="mx-auto px-8">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-indigo-500 hover:text-indigo-700 transition-all duration-300 ease-out">ぺいほーむ</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              icon={<FiHome />}
              text="ホーム"
              linkUrl="/"
            />
            <NavLink
              icon={<FiMessageCircle />}
              text="コミュニティ"
              linkUrl="/community"
            />
            <NavLink
              icon={<LuBuilding2 />}
              text="ハウスメーカーを探"
              linkUrl="/find-builder"
            />
            <NavLink
              icon={<RiRobot2Line />}
              text="AIチャット"
              linkUrl="/ai-chat"
            />
            <NavLink
              icon={<FiUser />}
              text="マイページ"
              linkUrl="/my-page"
            />
            <div className="flex items-center gap-2">
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <FiFileText />
                資料請求
              </button>
              {isCompanyLoggedIn ? (
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 px-3 py-1 bg-gray-100 rounded-lg">
                    自然工房ホーム
                  </span>
                  <button
                    className="bg-white border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
                  >
                    <LuBuilding2 />
                    管理画面
                  </button>
                </div>
              ) : (
                <button
                  className="bg-white border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
                >
                  <LuBuilding2 />
                  工務店・ハウスメーカーの方
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;