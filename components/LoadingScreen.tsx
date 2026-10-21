'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Check } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 → 100 over ~1.8s
    const duration = 1800;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
      }
    }, 30);

    // Hide the loader once 100% AND page is fully loaded
    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve(), { once: true });
    });

    const minDelay = new Promise<void>((resolve) => setTimeout(resolve, duration));

    Promise.all([minDelay, pageLoaded]).then(() => {
      // Hold loader 1.5s after 100% so the user clearly sees "Welcome"
      setTimeout(() => setIsLoading(false), 1500);
    });

    return () => clearInterval(interval);
  }, []);

  const isDone = progress >= 100;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Ambient glows */}
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

          {/* Rotating ring + icon */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute w-28 h-28 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500"
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute w-20 h-20 rounded-full border-2 border-transparent border-b-cyan-400 border-l-pink-400"
            />
            {/* Center icon — switches to checkmark when done */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/40 flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {isDone ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-7 h-7 text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="code"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code2 className="w-7 h-7 text-blue-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
          >
            Romar Alquizar
          </motion.h1>

          {/* Message — swaps to "Welcome" when done */}
          <div className="h-6 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isDone ? (
                <motion.p
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="text-sm md:text-base font-semibold text-green-400"
                >
                  Welcome to my portfolio! ✨
                </motion.p>
              ) : (
                <motion.p
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-gray-400"
                >
                  Loading portfolio...
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Loading bar with % counter */}
          <div className="w-56">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="text-gray-500">
                {isDone ? 'Ready' : 'Please wait'}
              </span>
              <span className={`font-bold tabular-nums ${
                isDone ? 'text-green-400' : 'text-blue-400'
              }`}>
                {progress}%
              </span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className={`h-full rounded-full relative ${
                  isDone
                    ? 'bg-gradient-to-r from-green-500 via-emerald-400 to-green-500'
                    : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                }`}
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}