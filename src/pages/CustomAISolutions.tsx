import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Code, Cpu, Target, Workflow, Lightbulb, Layers, Settings, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function CustomAISolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#141B41]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img
          src="https://iili.io/3qiDRGR.webp"
          alt="Custom AI Solutions"
          className="absolute inset-0 w-full h-screen object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/60 via-[#0A0F2C]/40 to-[#141B41]" />
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div variants={fadeIn} className="flex items-center space-x-4 mb-6">
            <Brain className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Custom AI Solutions</h1>
          </motion.div>
          
          <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-3xl mt-24 bg-[#0A0F2C]/80 p-6 rounded-xl backdrop-blur-sm">
            We specialize in developing bespoke AI solutions tailored precisely to your unique challenges. 
            Our expert team builds custom artificial intelligence systems from the ground up, 
            ensuring each solution perfectly aligns with your specific requirements and business objectives. 
            From innovative algorithms to complete AI ecosystems, we transform your vision into reality.
          </motion.p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-xl text-gray-400">Building AI Solutions That Matter</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn}
            className="group bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Target className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Problem Analysis</h3>
            <p className="text-gray-400">
              Deep dive into your specific challenges to design targeted AI solutions that address your exact needs.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="group bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Code className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Custom Development</h3>
            <p className="text-gray-400">
              Build proprietary AI agents and algorithms specifically designed for your unique use case.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            className="group bg-white/5 rounded-2xl p-8 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Settings className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Integration & Scaling</h3>
            <p className="text-gray-400">
              Seamlessly integrate AI solutions into your existing infrastructure with scalability in mind.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Solution Types */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom Solutions</h2>
          <p className="text-xl text-gray-400">Tailored AI systems for every industry</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Cpu, text: "Predictive Systems" },
            { icon: Lightbulb, text: "Decision AI" },
            { icon: Layers, text: "Deep Learning" },
            { icon: Workflow, text: "Neural Networks" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center"
            >
              <div className="bg-white/5 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                <item.icon className="w-10 h-10 text-cyan-400" />
              </div>
              <p className="text-white font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div
          variants={fadeIn}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 text-center backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom AI Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create an AI solution that perfectly matches your unique requirements and drives your business forward.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}