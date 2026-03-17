'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { useState } from 'react'
import { LuBuilding2, LuUpload } from 'react-icons/lu'
import Select, { MultiValue } from 'react-select'

interface ISpecialtyProps {
  value: string;
  label: string;
}

const fixedOptions = [
  { value: '省エネ', label: '省エネ' },
  { value: '自然素材', label: '自然素材' },
  { value: '注文住宅', label: '注文住宅' },
  { value: 'リフォーム', label: 'リフォーム' },
]

const CompanyInfoTab = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: '自然工房ホーム',
    email: 'info@shizen-kobo.com',
    phone: '03-xxxx-xxxx',
    address: '東京都世田谷区',
    website: 'https://shizen-kobo.com',
    established: '1985',
    description: '自然素材にこだわった家づくりを得意とする工務店です。お客様一人一人の理想に寄り添い、健康的で快適な住まいを提供します。',
    logo: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800'
  })

  const [specialties, setSpecialties] = useState<string[]>([])
  const [allOptions, setAllOptions] = useState<ISpecialtyProps[]>(fixedOptions)

  const onChange = (selected: MultiValue<ISpecialtyProps>) => {
    const selectedValues = selected.map((item) => item.value)
    setSpecialties(selectedValues)
  }

  const onInputChange = (value: string) => {
    if (value) {
      setAllOptions([{ value: value, label: value }, ...fixedOptions])
    } else {
      setAllOptions(fixedOptions)
    }
  }

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
            <Label className='text-sm font-medium text-gray-700'>Webサイト</Label>
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
        <Select
          defaultValue={allOptions.slice(0, 2)}
          isMulti
          options={allOptions}
          placeholder='選択してください'
          noOptionsMessage={() => 'オプションがありません'}
          onInputChange={onInputChange}
          onChange={onChange}
          />
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4'>ロゴ画像</h3>
        <div className='flex items-center gap-6'>
          <div className='relative aspect-video w-48 h-27 rounded-none border border-input overflow-hidden shrink-0'>
            <Image
              src={companyInfo.logo}
              alt='会社ロゴ'
              width={394}
              height={216}
              className='object-cover w-full h-full'
            />
          </div>
          <Button type='button' variant='outline' className='rounded-none bg-white hover:bg-gray-100 hover:text-gray-900 transition-all duration-300'>
            <LuUpload className='w-5 h-5 mr-2' />
            <span>画像を変更</span>
          </Button>
        </div>
      </section>

      <div className='flex justify-end gap-4'>
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