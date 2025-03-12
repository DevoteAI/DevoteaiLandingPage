import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function BookCall() {
  const handleBookCall = () => {
    window.open('https://calendly.com/devoteai', '_blank');
  };

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-[#0A0F2C] to-[#141B41]">
      <AnimatePresence mode="wait">
        <motion.div
          key="book-call-section"
          initial="initial"
          animate="animate"
          exit="initial"
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Schedule a Free Consultation</h2>
          <p className="text-xl text-gray-400">Let's discuss how we can transform your business with AI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            variants={fadeIn}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 relative z-10"
          >
            <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Choose Your Date</h3>
            <p className="text-gray-400">Select a convenient date from our available slots</p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 relative z-10"
          >
            <Clock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Pick Your Time</h3>
            <p className="text-gray-400">Choose a time that works best for your schedule</p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 relative z-10"
          >
            <Users className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Meet Our Team</h3>
            <p className="text-gray-400">Connect with our AI experts to discuss your needs</p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="text-center relative z-10"
        >
          <motion.button
            onClick={handleBookCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all"
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}