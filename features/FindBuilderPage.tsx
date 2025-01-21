"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";

import PaginationItem from "@/components/atoms/PaginationItem";
import BuilderCard from "@/components/molecules/card/BuilderCard";
import BuilderSearchBar, { IBuilderSearchForm } from "@/components/molecules/searchbar/BuilderSearchBar";

import { builders } from "@/utils/data";
import theme from "@/lib/theme";
import { BuilderProps } from "@/utils/types";

const FindBuilderPage: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [showMessageForm, setShowMessageForm] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [allBuilders, setAllBuilders] = useState<BuilderProps[]>(builders);
  const [builderItems, setBuilderItems] = useState<BuilderProps[]>([]);
  const [selectedBuilderItems, setSelectedBuilderItems] = useState<BuilderProps[]>([]);

  const [searchData, setSearchData] = useState<IBuilderSearchForm>({
    name: "",
    area: "エリアを選択",
    speciality: "得意分野で絞り込み",
  });

  useEffect(() => {
    const { name, area, speciality } = searchData;
    let filteredItems = allBuilders;
    const builderName = name.trim();
    // Search By Builder Name
    if (builderName) {
      filteredItems = filteredItems.filter(builder => {
        if (builder.name.includes(builderName)) return true;
        return false;
      })
    }

    // Search By Builder Location
    if (area !== "エリアを選択") {
      filteredItems = filteredItems.filter(builder => {
        if (builder.location.includes(area)) return true;
        return false;
      })
    }

    // Search By Builder Speciality
    if (speciality !== "得意分野で絞り込み") {
      filteredItems = filteredItems.filter(builder => {
        if (builder.specialities.includes(speciality)) return true;
        return false;
      })
    }
    setBuilderItems(filteredItems);
  }, [searchData]);

  useEffect(() => {
    const selectedItems = builderItems.slice(
      currentPage * 10,
      (currentPage + 1) * 10
    );
    setSelectedBuilderItems(selectedItems);
  }, [builderItems, currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">優良工務店・ハウスメーカー</h1>
            <p className="text-lg opacity-90">信頼できる会社と出会い、理想の家づくりを</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search Filters */}
          <div className="bg-white rounded shadow p-6 mb-8">
            <BuilderSearchBar setSearchData={setSearchData} />
          </div>

          {/* Builder list */}
          <div className="grid grid-cols-1 gap-6">
            <PaginationItem
              totalPages={Math.ceil(builderItems.length / 10)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            {selectedBuilderItems.map((builder) => (
              <BuilderCard
                key={builder.id}
                builder={builder}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FindBuilderPage;