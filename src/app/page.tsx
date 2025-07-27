import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-nunito">
      <Navbar />
      <Sidebar />
      <HeroSection />
      <SocialLinks />
    </main>
  )
}