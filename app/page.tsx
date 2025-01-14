import Loading from "@/components/molecules/Loading";
import Hero from "@/components/organisms/Hero";
import AIChat from "@/components/organisms/AIChat";
import CTASection from "@/components/organisms/CTASection";
import dynamic from "next/dynamic";

const PopularPosts = dynamic(() => import('@/components/organisms/PopularPosts'), { ssr: false, loading: () => <Loading />, });

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Hero />
      <PopularPosts />
      <AIChat />
      <CTASection />
    </main>
  );
}
