import Hero from "@/components/organisms/Hero";
import PopularPosts from "@/components/organisms/PopularPosts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Hero />
      <PopularPosts />
    </main>
  );
}
