'use client'

import { Thread } from '@/components/thread'
import { PayhomeRuntimeProvider } from '@/providers/payhome-runtime-provider'

const AIChatPage = () => {
  return (
    <PayhomeRuntimeProvider>
      <div className='flex h-[calc(100dvh-80px)] w-full pr-0.5 overflow-hidden'>
        <div className='flex-1 overflow-hidden'>
          <Thread />
        </div>
      </div>
    </PayhomeRuntimeProvider>
  )
}

export default AIChatPage
