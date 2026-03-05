'use client'

import PaginationItem from '@/components/atoms/PaginationItem'
import BuilderCard from '@/components/molecules/card/builder-card'
import BuilderSearchBar, { type IBuilderSearchForm } from '@/components/molecules/searchbar/builder-search-bar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { builders } from '@/utils/data'
import { useMemo, useState } from 'react'

const FindBuilderPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [searchData, setSearchData] = useState<IBuilderSearchForm>({
    name: '',
    area: 'エリアを選択',
    speciality: '得意分野で絞り込み',
  })
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const builderItems = useMemo(() => {
    const { name, area, speciality } = searchData
    let filteredItems = builders
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
  }, [searchData])

  const selectedBuilderItems = builderItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <div className='w-full flex-grow bg-gray-50'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 md:py-20'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>優良工務店・ハウスメーカー</h2>
          <p className='text-base sm:text-lg md:text-xl font-medium'>信頼できる会社と出会い、理想の家づくりを</p>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto p-4 sm:p-8'>
        {/* Search Filters */}
        <div className='bg-white rounded shadow p-6 mb-8'>
          <BuilderSearchBar setSearchData={setSearchData} />
        </div>

        {/* Builder list */}
        {selectedBuilderItems.length ? (
          <div className='grid grid-cols-1 gap-6'>
            <div className='flex justify-between items-center mb-6 flex-wrap gap-3'>
              <span className='text-sm'>
                全{builderItems.length}件のうち、{builderItems.length === 0 ? 0 : (currentPage * itemsPerPage) + 1}番から{Math.min((currentPage + 1) * itemsPerPage, builderItems.length)}番までを表示しております。
              </span>
              <div className='flex items-center gap-6'>
                <span className='text-sm'>表示件数:</span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => {
                    setItemsPerPage(Number(value))
                    setCurrentPage(0)
                  }}
                >
                  <SelectTrigger className='w-[130px] rounded-none'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='5'>5</SelectItem>
                    <SelectItem value='10'>10</SelectItem>
                    <SelectItem value='50'>50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <PaginationItem
              totalPages={Math.ceil(builderItems.length / itemsPerPage)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            {selectedBuilderItems.map((builder) => (
              <BuilderCard
                key={builder.id}
                builder={builder}
              />
            ))}
            <PaginationItem
              totalPages={Math.ceil(builderItems.length / itemsPerPage)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <p className='bg-[#4f46e5] text-white border-[1px] p-4 rounded'>
            ハウスメーカーがありません。
          </p>
        )}
      </div>
    </div>
  )
}

export default FindBuilderPage