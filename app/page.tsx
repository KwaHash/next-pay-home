import Hero from "@/components/organisms/Hero";
import AIChat from "@/components/organisms/AIChat";
import CTASection from "@/components/organisms/CTASection";
import PopularPosts from "@/components/organisms/PopularPosts";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-center justify-between mt-20">
      <Hero />
      <PopularPosts />
      <AIChat />
      <CTASection />
    </main>
  );
}
