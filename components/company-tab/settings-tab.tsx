'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { LuBell, LuGlobe, LuLock } from 'react-icons/lu'

const SettingsTab = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      line: false,
    },
    privacy: {
      showEmail: false,
      showPhone: true,
    },
    locale: 'ja',
  })

  const handleCompanySettingsSave = () => {
    
  }

  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <h2 className='text-2xl font-bold mb-6'>設定</h2>

      <div className='flex flex-col gap-10'>
        <section>
          <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
            <LuBell className='w-5 h-5' />
            <span>通知設定</span>
          </h3>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium'>メール通知</p>
                <p className='text-sm text-gray-500'>新着メッセージやイベント予約時にメールを受け取る</p>
              </div>
              <Switch
                checked={settings.notifications.email}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      email: checked
                    }
                  })
                }
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium'>LINE通知</p>
                <p className='text-sm text-gray-500'>LINEで通知を受け取る</p>
              </div>
              <Switch
                checked={settings.notifications.line}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      line: checked
                    }
                  })
                }
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
            <LuLock className='w-5 h-5' />
            <span>プライバシー設定</span>
          </h3>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium'>メールアドレスを公開</p>
                <p className='text-sm text-gray-500'>一般ユーザーにメールアドレスを表示する</p>
              </div>
              <Switch
                checked={settings.privacy.showEmail}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      showEmail: checked
                    }
                  })
                }
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium'>電話番号を公開</p>
                <p className='text-sm text-gray-500'>一般ユーザーに電話番号を表示する</p>
              </div>
              <Switch
                checked={settings.privacy.showPhone}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      showPhone: checked
                    }
                  })
                }
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
            <LuGlobe className='w-5 h-5' />
            <span>表示設定</span>
          </h3>
          <div className='flex flex-col'>
            <Label className='block text-sm font-medium text-gray-700 mb-2'>言語</Label>
            <Select
              value={settings.locale}
              onValueChange={(value) =>
                setSettings({
                  ...settings,
                  locale: value,
                })
              }
            >
              <SelectTrigger className='w-full sm:w-1/2 rounded-none'>
                <SelectValue placeholder='言語を選択' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ja'>日本語</SelectItem>
                <SelectItem value='en'>English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className='flex justify-end'>
          <Button
            type='button'
            onClick={handleCompanySettingsSave}
            className='h-auto px-8 py-3 bg-indigo-600 text-white rounded-none hover:bg-indigo-700 transition-all duration-300 ease-out font-medium shadow-md'
          >
            <span>設定を保存</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsTab
