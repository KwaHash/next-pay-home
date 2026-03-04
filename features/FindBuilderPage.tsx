'use client'

import PaginationItem from '@/components/atoms/PaginationItem'
import BuilderCard from '@/components/molecules/card/BuilderCard'
import BuilderSearchBar, { type IBuilderSearchForm } from '@/components/molecules/searchbar/BuilderSearchBar'
import theme from '@/lib/theme'
import { builders } from '@/utils/data'
import { type BuilderProps } from '@/utils/types'
import { ThemeProvider } from '@mui/material'
import { useMemo, useState } from 'react'

const FindBuilderPage: React.FC = () => {
  const [showMessageForm, setShowMessageForm] = useState(false)

  const [currentPage, setCurrentPage] = useState<number>(0)
  const [allBuilders, setAllBuilders] = useState<BuilderProps[]>(builders)

  const [searchData, setSearchData] = useState<IBuilderSearchForm>({
    name: '',
    area: 'エリアを選択',
    speciality: '得意分野で絞り込み',
  })

  const builderItems = useMemo(() => {
    const { name, area, speciality } = searchData
    let filteredItems = allBuilders
    const builderName = name.trim()
    if (builderName) {
      filteredItems = filteredItems.filter(builder =>
        builder.name.includes(builderName)
      )
    }
    if (area !== 'エリアを選択') {
      filteredItems = filteredItems.filter(builder =>
        builder.location.includes(area)
      )
    }
    if (speciality !== '得意分野で絞り込み') {
      filteredItems = filteredItems.filter(builder =>
        builder.specialities.includes(speciality)
      )
    }
    return filteredItems
  }, [searchData, allBuilders])

  const selectedBuilderItems = builderItems.slice(
    currentPage * 10,
    (currentPage + 1) * 10
  )

  return (
    <ThemeProvider theme={theme}>
        <div className='w-full flex-grow bg-gray-50'>
          <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14'>
            <div className='max-w-7xl mx-auto px-4'>
              <h1 className='text-3xl font-bold mb-4'>優良工務店・ハウスメーカー</h1>
              <p className='text-lg opacity-90'>信頼できる会社と出会い、理想の家づくりを</p>
            </div>
          </div>

          <div className='max-w-7xl mx-auto px-4 py-8'>
            {/* Search Filters */}
            <div className='bg-white rounded shadow p-6 mb-8'>
              <BuilderSearchBar setSearchData={setSearchData} />
            </div>

            {/* Builder list */}
            {selectedBuilderItems.length ? (
              <div className='grid grid-cols-1 gap-6'>
                <PaginationItem
                  totalPages={Math.ceil(builderItems.length / 10)}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                {selectedBuilderItems.map((builder) => (
                  <BuilderCard
                    key={builder.id}
                    builder={builder}
                  />
                ))}
              </div>
            ) : (
              <p className='bg-[#4f46e5] border-[#3f40d5] text-white border-[1px] p-4 rounded-sm'>
                ハウスメーカーがありません。
              </p>
            )}
          </div>
        </div>
      </ThemeProvider>
  )
}

export default FindBuilderPage