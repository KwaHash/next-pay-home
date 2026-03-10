import { cn } from '@/lib/utils'
import { FiCheckCircle } from 'react-icons/fi'

interface RequestStepProps {
  number: number
  title: string
  isActive: boolean
  isCompleted: boolean
}

const RequestStep = ({ number, title, isActive, isCompleted }: RequestStepProps) => (
  <div className='flex items-center gap-5'>
    <div
      className={cn('w-8 h-8 rounded-full flex items-center justify-center',
        isCompleted && 'bg-indigo-600 text-white',
        isActive && 'bg-indigo-600 text-white',
        !isActive && !isCompleted && 'bg-gray-200 text-gray-600'
      )}
    >
      {isCompleted ? <FiCheckCircle className='w-5 h-5' /> : <span className='font-bold'>{number}</span>}
    </div>
    <span className={isActive ? 'text-gray-900 font-medium' : 'text-gray-500'}>
      {title}
    </span>
  </div>
)

export default RequestStep