import AIChat from '@/components/organisms/AIChat'
import CTASection from '@/components/organisms/CTASection'
import Hero from '@/components/organisms/Hero'
import PopularPosts from '@/components/organisms/PopularPosts'

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between mt-20">
      <Hero />
      <PopularPosts />
      <AIChat />
      <CTASection />
    </main>
  )
}
