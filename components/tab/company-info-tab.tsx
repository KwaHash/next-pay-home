'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { LuBuilding2, LuUpload } from 'react-icons/lu'

const CompanyInfoTab = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: '自然工房ホーム',
    email: 'info@shizen-kobo.com',
    phone: '03-xxxx-xxxx',
    address: '東京都世田谷区',
    website: 'https://shizen-kobo.com',
    established: '1985',
    description:
      '自然素材にこだわった家づくりを得意とする工務店です。お客様一人一人の理想に寄り添い、健康的で快適な住まいを提供します。',
    specialties: ['自然素材', '省エネ', '注文住宅', 'リフォーム'],
    logo: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800'
  })

  const removeSpecialty = (specialty: string) => {
    const newSpecialties = companyInfo.specialties.filter((s) => s !== specialty)
    setCompanyInfo({
      ...companyInfo,
      specialties: newSpecialties
    })
  }

  console.log(companyInfo.specialties)

  return (
    <form className='flex flex-col gap-8'>
      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuBuilding2 className='w-5 h-5' />
          <span>基本情報</span>
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label className='text-sm font-medium text-gray-700'>会社名</Label>
            <Input
              type='text'
              value={companyInfo.name}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, name: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
          <div className='space-y-2'>
            <Label className='text-sm font-medium text-gray-700'>設立年</Label>
            <Input
              type='text'
              value={companyInfo.established}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, established: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
          <div className='space-y-2'>
            <Label className='text-sm font-medium text-gray-700'>
              メールアドレス
            </Label>
            <Input
              type='email'
              value={companyInfo.email}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, email: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
          <div className='space-y-2'>
            <Label className='text-sm font-medium text-gray-700'>電話番号</Label>
            <Input
              type='tel'
              value={companyInfo.phone}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, phone: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
          <div className='space-y-2 md:col-span-2'>
            <Label className='text-sm font-medium text-gray-700'>住所</Label>
            <Input
              type='text'
              value={companyInfo.address}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, address: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
          <div className='space-y-2 md:col-span-2'>
            <Label className='text-sm font-medium text-gray-700'>
              Webサイト
            </Label>
            <Input
              type='url'
              value={companyInfo.website}
              onChange={(e) =>
                setCompanyInfo({ ...companyInfo, website: e.target.value })
              }
              className='w-full rounded-none'
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuBuilding2 className='w-5 h-5' />
          <span>会社紹介</span>
        </h3>
        <div className='space-y-2'>
          <Label className='text-sm font-medium text-gray-700'>会社説明（任意）</Label>
          <Textarea
            value={companyInfo.description}
            onChange={(e) =>
              setCompanyInfo({ ...companyInfo, description: e.target.value })
            }
            rows={4}
            className='w-full rounded-none min-h-[100px]'
          />
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4'>得意分野</h3>
        <div className='flex flex-wrap gap-4'>
          {companyInfo.specialties.map((specialty, index) => (
            <div key={index} className='relative flex items-center bg-indigo-100 rounded-full px-3 py-1'>
              <span className='text-indigo-600 text-sm'>{specialty}</span>
              <Button
                variant='ghost'
                type='button'
                size='icon'
                onClick={() => {removeSpecialty(specialty)}}
                className='absolute -right-2 -top-1/2 translate-y-1/2 w-5 h-5 p-0 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md border-2 border-white transition-all duration-300 flex items-center justify-center'
              >
                <IoClose className='w-5 h-5' />
              </Button>
            </div>
          ))}
          <Button
            type='button'
            variant='default'
            size='sm'
            className='rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 ease-out font-medium shadow-md'
            onClick={() => {
              const specialty = prompt('新しい得意分野を入力してください')
              if (specialty) {
                setCompanyInfo({
                  ...companyInfo,
                  specialties: [...companyInfo.specialties, specialty]
                })
              }
            }}
          >
            + 追加
          </Button>
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4'>ロゴ画像</h3>
        <div className='flex items-center gap-6'>
          <div className='relative w-32 h-32 rounded-lg border border-input overflow-hidden shrink-0'>
            <Image
              src={companyInfo.logo}
              alt='会社ロゴ'
              width={128}
              height={128}
              className='object-cover w-full h-full'
            />
          </div>
          <Button type='button' variant='outline' className='rounded-none'>
            <LuUpload className='w-5 h-5 mr-2' />
            画像を変更
          </Button>
        </div>
      </section>

      <div className='flex justify-end gap-4'>
        <Button type='button' variant='outline' className='rounded-none'>
          キャンセル
        </Button>
        <Button
          type='submit'
          className='h-auto px-8 py-3 bg-indigo-600 text-white rounded-none hover:bg-indigo-700 transition-all duration-300 ease-out font-medium shadow-md'
        >
          保存する
        </Button>
      </div>
    </form>
  )
}

export default CompanyInfoTab
