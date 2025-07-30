import HeroSection from '@/components/ui/Hero';
import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar/index';
import SocialLinks from '@/components/ui/SocialLinks';

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