'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative backdrop-blur-lg bg-black/30 border border-gray-800 rounded-2xl p-8 mb-12 overflow-hidden"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar with Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 relative">
                <Image
                  src="/image/romar.jpg" // Your image path
                  alt="Romar Alquizar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // If image fails to load, show the icon
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback icon that shows if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900" style={{ display: 'none' }}>
                  <Code2 className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-xs px-3 py-1 rounded-full">
              Online
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Romar Alquizar 
            </h1>
            <p className="text-xl text-gray-300 mb-4">Future Web Developer & Full-Stack Developer</p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Bachelor of Science in Information Technology</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-green-400" />
                <span>4th Year Student</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Carlos Hilado Memorial State University - Binalbagan Campus</span>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-2xl">
              A BSIT student with a HUMSS background, bringing unique perspectives in human-centered design to technology. 
              Passionate about creating web solutions that are both technically sound and user-friendly. 
              Currently in my final year, eager to apply both my humanities and technical skills in real-world projects.
            </p>

            {/* Tech Stack Display */}
            <div className="mt-6">
              <p className="text-gray-300 mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Python', 'Django', 'PHP', 'Laravel', 'MongoDB', 'SQLite'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}