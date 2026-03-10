
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FaBuildingUser } from 'react-icons/fa6'
import { FiCheckCircle } from 'react-icons/fi'
import { IoMdPin } from 'react-icons/io'
import { LiaCalendarAltSolid } from 'react-icons/lia'

interface RequestCardProps {
  company: {
    id: string
    name: string
    image: string
    location: string
    type: string
    established: number
  }
  isSelected: boolean
  onToggle: () => void
}

const RequestCard = ({ company, isSelected, onToggle }: RequestCardProps) => (
  <div
    className={cn('border rounded p-4 cursor-pointer transition-all duration-300 ease-out',
      isSelected ? 'border-indigo-600 bg-indigo-50' : 'hover:bg-gray-50'
    )}
    onClick={onToggle}
  >
    <div className='flex items-center gap-6'>
      <div className='relative aspect-video w-48 h-36 shrink-0 overflow-hidden rounded-none'>
        <Image
          src={company.image}
          alt={company.name}
          width={384}
          height={256}
          className='w-full h-full object-cover shrink-0'
        />
      </div>
      <div className='flex-1'>
        <h3 className='font-semibold text-xl mb-2'>{company.name}</h3>
        <div className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <IoMdPin className='w-5 h-5' />
            <span>{company.location}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaBuildingUser className='w-6 h-6' />
            <span>{company.type}</span>
          </div>
          <div className='flex items-center gap-2'>
            <LiaCalendarAltSolid className='w-5 h-5' />
            <span>創業{company.established}年</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-8 h-8'>
        <div className={cn('w-5 h-5 rounded-full border-2',
            isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
          )}
        >
          {isSelected && (
            <FiCheckCircle className='w-full h-full text-white' />
          )}
        </div>
      </div>
    </div>
  </div>
)

export default RequestCard