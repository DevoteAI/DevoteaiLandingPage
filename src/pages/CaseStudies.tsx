import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X, CheckCircle, Brain, Users, Cpu, Server, MessageSquare, FileText, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import { Hero } from '../components/ui/hero';

const caseStudies = [
  {
    id: "paalupiste",
    title: "Paalupiste: AI-Powered Content Ecosystem",
    description: "Built a comprehensive AI content generation platform with 15 specialized agents handling multiple content types for this leading Finnish foundation solutions company.",
    image: "https://iili.io/3BTVZPV.jpg",
    detailedInfo: {
      challenge: "Paalupiste needed to scale their global marketing efforts across multiple channels while maintaining consistent messaging about their screw pile foundation solutions.",
      solution: "We developed an advanced AI content ecosystem with 15 specialized agents working in harmony to generate diverse content types, from technical articles to social media posts.",
      features: [
        {
          title: "Multi-Channel Content Generation",
          description: "Coordinated AI agents for articles, social media, videos, and newsletters",
          icon: FileText
        },
        {
          title: "Lead Generation System",
          description: "AI-powered lead identification and nurturing across global markets",
          icon: Users
        },
        {
          title: "Technical Content Expertise",
          description: "Specialized agents for creating accurate foundation engineering content",
          icon: Brain
        },
        {
          title: "Video Script Generation",
          description: "Automated creation of engaging video content scripts",
          icon: MessageSquare
        },
        {
          title: "Workflow Orchestration",
          description: "Complex coordination between 15 AI agents for seamless content production",
          icon: Workflow
        }
      ],
      results: [
        "400% increase in content output across channels",
        "15 AI agents working in coordinated content generation",
        "85% reduction in content creation time",
        "200% increase in global lead generation",
        "Consistent messaging across all markets and channels"
      ]
    }
  },
  {
    id: "evolve-to-grow",
    title: "Evolve to Grow: AI-Powered Content Platform",
    description: "Custom AI platform that generates authentic content in Tristan Wright's voice, automating content creation across multiple channels.",
    image: "https://iili.io/3n5Jr8P.webp",
    detailedInfo: {
      challenge: "Tristan Wright, a prominent business coach from Australia, needed to scale his content creation while maintaining his unique voice and expertise across multiple platforms.",
      solution: "We developed a specialized AI content generation platform that learns from Tristan's existing content to create authentic, high-quality materials that perfectly match his tone and expertise.",
      features: [
        {
          title: "Voice Cloning & Style Matching",
          description: "Advanced language models trained on Tristan's content to replicate his unique writing style and tone",
          icon: MessageSquare
        },
        {
          title: "Multi-Channel Content Creation",
          description: "Automated generation of blog posts, social media content, and educational materials",
          icon: FileText
        },
        {
          title: "Knowledge Integration",
          description: "Deep integration of Tristan's business coaching expertise and methodologies",
          icon: Brain
        },
        {
          title: "Content Pipeline Automation",
          description: "Streamlined workflow for content creation, review, and publishing across platforms",
          icon: Workflow
        },
        {
          title: "Quality Assurance System",
          description: "AI-powered verification to ensure content maintains professional standards and brand voice",
          icon: CheckCircle
        }
      ],
      results: [
        "90% reduction in content creation time",
        "300% increase in content output across platforms",
        "99% accuracy in matching Tristan's writing style",
        "Expanded reach to 3x more audience segments",
        "Maintained consistent engagement rates across automated content"
      ]
    }
  },
  {
    id: "tech-support-ai",
    title: "WizzAir: AI-Powered Tech Support System",
    description: "Revolutionized WizzAir's technical support with an advanced AI system that handles 75% of user queries automatically, dramatically improving response times and service quality.",
    image: "https://iili.io/3nR8lLv.png",
    detailedInfo: {
      challenge: "WizzAir's technical support team was overwhelmed with a high volume of customer queries, resulting in extended wait times and inconsistent service quality across their European operations.",
      solution: "We implemented a sophisticated AI support system using agentic RAG architecture and state-of-the-art LLMs, enabling automated handling of complex technical queries while maintaining WizzAir's high service standards.",
      features: [
        {
          title: "Advanced Knowledge Base Integration",
          description: "Custom knowledge base with company-specific technical documentation, product manuals, and resolution pathways",
          icon: Brain
        },
        {
          title: "Microsoft Teams Integration",
          description: "Seamless integration with Microsoft Teams workspace for immediate AI assistance within the existing workflow",
          icon: MessageSquare
        },
        {
          title: "Complex Query Analysis",
          description: "Advanced natural language processing to understand and resolve intricate technical problems based on context",
          icon: Cpu
        },
        {
          title: "Multi-step Reasoning",
          description: "Sophisticated reasoning chains to troubleshoot complex issues through a series of logical steps",
          icon: Server
        },
        {
          title: "Human Handoff Protocol",
          description: "Smart escalation system for seamlessly transitioning to human support when needed",
          icon: Users
        }
      ],
      results: [
        "75% reduction in queries requiring human intervention",
        "Average response time decreased from 4 hours to under 3 minutes",
        "98.5% accuracy in technical solutions provided",
        "85% increase in employee satisfaction with technical support",
        "52% reduction in overall technical support costs"
      ]
    }
  },
  {
    id: "simply-contact",
    title: "Simply Contact: AI-Powered Customer Service",
    description: "We created internal customer service chat AI agents equipped with specific knowledge base and web searching tools, providing step-by-step solutions for complex tech issues.",
    image: "https://i.imgur.com/X0YH1yW.jpeg",
    detailedInfo: {
      challenge: "Simply Contact needed to enhance their customer service efficiency while maintaining high-quality support for complex technical issues.",
      solution: "We developed an AI-powered internal support system that combines knowledge base integration with web searching capabilities to assist customer service representatives.",
      features: [
        {
          title: "Intelligent Knowledge Base",
          description: "Custom-trained AI agents with company-specific support documentation and procedures",
          icon: Brain
        },
        {
          title: "Web Search Integration",
          description: "Advanced web searching capabilities to find and validate technical solutions",
          icon: FileText
        },
        {
          title: "Step-by-Step Guidance",
          description: "Detailed, sequential instructions for resolving complex technical issues",
          icon: Workflow
        },
        {
          title: "Visual Support",
          description: "Integration of images and diagrams for clearer technical instructions",
          icon: MessageSquare
        },
        {
          title: "Real-time Assistance",
          description: "Instant AI support for customer service representatives during live interactions",
          icon: Users
        }
      ],
      results: [
        "60% reduction in average resolution time",
        "85% first-contact resolution rate",
        "40% increase in customer satisfaction scores",
        "Reduced training time for new support staff by 50%",
        "95% accuracy in technical solution recommendations"
      ]
    }
  },
  {
    id: "inkmypapers",
    title: "InkMyPapers: AI Academic Writing System",
    description: "Developed an advanced academic paper writing system with specialized AI agents for research, writing, and quality assurance.",
    image: "https://i.imgur.com/jQY43Xz.png",
    detailedInfo: {
      challenge: "A major Malaysian service provider needed to scale their academic writing services while maintaining high quality and academic standards.",
      solution: "We created a comprehensive AI system with specialized agents for research, outline creation, writing, and quality control, requiring only light human editing for final output.",
      features: [
        {
          title: "Research Automation",
          description: "AI-powered research gathering and source validation across academic databases",
          icon: Brain
        },
        {
          title: "Structured Writing",
          description: "Intelligent outline generation and systematic content development",
          icon: FileText
        },
        {
          title: "Quality Assurance",
          description: "Automated checks for academic standards, citations, and plagiarism",
          icon: CheckCircle
        },
        {
          title: "Content Optimization",
          description: "Advanced language models for tone adjustment and content humanization",
          icon: MessageSquare
        },
        {
          title: "Workflow Integration",
          description: "Seamless process from assignment to final delivery with minimal human intervention",
          icon: Workflow
        }
      ],
      results: [
        "80% reduction in content creation time",
        "95% acceptance rate for generated papers",
        "70% decrease in editing requirements",
        "100% increase in service capacity",
        "Consistent high-quality output across all subjects"
      ]
    }
  },
  {
    id: "botpress",
    title: "Botpress: Expert Chatbot Development",
    description: "As one of only 20 certified Botpress experts worldwide, we deliver enterprise-grade conversational AI solutions for major clients.",
    image: "https://i.imgur.com/JYJBjsU.png",
    detailedInfo: {
      challenge: "Enterprise clients needed sophisticated conversational AI solutions that could handle complex interactions while maintaining natural dialogue flow and integration with existing systems.",
      solution: "Leveraging our certified Botpress expertise, we develop advanced chatbot solutions that combine natural language understanding with powerful workflow automation and seamless system integration.",
      features: [
        {
          title: "Enterprise Integration",
          description: "Seamless connection with existing business systems and workflows",
          icon: Workflow
        },
        {
          title: "Advanced NLP",
          description: "Sophisticated natural language processing for complex conversation handling",
          icon: Brain
        },
        {
          title: "Custom Workflows",
          description: "Tailored conversation flows designed for specific business needs",
          icon: MessageSquare
        },
        {
          title: "Multi-Channel Support",
          description: "Unified chatbot experience across various communication platforms",
          icon: Users
        },
        {
          title: "Analytics & Optimization",
          description: "Comprehensive tracking and continuous improvement of bot performance",
          icon: FileText
        }
      ],
      results: [
        "Successfully deployed enterprise solutions for major clients",
        "Recognized as top 20 certified Botpress experts globally",
        "90% reduction in routine customer service inquiries",
        "85% positive user satisfaction ratings",
        "24/7 automated support coverage"
      ]
    }
  },
  {
    id: "follow-fox",
    title: "Follow Fox: AI-Powered Marketing Automation",
    description: "Exciting collaboration exploring and testing cutting-edge AI technologies for next-generation marketing automation solutions.",
    image: "https://static.tildacdn.one/tild6465-3336-4231-a431-303837633966/FollowFox_2.png",
    detailedInfo: {
      challenge: "In the rapidly evolving marketing automation landscape, Follow Fox aims to stay at the forefront by exploring and implementing the latest AI technologies.",
      solution: "Through our collaborative partnership, we're testing and exploring innovative AI applications in marketing automation, focusing on advanced analytics, intelligent automation, and predictive technologies.",
      features: [
        {
          title: "Intelligent Lead Scoring",
          description: "Testing advanced AI algorithms for sophisticated lead analysis and scoring",
          icon: Brain
        },
        {
          title: "Campaign Optimization",
          description: "Exploring AI-driven approaches to campaign performance optimization",
          icon: Workflow
        },
        {
          title: "Predictive Analytics",
          description: "Evaluating cutting-edge predictive models for marketing insights",
          icon: Cpu
        },
        {
          title: "Automated Personalization",
          description: "Investigating AI applications for advanced content personalization",
          icon: MessageSquare
        },
        {
          title: "Engagement Tracking",
          description: "Testing innovative approaches to user engagement analysis",
          icon: Users
        }
      ],
      results: [
        "Active exploration of next-generation AI marketing technologies",
        "Successful testing of multiple innovative AI approaches",
        "Valuable insights into AI applications in marketing automation",
        "Strong collaborative partnership in AI research",
        "Continuous evaluation of emerging AI capabilities"
      ]
    }
  }
];

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const scrollContainerRef = useRef(null);
  const scrollSpeedMultiplier = 6; // Increased from 3 to 6

  // Handle horizontal scrolling with touchpad/mouse wheel
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollContainerRef.current) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          // User is intentionally scrolling horizontally
          scrollContainerRef.current.scrollLeft += e.deltaX * scrollSpeedMultiplier;
        } else {
          // Convert vertical scroll to horizontal
          scrollContainerRef.current.scrollLeft += e.deltaY * scrollSpeedMultiplier;
        }
        e.preventDefault();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleReadMore = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <Hero
        title="Case Studies"
        subtitle="Explore how we've helped leading companies transform their operations with cutting-edge AI solutions. These success stories demonstrate our proven track record in delivering exceptional business outcomes."
        actions={[
          {
            label: "View All Projects",
            href: "#case-studies",
            variant: "outline"
          },
          {
            label: "Start Your Project",
            href: "#contact"
          }
        ]}
        className="bg-black"
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[800px]"
        actionsClassName="mt-8"
      />
      
      <div id="case-studies" className="container mx-auto px-4 py-24 relative">
        {/* Horizontal scrolling container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide -mx-4 px-4 will-change-scroll"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex gap-6 pb-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="min-w-[420px] w-[420px] flex-shrink-0"
              >
                <CaseStudyCard study={study} onReadMore={handleReadMore} />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for case study details */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-[#0A0F2C] to-[#141B41] rounded-3xl max-w-5xl max-h-[90vh] overflow-y-auto text-white relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[300px] overflow-hidden rounded-t-3xl">
                <img 
                  src={selectedCaseStudy.image} 
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-[#0A0F2C]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/30">
                      <Brain className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h2 className="text-4xl font-bold">{selectedCaseStudy.title}</h2>
                  </div>
                  <p className="text-lg text-gray-300 max-w-3xl">{selectedCaseStudy.description}</p>
                </div>
              </div>

              <div className="p-10 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-medium mb-3 text-cyan-400">The Challenge</h3>
                    <p className="text-gray-300">{selectedCaseStudy.detailedInfo.challenge}</p>
                  </div>
                </div>
                 
                <div>
                  <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-medium mb-3 text-cyan-400">Our Solution</h3>
                    <p className="text-gray-300">{selectedCaseStudy.detailedInfo.solution}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-medium mb-6 text-cyan-400">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCaseStudy.detailedInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="flex items-center justify-center w-10 h-10">
                        <feature.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6 text-cyan-400">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCaseStudy.detailedInfo.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="flex items-center justify-center w-10 h-10">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-gray-300 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}