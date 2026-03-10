'use client'

import RequestCard from '@/components/molecules/card/request-card'

interface CompanySelectionStepProps {
  setStep: (step: number) => void
  selectedCompanies: string[]
  setSelectedCompanies: (companies: string[]) => void
}

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

const CompanySelectionStep = ({ setStep, selectedCompanies, setSelectedCompanies }: CompanySelectionStepProps) => {

  const handleCompanyToggle = (companyId: string) => {
    if (selectedCompanies.includes(companyId)) {
      setSelectedCompanies(selectedCompanies.filter(id => id !== companyId))
    } else {
      setSelectedCompanies([...selectedCompanies, companyId])
    }
  }

  return (
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
        <button
          onClick={() => setStep(2)}
          disabled={selectedCompanies.length === 0}
          className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400'
        >
          次へ進む
        </button>
      </div>
    </div>
  )
}

export default CompanySelectionStep