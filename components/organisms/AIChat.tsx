import React from 'react'
import { BsSend } from 'react-icons/bs'
import { RiRobot2Line } from 'react-icons/ri'
import QuickQuestion from '@/components/molecules/QuickQuestion'

const AIChat = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AIチャットで家づくりの不安を解消
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              予算、間取り、素材選び...家づくりの疑問にAIがすぐに答えます。
              OBさんの実体験に基づいた回答で、より確かな判断ができます。
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <RiRobot2Line className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 bg-gray-100 rounded-lg p-4">
                    こんにちは！家づくりのことで気になることは何でも聞いてください。
                    予算や間取り、素材選びなど、経験豊富なOBさんの声を元に最適なアドバイスをさせていただきます。
                  </p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="質問を入力してください..."
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600 hover:text-indigo-700">
                  <BsSend className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <QuickQuestion
              question="予算はどのくらい必要ですか？"
              category="予算・費用"
              linkUrl="/"
            />
            <QuickQuestion
              question="土地探しのコツは？"
              category="土地選び"
              linkUrl="/"
            />
            <QuickQuestion
              question="断熱材の選び方は？"
              category="素材・設備"
              linkUrl="/"
            />
            <QuickQuestion
              question="収納の失敗しない計画は？"
              category="間取り・収納"
              linkUrl="/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChat