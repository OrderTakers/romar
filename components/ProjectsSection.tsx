'use client';

import { motion } from 'framer-motion';
import { 
  School, 
  GraduationCap, 
  BookOpen, 
  Award,
  Calendar,
  MapPin,
  Users,
  Star,
  ChevronRight,
  Heart,
  Target,
  Users2,
  Globe,
  PenTool,
  Brain,
  Book
} from 'lucide-react';

const academicRecords = [
  {
    level: 'College',
    period: '2020 - Present',
    school: 'Carlos Hilado Memorial State University - Binalbagan Campus',
    program: 'BS Information Technology',
    description: 'Final year student passionate about technology and web development. Combining HUMSS background with technical skills to create user-centered solutions.',
    experiences: [
      'Active in class projects and group activities',
      'Developed basic web applications for coursework',
      'Participated in university IT workshops',
      'Volunteered for campus event documentation',
      'Learning full-stack development independently'
    ],
    courses: ['Web Technologies', 'Database Systems', 'Object-Oriented Programming', 'Networking', 'IT Electives'],
    color: 'from-blue-600 to-cyan-600',
    icon: GraduationCap,
    gpa: '2.8'
  },
  {
    level: 'Senior High School',
    period: '2018 - 2020',
    school: 'San Ramon Catholic School',
    program: 'Humanities and Social Sciences (HUMSS)',
    description: 'Developed strong communication and critical thinking skills through humanities subjects. Interest in technology grew through elective courses.',
    experiences: [
      'Active in class discussions and debates',
      'Participated in school journalism activities',
      'Developed research papers on social issues',
      'Learned basic computer applications',
      'Volunteered for community outreach programs'
    ],
    courses: ['Creative Writing', 'Social Sciences', 'Philosophy', 'Communication', 'Research'],
    color: 'from-purple-600 to-pink-600',
    icon: Globe,
    average: '85.5'
  },
  {
    level: 'Junior High School',
    period: '2014 - 2018',
    school: 'San Ramon Catholic School',
    program: 'Regular Academic Track',
    description: 'Built foundational knowledge across various subjects. Started exploring computer technology as a hobby.',
    experiences: [
      'Active in classroom activities',
      'Participated in school events',
      'Learned basic computer operations',
      'Enjoyed English and Social Studies',
      'Developed interest in digital arts'
    ],
    courses: ['Computer Education', 'English', 'Filipino', 'Science', 'Mathematics'],
    color: 'from-green-600 to-emerald-600',
    icon: BookOpen,
    average: '84.2'
  },
  {
    level: 'Elementary',
    period: '2008 - 2014',
    school: 'Cong. Elesio P. Limsiaco Memorial School',
    program: 'Elementary Education',
    description: 'Basic education focusing on fundamental skills. Enjoyed using computers in the school lab.',
    experiences: [
      'Participated in classroom activities',
      'Learned basic computer operations',
      'Enjoyed mathematics and arts',
      'Active in school programs',
      'Developed early interest in technology'
    ],
    courses: ['Mathematics', 'English', 'Science', 'Filipino', 'Computer Basics'],
    color: 'from-amber-600 to-orange-600',
    icon: School,
    average: '83.5'
  },
];

export default function AcademicRecordsSection() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-black/30 border border-gray-800 rounded-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold">Academic Journey</h2>
          <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
            HUMSS to IT Path
          </span>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 md:left-1/2 md:transform md:-translate-x-1/2"></div>
          
          {academicRecords.map((record, index) => (
            <motion.div
              key={record.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${record.color} border-4 border-gray-900 md:left-1/2 md:transform md:-translate-x-1/2`}></div>
              
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
              }`}>
                {/* Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${record.color}`}>
                        <record.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{record.level}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{record.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {record.level === 'Senior High School' && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                        <PenTool className="w-4 h-4" />
                        <span className="text-sm">HUMSS</span>
                      </div>
                    )}
                  </div>
                  
                  {/* School Info */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <h4 className="text-lg font-semibold">{record.school}</h4>
                    </div>
                    <p className="text-gray-300 mb-2">{record.program}</p>
                    <p className="text-gray-400 text-sm">{record.description}</p>
                  </div>
                  
                  {/* Experiences */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users2 className="w-4 h-4 text-green-400" />
                      <h5 className="font-semibold">Key Experiences</h5>
                    </div>
                    <ul className="space-y-1">
                      {record.experiences.slice(0, 3).map((experience, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{experience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Courses */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Book className="w-4 h-4 text-purple-400" />
                      <h5 className="font-semibold">Main Subjects</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {record.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {record.gpa || record.average}
                      </div>
                      <div className="text-xs text-gray-400">
                        {record.level === 'College' ? 'GPA' : 'Average'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {record.level === 'College' ? '4' : 
                         record.level === 'Senior High School' ? '2' : 
                         record.level === 'Junior High School' ? '4' : '6'}
                      </div>
                      <div className="text-xs text-gray-400">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Academic Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 backdrop-blur-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-gray-300">Education Levels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">HUMSS</div>
              <div className="text-gray-300">SHS Strand</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">16+</div>
              <div className="text-gray-300">Years Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">IT</div>
              <div className="text-gray-300">College Course</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-center">From HUMSS to IT: My Educational Path</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h5 className="font-semibold mb-2">HUMSS Foundation</h5>
                <p className="text-sm text-gray-400">Developed communication, critical thinking, and research skills</p>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h5 className="font-semibold mb-2">Transition Phase</h5>
                <p className="text-sm text-gray-400">Applied humanities skills to understand user needs in technology</p>
              </div>
              <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
                <GraduationCap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h5 className="font-semibold mb-2">IT Pursuit</h5>
                <p className="text-sm text-gray-400">Combining technical skills with human-centered design approach</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              <span className="text-blue-400 font-semibold">"My HUMSS background gives me unique perspective in understanding user needs and creating human-centered technology solutions."</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}