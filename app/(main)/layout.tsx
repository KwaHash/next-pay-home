export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col min-h-screen items-center justify-between mt-20'>
      {children}
    </main>
  )
}
