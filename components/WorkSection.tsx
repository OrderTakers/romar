'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code2, Users, Rocket, Award, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const workExperiences = [
  {
    title: 'Junior Web Developer (Intern)',
    company: 'Warlen Industrial Sales Corporation (DEKA SALES)',
    location: 'Bacolod City, Philippines',
    period: 'Feb 2026 - June 2026',
    type: 'Internship',
    description: 'Worked as part of a 4-person intern team to build a full-stack web application for a client.',
  achievements: [
      'Collaborated with 3 other interns to develop a full-stack web application using React and Tailwind CSS',
      'Contributed to building 5+ responsive web pages as part of the team',
      'Assisted in implementing REST APIs and database integrations',
      'Participated in daily stand-ups, code reviews, and agile sprints',
      'Worked with team to optimize page load time by 30% through performance improvements',
      'Gained experience in Git workflow and collaborative development'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'],
    color: 'from-blue-600 to-cyan-600',
    icon: Code2,
    duration: '3 months',
    website: 'https://warlenindustrialsalescorporation.com/' // Added website URL
  },
  // Add more work experiences as you get them
  // {
  //   title: 'Freelance Web Developer',
  //   company: 'Self-Employed',
  //   location: 'Remote',
  //   period: 'Jun 2024 - Present',
  //   type: 'Freelance',
  //   description: 'Building websites and web applications for clients.',
  //   achievements: [
  //     'Created 3 custom websites for small businesses',
  //     'Implemented e-commerce functionality',
  //     'Provided maintenance and support'
  //   ],
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  //   color: 'from-purple-600 to-pink-600',
  //   icon: Briefcase,
  //   duration: 'Ongoing'
  // }
];

export default function WorkSection() {
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
          <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
          <span className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
            Open to Work
          </span>
        </div>

        {/* Work Timeline */}
        <div className="relative">
          {/* Timeline Line - Centered on desktop, left on mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:left-1/2 md:-translate-x-0.5"></div>
          
          {workExperiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-6 md:mb-12 ${
                  isEven 
                    ? 'md:ml-auto md:pl-8 md:w-1/2' 
                    : 'md:mr-auto md:pr-8 md:w-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} border-4 border-gray-900 md:left-auto ${
                  isEven 
                    ? 'md:-left-4' 
                    : 'md:-right-4 md:left-auto'
                }`}></div>
                
                <div className={`ml-10 md:ml-0 ${
                  isEven ? 'md:ml-0' : 'md:mr-0'
                }`}>
                  {/* Card */}
                  <div className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-blue-500/50 transition-all ${
                    !isEven && 'md:mr-2'
                  }`}>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${experience.color}`}>
                        <experience.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base md:text-xl font-bold">{experience.title}</h3>
                        <div className="flex flex-wrap items-center gap-1 text-xs text-gray-400 mt-0.5">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{experience.period}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="text-xs text-gray-500">{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Info */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-1">
                        <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                        <h4 className="text-sm md:text-base font-semibold">{experience.company}</h4>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                        <span className="text-xs md:text-sm text-gray-400">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                        <span className="text-xs md:text-sm text-gray-400">{experience.type}</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300">{experience.description}</p>
                    </div>
                    
                    {/* Achievements - Show fewer on mobile */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-1">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                        <h5 className="text-xs md:text-sm font-semibold">Key Achievements</h5>
                      </div>
                      <ul className="space-y-0.5">
                        {experience.achievements.slice(0, isMobile ? 3 : 5).map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-1">
                        <Code2 className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                        <h5 className="text-xs md:text-sm font-semibold">Technologies</h5>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 bg-gray-800/50 text-gray-300 rounded-full text-[10px] md:text-xs border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Website Button - Added here */}
                    {experience.website && (
                      <div className="pt-3 border-t border-gray-800">
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg transition-all text-sm font-semibold group w-full justify-center"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          View Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Experience Message - Show when no work experiences */}
        {workExperiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-8 md:py-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800/50 mx-auto mb-4 flex items-center justify-center">
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">No Work Experience Yet</h3>
            <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
              I'm a recent graduate actively seeking my first opportunity in web development. 
              I'm eager to learn and contribute to innovative projects.
            </p>
          </motion.div>
        )}

        {/* Work Summary - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 md:mt-12 backdrop-blur-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl md:rounded-2xl p-4 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="text-center">
              <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 md:mb-2">
                {workExperiences.length}
              </div>
              <div className="text-xs md:text-sm text-gray-300">Work Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-blue-400 mb-0.5 md:mb-2">Fresh</div>
              <div className="text-xs md:text-sm text-gray-300">Graduate</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-green-400 mb-0.5 md:mb-2">Ready</div>
              <div className="text-xs md:text-sm text-gray-300">To Learn</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl lg:text-4xl font-bold text-purple-400 mb-0.5 md:mb-2">💪</div>
              <div className="text-xs md:text-sm text-gray-300">Motivated</div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-300">
              <span className="text-blue-400 font-semibold">"Seeking opportunities to grow, learn, and contribute to meaningful projects."</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}