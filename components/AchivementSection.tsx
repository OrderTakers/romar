'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Sparkles,
  Construction,
  Bell,
  Clock,
  Award,
  Star,
} from 'lucide-react';

export default function AchievementsComingSoon() {
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
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
          <motion.div
            animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Trophy className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold">Academic Achievements</h2>
          <motion.span
            animate={{
              boxShadow: [
                '0 0 0px rgba(245,158,11,0.3)',
                '0 0 20px rgba(245,158,11,0.5)',
                '0 0 0px rgba(245,158,11,0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xs px-2 py-0.5 md:px-3 md:py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30"
          >
            Coming Soon
          </motion.span>
        </div>

        {/* Main content */}
        <div className="relative flex flex-col items-center justify-center text-center py-8 md:py-14">
          {/* Ambient glows */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating trophy with orbit rings */}
          <div className="relative inline-flex items-center justify-center mb-6">
            {/* Orbit rings — rotating slowly */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-dashed border-amber-500/25 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-amber-500/20 pointer-events-none"
            />

            {/* Orbiting dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 md:w-40 md:h-40 pointer-events-none"
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
            </motion.div>

            {/* Pulsing glow behind trophy */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-2xl"
            />

            {/* Trophy icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 180 }}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center"
            >
              {/* Gentle float */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Trophy className="w-10 h-10 md:w-12 md:h-12 text-amber-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Coming soon badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-amber-500/15 text-amber-300 rounded-full border border-amber-500/30 text-xs md:text-sm font-medium mb-4"
          >
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
              className="inline-flex"
            >
              <Construction className="w-3 h-3 md:w-4 md:h-4" />
            </motion.span>
            Coming Soon
          </motion.div>

          {/* Heading with letter-by-letter shine sweep */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4"
          >
            Academic{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #fbbf24 0%, #fdba74 25%, #fef3c7 50%, #fdba74 75%, #fbbf24 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Achievements
            </motion.span>
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed"
          >
            I&apos;m curating a showcase of my academic milestones — awards, honors, and
            recognitions earned throughout my journey from HUMSS to IT.
          </motion.p>

          {/* Notify button with shine sweep + pulsing ring */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="relative"
          >
            {/* Pulsing ring around button */}
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-amber-500/40 blur-md pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* Bottom hint with animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Clock className="w-3 h-3 text-amber-400" />
              </motion.span>
              In progress
              <motion.span className="inline-flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                    className="w-1 h-1 rounded-full bg-amber-400 inline-block"
                  />
                ))}
              </motion.span>
            </span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="flex items-center gap-1.5">
              <motion.span
                animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </motion.span>
              Check back soon
            </span>
          </motion.div>
        </div>

        {/* Footer summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-8 backdrop-blur-lg bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-800/30 rounded-xl md:rounded-2xl p-4 md:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { Icon: Award, label: 'Honors', color: 'text-amber-400' },
              { Icon: Trophy, label: 'Awards', color: 'text-orange-400' },
              { Icon: Star, label: 'Recognitions', color: 'text-yellow-400' },
              { Icon: Construction, label: 'In Progress', color: 'text-amber-300' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                animate={{ y: [-2, 2, -2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                <item.Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2 ${item.color}`} />
                <div className="text-xs md:text-sm text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-300">
              <span className="text-amber-400 font-semibold">
                &ldquo;The best achievements aren&apos;t the ones we brag about, but the ones
                that shape who we become.&rdquo;
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}