import MInput from '@/components/atoms/MInput'
import MSelectBox from '@/components/atoms/MSelectBox'
import { Button } from '@/components/ui/button'
import { areas, specialities } from '@/utils/data'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch, FaTools } from 'react-icons/fa'
import { PiMapPinAreaFill } from 'react-icons/pi'
import { TbSearch } from 'react-icons/tb'

export interface IBuilderSearchForm {
  name: string;
  area: string;
  speciality: string;
}

interface BuilderSearchBarProps {
  setSearchData: (values: IBuilderSearchForm) => void;
}

const BuilderSearchBar: React.FC<BuilderSearchBarProps> = ({ setSearchData }) => {

  const { control, handleSubmit } = useForm<IBuilderSearchForm>()
  const onSubmit = (data: IBuilderSearchForm) => {
    setSearchData(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-2 xl:gap-4'>
        <MInput id='name' placeholder='キーワードで検索' control={control} icon={<FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />} />
        <MSelectBox id='area' options={areas} control={control} icon={<PiMapPinAreaFill className='h-5 w-5 mr-3 text-muted-foreground' />} />
        <MSelectBox id='speciality' options={specialities} control={control} icon={<FaTools className='h-4 w-4 mr-3 text-muted-foreground' />} />
        <Button type='submit' className='flex items-center gap-2 rounded-none transition-all duration-300 ease-out shadow-md'>
          <TbSearch className='w-5 h-5 font-bold' />
          <span className='font-semibold'>検索する</span>
        </Button>
      </div>
    </form>
  )
}

export default BuilderSearchBar