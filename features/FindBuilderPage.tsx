"use client";

import { useEffect, useState } from "react";
import MInputField from "@/components/atoms/MInputField";
import MSelectBox from "@/components/atoms/MSelectBox";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";

import { CgClose } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuBuilding2, LuCalendar, LuMapPin, LuUsers, LuClock, LuMessageCircleMore } from "react-icons/lu";
import BuilderCard from "@/components/molecules/card/BuilderCard";

import { companies, areas, specialities } from "@/utils/data";

const FindBuilderPage: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [showMessageForm, setShowMessageForm] = useState(false);

  // Set Name Keyword
  const [name, setName] = useState<string>("");
  const handleNameChange = (keyword: string) => {
    setName(keyword);
  }

  // Set Area Keyword
  const [area, setArea] = useState<string>(areas[0]);
  const handleAreaChange = (selectedArea: string) => {
    setArea(selectedArea);
  };

  // Set Speciality Keyword
  const [speciality, setSpeciality] = useState<string>(specialities[0]);
  const handleSpecialityChange = (selectedSpeciality: string) => {
    setSpeciality(selectedSpeciality);
  }

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MInputField value={name} placeholder="会社名・キーワードで検索" handleChange={handleNameChange} />
              <MSelectBox value={area} options={areas} handleChange={handleAreaChange} />
              <MSelectBox value={speciality} options={specialities} handleChange={handleSpecialityChange} />
            </div>
          </div>

          {/* Company list */}
          <div className="grid grid-cols-1 gap-6">
            {companies.map((company) => (
              <BuilderCard
                key={company.id}
                company={company}
                onClick={() => {
                  setSelectedCompany(company);
                  setShowMessageForm(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FindBuilderPage;