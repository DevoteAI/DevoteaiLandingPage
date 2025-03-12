import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Brain, Notebook as Robot, MessageSquare, Mic, Zap } from 'lucide-react';

export const services = [
  {
    icon: PenTool,
    title: 'AI Content Generation',
    description: 'Create engaging, SEO-optimized content at scale with advanced AI algorithms.',
    path: '/services/ai-content-generation',
    image: 'https://i.imgur.com/hYELaEU.jpeg'
  },
  {
    icon: Brain, 
    title: 'Custom AI Solutions',
    description: 'Bespoke AI systems built from scratch for your unique needs.',
    path: '/services/custom-ai-solutions',
    image: 'https://iili.io/3qiDRGR.webp'
  },
  {
    icon: Robot,
    title: 'Process Automation',
    description: 'Streamline workflows with intelligent automation.',
    path: '/services/process-automation',
    image: 'https://i.imgur.com/nmzCu2y.jpeg'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Development',
    description: 'Intelligent conversational AI for customer support.',
    path: '/services/chatbot-development',
    image: 'https://i.imgur.com/xnxwBWn.jpeg'
  },
  {
    icon: Mic,
    title: 'AI Voice Agents',
    description: 'Natural voice interactions powered by advanced AI.',
    path: '/services/ai-voice-agents',
    image: 'https://iili.io/3qiDACv.webp'
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your existing systems.',
    path: '/services/ai-integration',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#141B41] to-[#0A0F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive AI solutions for modern businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-white/10 hover:scale-105"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}