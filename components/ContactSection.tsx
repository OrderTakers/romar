'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const result = await emailjs.send(
        'service_x8zdpm2',
        'template_t2g584k',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'romaralquizar10@gmail.com',
        },
        'cF_YlB2eXU1mjnM_b'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailTo = () => {
    const subject = encodeURIComponent('Message from Portfolio Website');
    const body = encodeURIComponent(
      `Hello Romar,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:romaralquizar10@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-black/30 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8">
              Open to internship opportunities, collaborative projects, and tech discussions.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:romaralquizar10@gmail.com" 
                    className="text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    romaralquizar10@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Social Links - Grid adjusted for mobile */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/alquizar-romar-088225350/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group text-xs md:text-sm"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  {!isMobile && 'LinkedIn'}
                </a>
                <a
                  href="https://github.com/OrderTakers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group text-xs md:text-sm"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  {!isMobile && 'GitHub'}
                </a>
                <a
                  href="https://web.facebook.com/marskirtzzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group text-xs md:text-sm"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  {!isMobile && 'Facebook'}
                </a>
                <a
                  href="https://www.instagram.com/marskirtzzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg transition-colors group text-xs md:text-sm"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  {!isMobile && 'Instagram'}
                </a>
              </div>
              
              {/* Resume Button */}
              <div className="pt-3 md:pt-4 border-t border-gray-800">
                <a
                  href="/resume/Romar-Alquizar-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg transition-all w-full group text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm text-gray-400 mb-1 md:mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm md:text-base"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-xs md:text-sm text-gray-400 mb-1 md:mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm md:text-base"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-xs md:text-sm text-gray-400 mb-1 md:mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={isMobile ? 3 : 4}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm md:text-base"
                placeholder="Hi Romar, I'd like to discuss..."
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-2 md:p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-xs md:text-sm">{submitMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-2 md:p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs md:text-sm">{submitMessage}</p>
              </div>
            )}
            
            <div className="space-y-2 md:space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-1 md:gap-2 w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                  isSubmitting 
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
              
              {/* Alternative email button */}
              <button
                type="button"
                onClick={handleMailTo}
                className="flex items-center justify-center gap-1 md:gap-2 w-full px-4 md:px-6 py-2 md:py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors text-xs md:text-sm"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                Use email client
              </button>
            </div>
            
            <div className="text-center text-gray-500 text-xs pt-2 md:pt-4">
              <p>I typically respond within 24 hours</p>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}