import React from 'react';
import { PRIMARY_FILTERS } from '@/utils/constant';

interface CommunityFilterTabProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const CommunityFilterTab: React.FC<CommunityFilterTabProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex flex-wrap gap-3">
        {PRIMARY_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ease-out ${filter === activeFilter
              ? 'bg-indigo-600 text-white font-bold'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommunityFilterTab;