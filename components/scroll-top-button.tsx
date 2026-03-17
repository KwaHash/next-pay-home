'use client'

import { Button } from '@/components/ui/button'
import { useWindowScroll } from '@/hooks/use-window-scroll'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll()

  if (scroll.y < 100) {
    return null
  }

  return (
    <Button
      data-test-id='scroll-top-button'
      variant='outline'
      size='icon'
      className='fixed rounded-full right-6 bottom-6 bg-indigo-600 hover:bg-indigo-700 duration-300 transition-all'
      onClick={() => scrollTo({ top: 0 })}
    >
      <FaArrowUp className='h-5 w-5 animate-pulse text-white' />
    </Button>
  )
}

export default ScrollTopButton