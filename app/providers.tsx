import { ThemeProvider } from '@/providers/theme-provider'
import { type PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}