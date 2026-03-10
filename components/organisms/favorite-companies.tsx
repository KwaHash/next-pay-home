import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const savedCompanies = [
  {
    id: 1,
    name: '自然工房ホーム',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    specialty: '自然素材・省エネ住宅'
  },
  {
    id: 2,
    name: 'モダンライフ建設',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    specialty: 'デザイン住宅・都市型住宅'
  }
]

interface SavedCompanyCardProps {
  company: {
    id: number;
    name: string;
    image: string;
    rating: number;
    specialty: string;
  }
}

const SavedCompanyCard = ({ company }: SavedCompanyCardProps) => (
  <div className='flex items-center gap-4 p-3 border rounded'>
    <div className='relative aspect-square w-16 shrink-0 overflow-hidden rounded'>
      <Image
        src={company.image}
        alt={company.name}
        width={128}
        height={128}
        className='absolute inset-0 w-full h-full object-cover'
      />
    </div>
    <div className='flex-1 flex flex-col'>
      <h3 className='font-medium'>{company.name}</h3>
      <div className='flex items-center gap-1 text-yellow-500'>
        <FaStar className='w-4 h-4 fill-current' />
        <span className='text-sm'>{company.rating}</span>
      </div>
      <p className='text-xs text-gray-500'>{company.specialty}</p>
    </div>
    <Button variant='outline' className='px-4 py-2 border rounded-none hover:bg-gray-100 hover:text-gray-900 transition-all duration-300'>
      <span className='text-sm'>詳細を見る</span>
    </Button>
  </div>
)

const FavoriteCompanies = () => {
  return (
    <div className='bg-white rounded shadow-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>お気に入り工務店</h2>
      <div className='space-y-4'>
        {savedCompanies.map((company) => (
          <SavedCompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  )
}

export default FavoriteCompanies