import React from 'react';
import { TbSearch } from "react-icons/tb";

interface CommunitySearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const CommunitySearchBar: React.FC<CommunitySearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex gap-4">
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="キーワードで検索..."
          className="w-full px-4 py-3 pl-12 rounded text-gray-900 outline-indigo-500"
        />
        <TbSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-all duration-300 ease-out flex items-center gap-2"
      >
        <TbSearch className="w-5 h-5" />
        検索する
      </button>
    </form>
  );
};

export default CommunitySearchBar;