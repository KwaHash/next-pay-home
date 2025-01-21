"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";

import { CgClose } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuBuilding2, LuCalendar, LuMapPin, LuUsers, LuClock, LuMessageCircleMore } from "react-icons/lu";
import BuilderCard from "@/components/molecules/card/BuilderCard";
import BuilderSearchBar, { IBuilderSearchForm } from "@/components/molecules/searchbar/BuilderSearchBar";

import { builders, areas, specialities } from "@/utils/data";

const FindBuilderPage: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [showMessageForm, setShowMessageForm] = useState(false);

  const [searchData, setSearchData] = useState<IBuilderSearchForm>({
    name: "",
    area: "エリアを選択",
    speciality: "得意分野で絞り込み",
  });

  useEffect(() => {
    const { name, area, speciality } = searchData;
    if (name) {

    }
  }, [searchData]);

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
            {builders.map((builder) => (
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