import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { LuBell, LuGlobe, LuLock, LuUser } from 'react-icons/lu'

const SettingsTab = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: '山田太郎',
      email: 'yamada@example.com',
      phone: '090-xxxx-xxxx',
      avatar: null
    },
    notifications: {
      email: true,
      browser: false,
      line: true
    },
    privacy: {
      showEmail: false,
      showPhone: true,
      allowMessages: true
    },
    display: {
      language: 'ja',
      timezone: 'Asia/Tokyo'
    }
  })

  return (
    <div className='flex flex-col gap-8'>
      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuUser className='w-5 h-5' />
          <span>プロフィール設定</span>
        </h3>
        <div className='flex flex-col gap-2'>
          <Label className='block text-sm font-medium text-gray-700 mb-1'>お名前</Label>
          <Input
            type='text'
            value={settings.profile.name}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, name: e.target.value }
            })}
            className='w-full px-4 py-2 border rounded-none mb-4'
          />
          <Label className='block text-sm font-medium text-gray-700 mb-1'>メールアドレス</Label>
          <Input
            type='email'
            value={settings.profile.email}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, email: e.target.value }
            })}
            className='w-full px-4 py-2 border rounded-none mb-4'
          />
          <Label className='block text-sm font-medium text-gray-700 mb-1'>電話番号</Label>
          <Input
            type='tel'
            value={settings.profile.phone}
            onChange={(e) => setSettings({
              ...settings,
              profile: { ...settings.profile, phone: e.target.value }
            })}
            className='w-full px-4 py-2 border rounded-none mb-4'
          />
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuBell className='w-5 h-5' />
          <span>通知設定</span>
        </h3>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-medium'>メール通知</p>
            <p className='text-sm text-gray-500'>新着メッセージやイベント予約時にメールを受け取る</p>
          </div>
          <Switch />
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuLock className='w-5 h-5' />
          <span>プライバシー設定</span>
        </h3>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-medium'>メールアドレスを公開</p>
            <p className='text-sm text-gray-500'>他のユーザーにメールアドレスを表示する</p>
          </div>
          <Switch />
        </div>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
          <LuGlobe className='w-5 h-5' />
          <span>表示設定</span>
        </h3>
        <div className='space-y-4'>
          <div>
            <Label className='block text-sm font-medium text-gray-700 mb-2'>言語</Label>
            <Select
              value={settings.display.language}
              onValueChange={(value) => setSettings({
                ...settings,
                display: {
                  ...settings.display,
                  language: value
                }
              })}
            >
              <SelectTrigger className='w-full rounded-none'>
                <SelectValue placeholder='言語を選択' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='ja'>日本語</SelectItem>
                <SelectItem value='en'>English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className='flex justify-end'>
        <Button
          className='h-auto px-8 py-3 bg-indigo-600 text-white rounded-none hover:bg-indigo-700 transition-all duration-300 ease-out font-medium shadow-md'
        >
          設定を保存
        </Button>
      </div>
    </div>
  )
}

export default SettingsTab