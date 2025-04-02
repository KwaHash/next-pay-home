'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
import { FiHome, FiMessageCircle, FiUser, FiFileText } from 'react-icons/fi'
import { LuBuilding2 } from 'react-icons/lu'
import { RiRobot2Line } from 'react-icons/ri'
import { SlMenu } from 'react-icons/sl'
import MobileNavLink from '@/components/atoms/MobileNavLink'
import NavLink from '@/components/atoms/NavLink'

const NavBar = () => {
  const isCompanyLoggedIn = true
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed bg-white shadow-lg z-50">
      <div className="mx-auto px-8">
        <div className="flex justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-indigo-500 hover:text-indigo-700 transition-all duration-300 ease-out">ぺいほーむ</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex iterms-center space-x-8">
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
              <Link href="/request"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300 ease-out flex items-center gap-2"
              >
                <FiFileText />
                資料請求
              </Link>
            </div>
            <div className="hidden xl:flex items-center gap-2">
              {isCompanyLoggedIn ? (
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 px-4 py-3 bg-gray-100 rounded">
                    自然工房ホーム
                  </span>
                  <Link href="/admin"
                    className="bg-white border border-indigo-600 text-indigo-600 px-4 py-3 rounded hover:bg-indigo-100 transition-all duration-300 ease-out flex items-center gap-2"
                  >
                    <LuBuilding2 />
                    管理画面
                  </Link>
                </div>
              ) : (
                <Link href="/login"
                  className="bg-white border border-indigo-600 text-indigo-600 px-4 py-3 rounded hover:bg-indigo-50 transition-all duration-300 ease-out flex items-center gap-2"
                >
                  <LuBuilding2 />
                  ハウスメーカーの方
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <CgClose className="text-3xl" /> : <SlMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink
              icon={<FiHome />}
              text="ホーム"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/"
            />
            <MobileNavLink
              icon={<FiMessageCircle />}
              text="コミュニティ"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/community"
            />
            <MobileNavLink
              icon={<LuBuilding2 />}
              text="ハウスメーカーを探す"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/find-builder"
            />
            <MobileNavLink
              icon={<RiRobot2Line />}
              text="AIチャット"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/ai-chat"
            />
            <MobileNavLink
              icon={<FiUser />}
              text="マイページ"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/my-page"
            />

            <MobileNavLink
              icon={<FiFileText />}
              text="資料請求"
              onClick={() => setIsMenuOpen(false)}
              linkUrl="/request"
            />
            {isCompanyLoggedIn ? (
              <div className="flex flex-col">
                <span className="text-gray-600 text-center py-4 font-bold bg-gray-100 rounded">
                  自然工房ホーム
                </span>
                <MobileNavLink
                  icon={<LuBuilding2 />}
                  text="管理画面"
                  onClick={() => setIsMenuOpen(false)}
                  linkUrl="/admin"
                />
              </div>
            ) : (
              <MobileNavLink
                icon={<LuBuilding2 />}
                text="ハウスメーカーの方"
                onClick={() => setIsMenuOpen(false)}
                linkUrl="/login"
              />
            )}
          </div>
        </div>
      )}
    </nav >
  )
}

export default NavBar