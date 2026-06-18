'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code2, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProfileHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative backdrop-blur-lg bg-black/30 border border-gray-800 rounded-2xl p-4 md:p-8 mb-8 md:mb-12 overflow-hidden"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Avatar with Image */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 relative">
                <Image
                  src="/image/romar.jpg"
                  alt="Romar Alquizar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900" style={{ display: 'none' }}>
                  <Code2 className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
                </div>
              </div>
            </div>
            {/* Status Badge - Changed to "Open to Work" */}
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full animate-pulse">
              Open to Work
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Romar Alquizar 
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-2 md:mb-4">Recent IT Graduate | Aspiring Full-Stack Developer</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 justify-center md:justify-start mb-4 md:mb-6">
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="truncate max-w-[200px] md:max-w-none">BS Information Technology</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
                <span>Class of 2026</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                <span className="truncate max-w-[180px] md:max-w-none">Job Seeker</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-400 flex-shrink-0" />
                <span className="truncate max-w-[180px] md:max-w-none">Carlos Hilado Memorial State University - Binalbagan Campus</span>
              </div>
            </div>
            
            <p className="text-xs md:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto md:mx-0 px-2 md:px-0">
              A recent BSIT graduate with a unique HUMSS background, bringing diverse perspectives in human-centered design to technology. 
              Eager to apply full-stack development skills and contribute to innovative projects as a Junior Developer.
            </p>

            {/* Tech Stack Display */}
            <div className="mt-4 md:mt-6">
              <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center md:justify-start">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Python', 'Django', 'PHP', 'Laravel', 'MongoDB', 'SQLite'].slice(0, isMobile ? 6 : 12).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs md:text-sm border border-gray-700 hover:border-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                {isMobile && (
                  <span className="px-2 py-0.5 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700">
                    +6 more
                  </span>
                )}
              </div>
            </div>

            {/* Resume Download Button - Only this remains */}
            <div className="mt-4 md:mt-6">
              <a
                href="/components/resume/ga.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}