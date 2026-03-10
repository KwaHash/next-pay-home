'use client'

import RequestCard from '@/components/molecules/card/request-card'
import RequestStep from '@/components/molecules/step/request-step'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const companies = [
  {
    id: '1',
    name: '自然工房ホーム',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    location: '東京都世田谷区',
    type: '工務店',
    established: 1985
  },
  {
    id: '2',
    name: 'モダンライフ建設',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    location: '神奈川県横浜市',
    type: 'ハウスメーカー',
    established: 1990
  },
  {
    id: '3',
    name: '匠心ホームズ',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    location: '埼玉県さいたま市',
    type: '工務店',
    established: 1978
  }
]

const constructionTimingOptions = [
  '3ヶ月以内',
  '半年以内',
  '1年以内',
  '1年以上先',
  '未定'
] as const

const DocumentRequestPage = () => {
  const [step, setStep] = useState(1)
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([])
  const [constructionTiming, setConstructionTiming] = useState<string>('')

  const handleCompanyToggle = (companyId: string) => {
    if (selectedCompanies.includes(companyId)) {
      setSelectedCompanies(selectedCompanies.filter(id => id !== companyId))
    } else {
      setSelectedCompanies([...selectedCompanies, companyId])
    }
  }

  return (
    <div className='w-full flex-grow bg-gray-50'>
      <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 md:py-20'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>資料請求</h2>
          <p className='text-base sm:text-lg md:text-xl font-medium'>気になる工務店の詳しい情報を手に入れよう</p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto p-4 sm:p-8'>
        <div className='flex items-center justify-between mb-8'>
          <RequestStep number={1} title='会社選択' isActive={step === 1} isCompleted={step > 1} />
          <div className='flex-1 h-2 bg-gray-200 mx-2 sm:mx-5 rounded-full'>
            <div className={cn('h-full bg-indigo-600 rounded-full transition-all duration-300', step > 1 ? 'w-full' : 'w-0')} />
          </div>
          <RequestStep number={2} title='お客様情報' isActive={step === 2} isCompleted={step > 2} />
        </div>

        {step === 1 ? (
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-semibold mb-6'>資料請求する会社を選択</h2>
            <div className='space-y-4'>
              {companies.map((company) => (
                <RequestCard
                  key={company.id}
                  company={company}
                  isSelected={selectedCompanies.includes(company.id)}
                  onToggle={() => handleCompanyToggle(company.id)}
                />
              ))}
            </div>
            <div className='mt-8 flex justify-end'>
              <Button
                onClick={() => setStep(2)}
                disabled={selectedCompanies.length === 0}
                className='bg-indigo-600 h-auto px-6 py-3 rounded-none hover:bg-indigo-700 transition-colors disabled:bg-gray-400'
              >
                <span className='text-white'>次へ進む</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-semibold mb-6'>お客様情報の入力</h2>
            <form className='flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-1'>
                  <Label className='block text-sm font-medium text-gray-700 mb-1'>お名前（姓）</Label>
                  <Input type='text' className='w-full px-4 py-2 border' />
                </div>
                <div className='flex flex-col gap-1'>
                  <Label className='block text-sm font-medium text-gray-700 mb-1'>お名前（名）</Label>
                  <Input type='text' className='w-full px-4 py-2 border' />
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <Label className='block text-sm font-medium text-gray-700 mb-1'>メールアドレス</Label>
                <Input type='email' className='w-full px-4 py-2 border' />
              </div>

              <div className='flex flex-col gap-1'>
                <Label className='block text-sm font-medium text-gray-700 mb-1'>電話番号</Label>
                <Input type='tel' className='w-full px-4 py-2 border' />
              </div>

              <div className='flex flex-col gap-1'>
                <Label className='block text-sm font-medium text-gray-700 mb-1'>建築予定地</Label>
                <Input type='text' className='w-full px-4 py-2 border' placeholder='都道府県' />
              </div>

              <div className='flex flex-col gap-1'>
                <Label className='block text-sm font-medium text-gray-700 mb-1'>建築予定時期</Label>
                <Select value={constructionTiming} onValueChange={setConstructionTiming}>
                  <SelectTrigger className='w-full rounded-none'>
                    <SelectValue placeholder='選択してください' />
                  </SelectTrigger>
                  <SelectContent>
                    {constructionTimingOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='flex flex-col gap-1'>
                <Label className='block text-sm font-medium text-gray-700 mb-1'>ご要望・ご質問</Label>
                <Textarea
                  rows={5}
                  className='w-full focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none'
                  placeholder='資料と併せて聞きたいことがございましたらご記入ください'
                />
              </div>

              <div className='flex justify-between'>
                <Button
                  onClick={() => setStep(1)}
                  className='h-auto px-6 py-3 rounded-none bg-pink-600 hover:bg-pink-700 transition-all duration-300'
                >
                  戻る
                </Button>
                <Button
                  className='h-auto px-5 py-3 rounded-none bg-indigo-600 hover:bg-indigo-700 transition-all duration-300'
                >
                  資料を請求する
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default DocumentRequestPage