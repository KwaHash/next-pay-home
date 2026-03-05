import '@/styles/globals.scss'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col min-h-[calc(100vh-80px)] items-center justify-between mt-20'>
      {children}
    </main>
  )
}
