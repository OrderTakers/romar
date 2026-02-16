'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Layout, 
  Server,
  Globe,
  Terminal,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const programmingSkills = [
  {
    category: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'CSS', level: 82, color: 'from-blue-500 to-indigo-500' },
      { name: 'JavaScript', level: 78, color: 'from-yellow-500 to-amber-500' },
      { name: 'React', level: 75, color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', level: 70, color: 'from-gray-700 to-black' },
      { name: 'TypeScript', level: 65, color: 'from-blue-600 to-indigo-600' },
      { name: 'Bootstrap', level: 80, color: 'from-purple-600 to-pink-600' },
    ]
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Python', level: 75, color: 'from-green-500 to-emerald-600' },
      { name: 'Django', level: 70, color: 'from-green-600 to-emerald-700' },
      { name: 'PHP', level: 72, color: 'from-indigo-500 to-purple-600' },
      { name: 'Laravel', level: 68, color: 'from-red-500 to-pink-600' },
    ]
  },
  {
    category: 'Database & Tools',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 75, color: 'from-green-600 to-emerald-500' },
      { name: 'SQLite', level: 80, color: 'from-blue-400 to-cyan-500' },
      { name: 'Git', level: 78, color: 'from-orange-600 to-red-600' },
      { name: 'VS Code', level: 85, color: 'from-blue-400 to-indigo-500' },
    ]
  },
];

export default function ProgrammingSkillsSection() {
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
    <section className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-black/30 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-6 md:mb-8">
          <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Programming Skills</h2>
          <span className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
            Full-Stack Focus
          </span>
        </div>
        
        {/* Skill Legend - Simplified for mobile */}
        <div className="mb-6 md:mb-8 p-3 md:p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <h4 className="text-sm md:text-lg font-semibold mb-2 md:mb-3 text-gray-300">Skill Levels</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
            {[
              { label: 'Proficient', color: 'bg-green-500', text: 'text-green-400', range: '80-100%' },
              { label: 'Competent', color: 'bg-blue-500', text: 'text-blue-400', range: '60-79%' },
              { label: 'Developing', color: 'bg-yellow-500', text: 'text-yellow-400', range: '40-59%' },
              { label: 'Learning', color: 'bg-gray-500', text: 'text-gray-400', range: '0-39%' },
            ].map((desc) => (
              <div key={desc.label} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${desc.color}`} />
                  <span className={`text-xs md:text-sm ${desc.text}`}>{desc.label}</span>
                </div>
                <span className="text-[10px] md:text-xs text-gray-500">{desc.range}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="space-y-4 md:space-y-8">
          {programmingSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800 rounded-lg md:rounded-xl p-4 md:p-6"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-1.5 md:p-2 rounded-lg bg-blue-500/20">
                  <category.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="text-base md:text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1 md:space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-xs md:text-base font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className={`text-xs md:text-sm ${
                        skill.level >= 80 ? 'text-green-400' :
                        skill.level >= 60 ? 'text-blue-400' :
                        skill.level >= 40 ? 'text-yellow-400' : 'text-gray-400'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack Overview - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-8 backdrop-blur-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl md:rounded-2xl p-4 md:p-6"
        >
          <h4 className="text-base md:text-xl font-semibold mb-3 md:mb-4 text-center">Tech Stack Overview</h4>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {[
              { name: 'Frontend', techs: ['React', 'Next.js', 'TypeScript'], icon: Layout },
              { name: 'Backend', techs: ['Python/Django', 'PHP/Laravel'], icon: Server },
              { name: 'Database', techs: ['MongoDB', 'SQLite'], icon: Database },
              { name: 'Core Web', techs: ['HTML', 'CSS', 'JavaScript'], icon: Globe },
            ].map((stack, index) => (
              <div key={stack.name} className="text-center p-2 md:p-4 bg-black/30 rounded-lg md:rounded-xl border border-gray-800">
                <stack.icon className="w-5 h-5 md:w-8 md:h-8 text-blue-400 mx-auto mb-1 md:mb-2" />
                <h5 className="text-xs md:text-base font-semibold mb-1 md:mb-2">{stack.name}</h5>
                <div className="space-y-0.5 md:space-y-1">
                  {stack.techs.map((tech) => (
                    <div key={tech} className="text-[10px] md:text-xs text-gray-300 bg-gray-800/50 rounded px-1 py-0.5 md:px-2 md:py-1">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Learning Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 md:mt-6 p-4 md:p-6 bg-gray-900/50 rounded-xl border border-gray-800"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Terminal className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            <h4 className="text-sm md:text-lg font-semibold">Current Focus Areas</h4>
          </div>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h5 className="font-semibold text-blue-300 text-sm md:text-base mb-2">Improving</h5>
              <ul className="space-y-1 text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                  TypeScript for better type safety
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                  Next.js advanced features
                </li>
              </ul>
            </div>
            <div className="p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <h5 className="font-semibold text-purple-300 text-sm md:text-base mb-2">Learning Next</h5>
              <ul className="space-y-1 text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></div>
                  API development with Django REST
                </li>
                <li className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></div>
                  React Native for mobile
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}