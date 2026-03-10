import { Building2, FileText, MessageCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface ProgressCardProps {
  icon: ReactNode;
  title: string;
  companies: number;
  status: string;
}

const ProgressCard = ({ icon, title, companies, status }: ProgressCardProps) => (
  <div className='flex items-center justify-between p-4 border rounded'>
    <div className='flex items-center gap-4'>
      <div className='w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600'>
        {icon}
      </div>
      <div>
        <h3 className='font-medium'>{title}</h3>
        <p className='text-sm text-gray-500'>{companies}社</p>
      </div>
    </div>
    <span className='px-3 py-1 rounded-full text-sm bg-green-100 text-green-600'>
      {status}
    </span>
  </div>
)

const BuildingProgress = () => {
  return (
    <div className='bg-white rounded shadow-lg p-6 mb-6'>
      <h2 className='text-xl font-semibold mb-4'>進行中の家づくり</h2>
      <div className='space-y-4'>
        <ProgressCard
          icon={<FileText className='w-6 h-6' />}
          title='資料請求'
          companies={3}
          status='完了'
        />
        <ProgressCard
          icon={<Building2 className='w-6 h-6' />}
          title='現地見学'
          companies={2}
          status='予約済み'
        />
        <ProgressCard
          icon={<MessageCircle className='w-6 h-6' />}
          title='オンライン相談'
          companies={1}
          status='予定あり'
        />
      </div>
    </div>
  )
}

export default BuildingProgress