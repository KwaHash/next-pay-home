"use client";

import { useEffect, useState } from "react";
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

  const [area, setArea] = useState<string>(areas[0]);
  const handleAreaChange = (selectedArea: string) => {
    setArea(selectedArea);
  };

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
          {/* Previous search filters remain the same */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="会社名・キーワードで検索"
                className="px-4 py-2 border rounded"
              />
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

        {/* Company details modal */}
        {selectedCompany && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
            onClick={() => {
              setSelectedCompany(null);
              setShowMessageForm(false);
            }}
          >
            <div
              className="relative min-h-screen md:flex md:items-center md:justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-lg max-w-4xl w-full">
                <button
                  onClick={() => {
                    setSelectedCompany(null);
                    setShowMessageForm(false);
                  }}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <CgClose className="w-6 h-6" />
                </button>

                {showMessageForm ? (
                  <div className="p-6">
                    <button
                      onClick={() => setShowMessageForm(false)}
                      className="mb-4 text-gray-600 hover:text-gray-800 flex items-center gap-2"
                    >
                      ← 企業情報に戻る
                    </button>
                    <h2 className="text-2xl font-bold mb-6">{selectedCompany.name}にメッセージを送る</h2>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          お名前
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          メールアドレス
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          電話番号
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          メッセージ内容
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-2 border rounded-lg"
                          placeholder="家づくりについて相談したい内容をご記入ください"
                          required
                        />
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" required />
                        <p className="text-sm text-gray-600">
                          個人情報の取り扱いについて同意します。
                          入力いただいた情報は、お問い合わせ対応のみに使用いたします。
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        メッセージを送信
                      </button>
                    </form>
                  </div>
                ) : (
                  <>
                    <div className="relative h-64">
                      <img
                        src={selectedCompany.image}
                        alt={selectedCompany.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold">{selectedCompany.name}</h2>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <FaRegStar className="w-5 h-5 fill-current" />
                          <span className="font-semibold">{selectedCompany.rating}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-600">
                          <LuMapPin className="w-4 h-4" />
                          <span>{selectedCompany.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <LuUsers className="w-4 h-4" />
                          <span>施工実績 {selectedCompany.projects}件</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <LuClock className="w-4 h-4" />
                          <span>創業{selectedCompany.established}年</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <LuBuilding2 className="w-4 h-4" />
                          <span>{selectedCompany.type}</span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">特徴</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {selectedCompany.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedCompany.specialties.map((specialty: string) => (
                            <span
                              key={specialty}
                              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* イベント・セミナー情報 */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">イベント・セミナー情報</h3>
                        <div className="grid gap-4">
                          {selectedCompany.events.map((event: any) => (
                            <div key={event.id} className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className={`inline-block px-2 py-1 rounded text-sm ${event.type === 'セミナー' ? 'bg-blue-100 text-blue-600' :
                                    event.type === '見学会' ? 'bg-green-100 text-green-600' :
                                      'bg-purple-100 text-purple-600'
                                    } mb-2`}>
                                    {event.type}
                                  </span>
                                  <h4 className="font-semibold mb-2">{event.title}</h4>
                                  <div className="text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center gap-2">
                                      <LuCalendar className="w-4 h-4" />
                                      <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <LuMapPin className="w-4 h-4" />
                                      <span>{event.location}</span>
                                    </div>
                                  </div>
                                  <p className="text-gray-600 mt-2">{event.description}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    // onNavigate('event-details', { ...event, company: selectedCompany });
                                    setSelectedCompany(null);
                                  }}
                                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                  詳細を見る
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setShowMessageForm(true)}
                          className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <LuMessageCircleMore className="w-5 h-5" />
                          メッセージを送る
                        </button>
                        <button className="flex-1 bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                          <FiFileText className="w-5 h-5" />
                          資料請求
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default FindBuilderPage;