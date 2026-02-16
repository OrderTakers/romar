'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
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
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full">
              Online
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Romar Alquizar 
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-2 md:mb-4">Future Web Developer & Full-Stack Developer</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4 justify-center md:justify-start mb-4 md:mb-6">
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="truncate max-w-[200px] md:max-w-none">BS Information Technology</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                <span>4th Year Student</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-base text-gray-300">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-400 flex-shrink-0" />
                <span className="truncate max-w-[180px] md:max-w-none">CHMSU - Binalbagan</span>
              </div>
            </div>
            
            <p className="text-xs md:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto md:mx-0 px-2 md:px-0">
              A BSIT student with a HUMSS background, bringing unique perspectives in human-centered design to technology. 
              Passionate about creating web solutions that are both technically sound and user-friendly.
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
          </div>
        </div>
      </div>
    </motion.section>
  );
}