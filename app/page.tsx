import { Metadata } from 'next';
import SpaceScene from '@/components/SpaceScene';
import ProfileHeader from '@/components/ProfileHeader';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Romar Alquizar | IT Graduate Portfolio',
  description: 'Portfolio of a BSIT Graduate showcasing projects, skills, and work experience',
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
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
        <ContactSection />
        
        <footer className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-8">
          <p className="mb-2">© {new Date().getFullYear()} Romar Alquizar | BSIT Graduate Portfolio</p>
          <p className="text-sm">Built with Next.js, Three.js, TypeScript & Tailwind</p>
        </footer>
      </div>
    </main>
  );
}