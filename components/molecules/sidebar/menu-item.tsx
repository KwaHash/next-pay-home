import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MenuItemProps {
  icon: ReactNode;
  text: string;
  badge?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuItem = ({ icon, text, badge, isActive, onClick }: MenuItemProps) => (
  <Button
    onClick={onClick}
    className={cn(
      'w-full h-auto flex items-center justify-between bg-white px-6 py-4 transition-colors rounded-none duration-300',
      isActive ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' : 'hover:bg-gray-100 text-gray-700'
    )}
  >
    <div className='flex items-center gap-3'>
      {icon}
      <span>{text}</span>
    </div>
    {badge && (
      <span className='bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
        {badge}
      </span>
    )}
  </Button>
)

export default MenuItem