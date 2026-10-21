'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Layout,
  Server,
  Globe,
  Terminal,
  Sparkles,
  TrendingUp,
  Rocket,
  LucideIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// ============ TYPES ============
type Skill = {
  name: string;
  level: number;
  hex: string;
  ring: string;
  glow: string;
};

type SkillCategory = {
  category: string;
  icon: LucideIcon;
  accent: string;
  accentBg: string;
  border: string;
  skills: Skill[];
};

type LevelStyle = {
  label: string;
  color: string;
  badge: string;
};

// ============ BRAND-ACCURATE DATA ============
const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: Layout,
    accent: 'text-cyan-300',
    accentBg: 'bg-cyan-500/15',
    border: 'border-cyan-500/30',
    skills: [
      { name: 'HTML',       level: 85, hex: '#E34F26', ring: 'ring-orange-500', glow: 'shadow-orange-500/40' },
      { name: 'CSS',        level: 82, hex: '#1572B6', ring: 'ring-blue-500',   glow: 'shadow-blue-500/40'   },
      { name: 'JavaScript', level: 78, hex: '#F7DF1E', ring: 'ring-yellow-400', glow: 'shadow-yellow-400/40' },
      { name: 'React',      level: 75, hex: '#61DAFB', ring: 'ring-sky-400',    glow: 'shadow-sky-400/40'    },
      { name: 'Next.js',    level: 70, hex: '#FFFFFF', ring: 'ring-zinc-300',   glow: 'shadow-zinc-300/40'   },
      { name: 'TypeScript', level: 65, hex: '#3178C6', ring: 'ring-blue-600',   glow: 'shadow-blue-600/40'   },
      { name: 'Bootstrap',  level: 80, hex: '#7952B3', ring: 'ring-purple-600', glow: 'shadow-purple-600/40' },
    ],
  },
  {
    category: 'Backend Development',
    icon: Server,
    accent: 'text-emerald-300',
    accentBg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    skills: [
      { name: 'Python',  level: 75, hex: '#FFD43B', ring: 'ring-yellow-500', glow: 'shadow-yellow-500/40' },
      { name: 'Django',  level: 70, hex: '#44B78B', ring: 'ring-green-700',  glow: 'shadow-green-700/40'  },
      { name: 'PHP',     level: 72, hex: '#777BB4', ring: 'ring-indigo-500', glow: 'shadow-indigo-500/40' },
      { name: 'Laravel', level: 68, hex: '#FF2D20', ring: 'ring-red-500',    glow: 'shadow-red-500/40'    },
    ],
  },
  {
    category: 'Database & Tools',
    icon: Database,
    accent: 'text-amber-300',
    accentBg: 'bg-amber-500/15',
    border: 'border-amber-500/30',
    skills: [
      { name: 'MongoDB', level: 75, hex: '#47A248', ring: 'ring-emerald-500', glow: 'shadow-emerald-500/40' },
      { name: 'SQLite',  level: 80, hex: '#0F7FBF', ring: 'ring-sky-500',     glow: 'shadow-sky-500/40'     },
      { name: 'Git',     level: 78, hex: '#F05032', ring: 'ring-orange-600',  glow: 'shadow-orange-600/40'  },
      { name: 'VS Code', level: 85, hex: '#007ACC', ring: 'ring-blue-400',    glow: 'shadow-blue-400/40'    },
    ],
  },
];

// ============ LEVEL MAPPING ============
function getLevelStyle(level: number): LevelStyle {
  if (level >= 80) return { label: 'Proficient', color: 'text-emerald-300', badge: 'bg-emerald-500/15 border-emerald-500/30' };
  return            { label: 'Competent',  color: 'text-blue-300',    badge: 'bg-blue-500/15 border-blue-500/30'       };
}

// ============ HEXAGON SKILL TILE ============
function HexSkill({ skill, index }: { skill: Skill; index: number }) {
  const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 160 }}
      whileHover={{ scale: 1.06, y: -3 }}
      className="flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="relative w-[72px] h-[80px] md:w-20 md:h-[88px]">
        {/* Outer glow */}
        <div
          className={`absolute inset-0 rounded-md blur-md opacity-40 group-hover:opacity-80 transition-opacity ${skill.glow}`}
          style={{ clipPath: hexClip }}
          aria-hidden="true"
        />

        {/* Hex border */}
        <div
          className="absolute inset-0 bg-gray-800"
          style={{ clipPath: hexClip }}
        />

        {/* Hex inner */}
        <div
          className="absolute inset-[2px] bg-gray-950 flex flex-col items-center justify-center"
          style={{ clipPath: hexClip }}
        >
          {/* Fill */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '100%' }}>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${skill.level}%` }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.9, delay: index * 0.05, ease: 'easeOut' }}
              className="absolute bottom-0 left-0 right-0"
              style={{
                backgroundColor: skill.hex,
                opacity: 0.25,
                clipPath: hexClip,
              }}
            />
          </div>

          {/* Percentage */}
          <span className="relative z-10 text-base md:text-lg font-extrabold text-white tabular-nums leading-none">
            {skill.level}
            <span className="text-[9px] text-gray-400 font-normal ml-px">%</span>
          </span>
        </div>
      </div>

      {/* Name */}
      <span className="text-[11px] md:text-xs font-semibold text-gray-200 text-center leading-tight max-w-[80px] truncate">
        {skill.name}
      </span>
    </motion.div>
  );
}

// ============ MAIN ============
export default function ProgrammingSkillsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSkills = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-black/30 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Programming Skills</h2>
          <span className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-cyan-500/15 text-cyan-300 rounded-full border border-cyan-500/30">
            {totalSkills} technologies
          </span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8">
          Hex fill represents proficiency — brand colors show the real technology identity.
        </p>

        {/* Categories */}
        <div className="space-y-4 md:space-y-6">
          {skillCategories.map((category, ci) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: ci * 0.12 }}
                className={`relative bg-gray-900/70 border ${category.border} rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden`}
              >
                {/* Corner glow */}
                <div
                  className={`absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-20 ${category.accentBg}`}
                  aria-hidden="true"
                />

                {/* Category header */}
                <div className="relative flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                  <div className={`p-1.5 md:p-2 rounded-lg ${category.accentBg}`}>
                    <CatIcon className={`w-4 h-4 md:w-5 md:h-5 ${category.accent}`} />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {category.category}
                  </h3>
                  <span className="ml-auto text-[10px] md:text-xs text-gray-500 tabular-nums">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Hex grid */}
                <div className="relative flex flex-wrap justify-start md:justify-around gap-2 md:gap-4">
                  {category.skills.map((skill, si) => (
                    <HexSkill key={skill.name} skill={skill} index={si} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 md:mt-8 bg-gradient-to-r from-blue-950/40 to-purple-950/40 border border-blue-800/40 rounded-xl md:rounded-2xl p-4 md:p-6"
        >
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
            <h4 className="text-sm md:text-base font-semibold text-white">
              Tech Stack Overview
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {[
              { name: 'Frontend', techs: ['React', 'Next.js', 'TypeScript'], icon: Layout,   color: 'text-cyan-300'    },
              { name: 'Backend',  techs: ['Python/Django', 'PHP/Laravel'],   icon: Server,   color: 'text-emerald-300' },
              { name: 'Database', techs: ['MongoDB', 'SQLite'],              icon: Database, color: 'text-amber-300'   },
              { name: 'Core Web', techs: ['HTML', 'CSS', 'JavaScript'],      icon: Globe,    color: 'text-orange-300'  },
            ].map((stack) => {
              const Icon = stack.icon;
              return (
                <div
                  key={stack.name}
                  className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-gray-900/60 border border-gray-800 rounded-lg"
                >
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 ${stack.color}`} />
                  <div className="min-w-0">
                    <h5 className="text-xs md:text-sm font-semibold text-white mb-1">
                      {stack.name}
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {stack.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] md:text-xs text-gray-300 bg-gray-800/70 rounded px-1.5 py-0.5 border border-gray-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6 p-4 md:p-6 bg-gray-900/50 rounded-xl border border-gray-800"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Terminal className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            <h4 className="text-sm md:text-base font-semibold text-white">
              Current Focus Areas
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-300" />
                <h5 className="font-semibold text-blue-300 text-sm md:text-base">Improving</h5>
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  TypeScript for better type safety
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  Next.js advanced features
                </li>
              </ul>
            </div>
            <div className="p-3 md:p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-4 h-4 text-purple-300" />
                <h5 className="font-semibold text-purple-300 text-sm md:text-base">Learning Next</h5>
              </div>
              <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  API development with Django REST
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
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