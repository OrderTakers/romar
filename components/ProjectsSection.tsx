'use client';

import { motion } from 'framer-motion';
import { 
  School, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  MapPin,
  Users2,
  ChevronRight,
  Brain,
  Target,
  Globe,
  PenTool,
  Book
} from 'lucide-react';
import { useState, useEffect } from 'react';

const academicRecords = [
  {
    level: 'College',
    period: '2022 - Present',
    school: 'CHMSU - Binalbagan',
    program: 'BS Information Technology',
    description: 'Final year student passionate about technology and web development.',
    experiences: [
      'Active in class projects and group activities',
      'Developed basic web applications',
      'Learning full-stack development independently'
    ],
    courses: ['Web Technologies', 'Database Systems', 'OOP', 'Networking'],
    color: 'from-blue-600 to-cyan-600',
    icon: GraduationCap,
    gpa: '2.8'
  },
  {
    level: 'Senior High',
    period: '2021 - 2022',
    school: 'San Ramon Catholic School',
    program: 'Humanities (HUMSS)',
    description: 'Developed strong communication and critical thinking skills.',
    experiences: [
      'Active in class discussions',
      'Participated in journalism',
      'Developed research papers'
    ],
    courses: ['Creative Writing', 'Social Sciences', 'Philosophy'],
    color: 'from-purple-600 to-pink-600',
    icon: Globe,
    average: '85.5'
  },
  {
    level: 'Junior High',
    period: '2019 - 2020',
    school: 'San Ramon Catholic School',
    program: 'Regular Academic',
    description: 'Built foundational knowledge across various subjects.',
    experiences: [
      'Active in classroom activities',
      'Learned basic computer operations',
      'Developed interest in digital arts'
    ],
    courses: ['Computer Education', 'English', 'Science'],
    color: 'from-green-600 to-emerald-600',
    icon: BookOpen,
    average: '84.2'
  },
  {
    level: 'Elementary',
    period: '2015 - 2016',
    school: 'Cong. Elesio P. Limsiaco Memorial School',
    program: 'Elementary Education',
    description: 'Basic education focusing on fundamental skills.',
    experiences: [
      'Participated in classroom activities',
      'Learned basic computer operations',
      'Active in school programs'
    ],
    courses: ['Mathematics', 'English', 'Science', 'Computer Basics'],
    color: 'from-amber-600 to-orange-600',
    icon: School,
    average: '83.5'
  },
];

export default function AcademicRecordsSection() {
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
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Academic Journey</h2>
          <span className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
            HUMSS to IT
          </span>
        </div>
        
        {/* Timeline - Mobile optimized */}
        <div className="relative">
          {/* Timeline Line - Adjusted for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 md:left-1/2"></div>
          
          {academicRecords.map((record, index) => (
            <motion.div
              key={record.level}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-6 md:mb-12 md:w-1/2 md:ml-auto"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r ${record.color} border-4 border-gray-900 md:left-0 md:-translate-x-1/2`}></div>
              
              <div className="ml-10 md:ml-12">
                {/* Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-blue-500/50 transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${record.color}`}>
                      <record.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-xl font-bold">{record.level}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{record.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* School Info */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                      <h4 className="text-sm md:text-base font-semibold">{record.school}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 mb-1">{record.program}</p>
                    <p className="text-xs text-gray-400">{record.description}</p>
                  </div>
                  
                  {/* Experiences - Show fewer on mobile */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Users2 className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                      <h5 className="text-xs md:text-sm font-semibold">Key Experiences</h5>
                    </div>
                    <ul className="space-y-0.5">
                      {record.experiences.slice(0, isMobile ? 2 : 3).map((experience, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{experience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Courses - Simplified for mobile */}
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Book className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                      <h5 className="text-xs md:text-sm font-semibold">Main Subjects</h5>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {record.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 bg-gray-800/50 text-gray-300 rounded-full text-[10px] md:text-xs border border-gray-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-3 pt-3 border-t border-gray-800 grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="text-sm md:text-xl font-bold text-blue-400">
                        {record.gpa || record.average}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-400">
                        {record.level === 'College' ? 'GPA' : 'Average'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-xl font-bold text-green-400">
                        {record.level === 'College' ? '4' : 
                         record.level === 'Senior High' ? '2' : 
                         record.level === 'Junior High' ? '4' : '6'}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-400">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Academic Journey Summary - Simplified for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 md:mt-12 backdrop-blur-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl md:rounded-2xl p-4 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="text-center">
              <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 md:mb-2">4</div>
              <div className="text-xs md:text-sm text-gray-300">Education Levels</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-green-400 mb-0.5 md:mb-2">HUMSS</div>
              <div className="text-xs md:text-sm text-gray-300">SHS Strand</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-yellow-400 mb-0.5 md:mb-2">16+</div>
              <div className="text-xs md:text-sm text-gray-300">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-pink-400 mb-0.5 md:mb-2">IT</div>
              <div className="text-xs md:text-sm text-gray-300">College Course</div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-8">
            <h4 className="text-sm md:text-xl font-semibold mb-3 md:mb-4 text-center">From HUMSS to IT</h4>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              <div className="text-center p-2 md:p-4 bg-black/30 rounded-lg border border-gray-800">
                <Brain className="w-5 h-5 md:w-8 md:h-8 text-purple-400 mx-auto mb-1 md:mb-2" />
                <h5 className="text-xs md:text-base font-semibold mb-0.5 md:mb-2">HUMSS Foundation</h5>
                <p className="text-[10px] md:text-xs text-gray-400">Communication & critical thinking</p>
              </div>
              <div className="text-center p-2 md:p-4 bg-black/30 rounded-lg border border-gray-800">
                <Target className="w-5 h-5 md:w-8 md:h-8 text-blue-400 mx-auto mb-1 md:mb-2" />
                <h5 className="text-xs md:text-base font-semibold mb-0.5 md:mb-2">Transition Phase</h5>
                <p className="text-[10px] md:text-xs text-gray-400">Applying humanities to tech</p>
              </div>
              <div className="text-center p-2 md:p-4 bg-black/30 rounded-lg border border-gray-800">
                <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-green-400 mx-auto mb-1 md:mb-2" />
                <h5 className="text-xs md:text-base font-semibold mb-0.5 md:mb-2">IT Pursuit</h5>
                <p className="text-[10px] md:text-xs text-gray-400">Human-centered technology</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-300">
              <span className="text-blue-400 font-semibold">"HUMSS background gives unique perspective in creating human-centered solutions."</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}