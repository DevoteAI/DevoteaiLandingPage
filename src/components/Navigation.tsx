import {
  Brain, MessageSquare, Mic, Notebook, PenTool, Zap,
  Users, FileText, Boxes, X
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';

const scrollToTeam = (navigate: any, pathname: string) => {
  if (location.pathname !== '/') {
    navigate('/', { state: { scrollToTeam: true } });
  } else {
    const teamSection = document.getElementById('meet-creators');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const handleNavigation = (item: any, navigate: any, location: any) => {
  if (item.onClick) {
    item.onClick(navigate, location.pathname);
  } else if (item.href.startsWith('#')) {
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    navigate(item.href);
  }
};

const data = [
  {
    title: 'AI Content Generation',
    icon: <PenTool className='h-full w-full text-white' />,
    href: '/services/ai-content-generation'
  },
  {
    title: 'Custom AI Solutions',
    icon: <Brain className='h-full w-full text-white' />,
    href: '/services/custom-ai-solutions'
  },
  {
    title: 'Chatbot Development',
    icon: <MessageSquare className='h-full w-full text-white' />,
    href: '/services/chatbot-development'
  },
  {
    title: 'AI Voice Agents',
    icon: <Mic className='h-full w-full text-white' />,
    href: '/services/ai-voice-agents'
  },
  {
    title: 'Process Automation',
    icon: <Notebook className='h-full w-full text-white' />,
    href: '/services/process-automation'
  },
  {
    title: 'AI Integration',
    icon: <Zap className='h-full w-full text-white' />,
    href: '/services/ai-integration'
  },
  {
    title: 'AI Projects',
    icon: <Boxes className='h-full w-full text-white' />,
    href: '/projects'
  },
  {
    title: 'Case Studies',
    icon: <FileText className='h-full w-full text-white' />,
    href: '/case-studies'
  },
  {
    title: 'Team',
    icon: <Users className='h-full w-full text-white' />,
    href: '#meet-creators',
    onClick: (navigate: any, pathname: string) => scrollToTeam(navigate, pathname)
  }
];

export function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTeam) {
      const teamSection = document.getElementById('meet-creators');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  if (isMobile) {
    return (
      <>
        <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex items-center justify-between p-4 bg-gradient-to-b from-[#0A0F2C] to-transparent">
            <div className="flex items-center space-x-3">
              <img
                src="https://static.tildacdn.com/tild6231-3130-4636-b663-373835613035/DevoteAi_4.png"
                alt="DevoteAI Logo"
                className="h-12 w-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-[0.15em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  DEVOTEAI
                </span>
                <span className="text-xs text-gray-300 tracking-[0.2em]">
                  AI AUTOMATION
                </span>
              </div>
            </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 z-40 bg-gradient-to-b from-[#0A0F2C]/95 to-[#141B41]/95 backdrop-blur-md pt-24"
            >
            <div className="flex flex-col items-stretch max-h-[calc(100vh-6rem)] overflow-y-auto p-4 space-y-2">
              {data.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleNavigation(item, navigate, location)}
                >
                  <div
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
                  >
                    <div className="w-8 h-8">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: data.length * 0.1 }}
                className="pt-4"
              >
                <button
                  onClick={() => window.open('https://calendly.com/devoteai', '_blank')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-xl font-medium hover:from-cyan-400 hover:to-blue-400 transition-all"
                >
                  Book a Call
                </button>
              </motion.div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className={`fixed top-4 right-6 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Dock className='items-center px-6' spring={{ mass: 0.4, stiffness: 400, damping: 40 }}>
        {data.map((item, idx) => (
          <div key={idx} onClick={() => handleNavigation(item, navigate, location)} style={{ cursor: 'pointer' }}>
            <DockItem
              className='aspect-square rounded-xl bg-black/20 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg cursor-pointer'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className="p-4">
                <div className="w-full h-full min-w-[32px] min-h-[32px] pointer-events-none">
                  {item.icon}
                </div>
              </DockIcon>
            </DockItem>
          </div>
        ))}
      </Dock>
    </div>
  );
}