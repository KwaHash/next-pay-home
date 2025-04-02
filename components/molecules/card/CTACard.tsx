import { type ReactNode } from 'react'
import Link from 'next/link'

interface CTACardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  color: 'indigo' | 'pink';
  linkUrl: string;
}

const CTACard: React.FC<CTACardProps> = ({ icon, title, description, buttonText, color, linkUrl }) => {
  const colorClasses = {
    indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200'
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
      <div className={`inline-block p-3 rounded-full bg-${color}-50 text-${color}-600 mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={linkUrl}
        className={`block w-full py-3 rounded-lg ${colorClasses[color]} font-bold transition-all duration-300 ease-out`}
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default CTACard