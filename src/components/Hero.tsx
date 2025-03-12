import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Globe2, Sparkles, ChevronDown, PenTool, MessageSquare, Mic, Notebook, Zap } from 'lucide-react';

const handleCalendlyClick = () => {
  window.open('https://calendly.com/devoteai', '_blank');
};

const services = [
  {
    icon: PenTool,
    title: 'AI Content Generation',
    description: 'Create engaging, SEO-optimized content at scale',
    link: '/services/ai-content-generation'
  },
  {
    icon: Brain,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI systems built for your needs',
    link: '/services/custom-ai-solutions'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Development',
    description: 'Intelligent conversational AI assistants',
    link: '/services/chatbot-development'
  },
  {
    icon: Mic,
    title: 'AI Voice Agents',
    description: 'Natural voice interactions powered by AI',
    link: '/services/ai-voice-agents'
  },
  {
    icon: Notebook,
    title: 'Process Automation',
    description: 'Streamline workflows with intelligent automation',
    link: '/services/process-automation'
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI into your systems',
    link: '/services/ai-integration'
  }
];

export default function Hero() {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0A0F2C] to-[#141B41]">
      {/* Globe Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://i.imgur.com/StsJEhN.jpeg"
          alt="Globe"
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/70 via-[#0A0F2C]/50 to-[#141B41]/80" />
      </div>

      {/* Content */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-[#0A0F2C] to-transparent py-4">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://static.tildacdn.com/tild6231-3130-4636-b663-373835613035/DevoteAi_4.png"
              alt="DevoteAI Logo"
              className="h-16 w-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-[0.15em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                DEVOTEAI
              </span>
              <span className="text-sm text-gray-300 tracking-[0.2em] mt-1">
                AI AUTOMATION
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px]"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="bg-[#0A0F2C]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl shadow-black/20">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.link}
                          className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <service.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                          <div>
                            <h3 className="text-white font-medium mb-1">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">AI Products</Link>
            <a href="#meet-creators" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button 
              onClick={handleCalendlyClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 font-medium"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="mt-24 text-center relative">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-medium">AI Automation Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight relative z-20">
            Transform Your Business<br />with AI Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 relative z-20">
            Leverage cutting-edge AI technology to streamline your operations, boost productivity, and drive innovation across your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-20">
            <button 
              onClick={handleCalendlyClick}
              className="w-64 sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105"
            >
              Book a Call
            </button>
            <button className="w-64 sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <Globe2 className="w-12 h-12 text-cyan-400 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">120+</div>
            <div className="text-gray-400">Projects Automated</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">80%</div>
            <div className="text-gray-400">Efficiency Increase</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <Brain className="w-12 h-12 text-cyan-400 mb-4" />
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">AI-Powered Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}