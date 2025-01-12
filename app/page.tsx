import Hero from "@/components/organisms/Hero";
import PopularPosts from "@/components/organisms/PopularPosts";
import AIChat from "@/components/organisms/AIChat";
import CTASection from "@/components/organisms/CTASection";

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
