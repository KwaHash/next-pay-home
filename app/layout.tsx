import HolyLoader from 'holy-loader'
import { type Metadata, type Viewport } from 'next'
import Providers from './providers'
import NavBar from '@/components/organisms/NavBar'
import ScrollTopButton from '@/components/scroll-top-button'
import { env } from '@/lib/config'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_HOST),
  title: 'ぺいほーむ',
  applicationName: 'ぺいほーむ',
  description: '',
  openGraph: {
    title: 'ぺいほーむ',
    siteName: 'ぺいほーむ',
    description: '',
    type: 'website',
    images: [''],
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className="flex flex-col min-h-screen">
        <HolyLoader
          color="#9333ea"
          height="2px"
          easing="linear"
        />
        <Providers>
          <NavBar />
          {children}
          <ScrollTopButton />
        </Providers>
      </body>
    </html>
  )
}
