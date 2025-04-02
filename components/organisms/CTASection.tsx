import React from 'react'
import { FiFileText } from 'react-icons/fi'
import { LuBuilding2 } from 'react-icons/lu'
import CTACard from '@/components/molecules/card/CTACard'

const CTASection = () => {
  return (
    <section className="w-full pt-16 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            家づくりの第一歩を踏み出そう
          </h2>
          <p className="text-lg text-gray-600">
            理想の家づくりに向けて、まずは情報収集から始めましょう
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CTACard
            icon={<FiFileText className="w-8 h-8" />}
            title="資料請求"
            description="気になる工務店の詳しい情報をチェック"
            buttonText="無料で資料請求"
            color="indigo"
            linkUrl="/request"
          />
          <CTACard
            icon={<LuBuilding2 className="w-8 h-8" />}
            title="工務店検索"
            description="あなたに合った工務店を見つける"
            buttonText="工務店を探す"
            color="pink"
            linkUrl="/find-builder"
          />
        </div>
      </div>
    </section>
  )
}

export default CTASection