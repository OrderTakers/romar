import { Metadata } from 'next';
import SpaceScene from '@/components/SpaceScene';
import ProfileHeader from '@/components/ProfileHeader';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import AchievementsSection from '@/components/AchivementSection';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'Romar Alquizar Portfolio',
  description: 'Portfolio of a BSIT Graduate showcasing projects, skills, and work experience',
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Loading splash — shows once on first load */}
      <LoadingScreen />

      {/* 3D Space Background */}
      <div className="fixed inset-0 z-0">
        <SpaceScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <ProfileHeader />
        <SkillsSection />
        <WorkSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />

        <footer className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-8">
          <p className="mb-2">© {new Date().getFullYear()} Romar Alquizar Portfolio</p>
        </footer>
      </div>
    </main>
  );
}