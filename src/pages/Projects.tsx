import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowLeftCircle, ArrowRightCircle, Stethoscope, Book, ExternalLink, Target, Users, FileText, Video, Mail, Globe, Search, Building2, Brain, Bell } from 'lucide-react';
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

const projects = [
  {
    title: "LeadGen AI",
    subtitle: "Intelligent Lead Discovery & Content Automation Platform",
    description: {
      main: "A revolutionary AI platform that combines intelligent lead prospecting with automated content creation. LeadMagnet AI transforms how businesses discover and engage potential clients through data-driven insights and personalized content generation.",
      features: [
        {
          title: "Smart Business Discovery",
          icon: Search,
          description: "Identifies potential client businesses based on sophisticated matching algorithms and industry-specific criteria."
        },
        {
          title: "Geographic Intelligence",
          icon: Globe,
          description: "Locates and analyzes businesses in specific geographic areas, providing detailed market insights."
        },
        {
          title: "Company Profiling",
          icon: Building2,
          description: "Generates comprehensive company profiles including business descriptions, tech stack, and growth indicators."
        },
        {
          title: "Decision Maker Mapping",
          icon: Users,
          description: "Identifies key decision-makers within target companies using role-based AI analysis."
        },
        {
          title: "Multi-Channel Content Creation",
          icon: FileText,
          description: "AI-powered generation of articles, whitepapers, and case studies tailored to each prospect."
        },
        {
          title: "Rich Media Generation",
          icon: Video,
          description: "Creates engaging video scripts and professional voiceovers for multimedia campaigns."
        }
      ]
    },
    icon: Target,
    image: "https://iili.io/3qQgTIR.webp",
    screenshots: [
      "https://iili.io/3qQgTIR.webp",
      "https://iili.io/3qQgxkJ.webp",
      "https://iili.io/3qQguXp.webp",
      "https://iili.io/3qQgzmv.webp",
      "https://iili.io/3qQg5BI.webp",
      "https://iili.io/3qQgALN.webp",
      "https://iili.io/3qQg71t.webp",
      "https://iili.io/3qQgYrX.webp",
      "https://iili.io/3qQgc2n.webp",
      "https://iili.io/3qQg0kG.webp"
    ]
  },
  {
    title: "GenBook",
    subtitle: "AI-Powered Educational Content & Publishing Platform",
    description: {
      main: "A revolutionary educational platform that harnesses AI to transform how educational content is created, customized, and delivered. GenBook empowers educators to generate comprehensive, engaging learning materials tailored to any subject or academic level.",
      features: [
        {
          title: "Smart Content Generation",
          icon: FileText,
          description: "Creates textbooks, workbooks, and study guides using advanced AI algorithms trained on educational standards."
        },
        {
          title: "Curriculum Alignment",
          icon: Target,
          description: "Automatically aligns generated content with international educational standards and frameworks."
        },
        {
          title: "Interactive Elements",
          icon: Users,
          description: "Generates interactive exercises, quizzes, and assessments to enhance student engagement."
        },
        {
          title: "Multimedia Integration",
          icon: Video,
          description: "Creates supplementary video scripts, audio content, and visual aids to support diverse learning styles."
        },
        {
          title: "Personalized Learning",
          icon: Book,
          description: "Adapts content difficulty and presentation based on student performance and learning preferences."
        },
        {
          title: "Publishing Tools",
          icon: Globe,
          description: "Professional-grade publishing tools for both digital and print formats with customizable templates."
        }
      ]
    },
    icon: Book,
    image: "https://iili.io/3qLcMZB.png",
    screenshots: [
      "https://iili.io/3qLcMZB.png",
      "https://iili.io/3qLclvj.png",
      "https://iili.io/3qLcGjV.png",
      "https://iili.io/3qLcETQ.png",
      "https://iili.io/3qLcNaa.png",
      "https://iili.io/3qLcO8J.png",
      "https://iili.io/3qLch6F.png",
      "https://iili.io/3qLcw3g.png"
    ]
  },
  {
    title: "MediMind",
    subtitle: "AI-Powered Medical Assistant for Patient Care",
    description: {
      main: "MediMind is your intelligent medical co-pilot, revolutionizing how doctors manage complex patient cases. By leveraging advanced AI, it provides real-time analysis, evidence-based recommendations, and streamlined patient tracking to enhance clinical decision-making and improve patient outcomes.",
      features: [
        {
          title: "Smart Patient Data Entry",
          icon: FileText,
          description: "Streamlined clinical information input with intelligent form automation and natural language processing."
        },
        {
          title: "AI-Driven Analysis",
          icon: Brain,
          description: "Real-time insights and structured case summaries powered by advanced medical AI algorithms."
        },
        {
          title: "Evidence-Based Guidelines",
          icon: Book,
          description: "Instant access to current medical guidelines and treatment protocols from trusted sources."
        },
        {
          title: "Document Intelligence",
          icon: Search,
          description: "Advanced search and analysis of patient documents with medical context understanding."
        },
        {
          title: "Clinical Alerts",
          icon: Bell,
          description: "Smart notifications for medication schedules, contraindications, and critical updates."
        },
        {
          title: "Care Collaboration",
          icon: Users,
          description: "Secure platform for case discussions and specialist consultations with AI-assisted insights."
        }
      ]
    },
    icon: Stethoscope,
    image: "https://iili.io/3qsb5Qa.png",
    screenshots: [
      "https://iili.io/3qsb5Qa.png",
      "https://iili.io/3qsbRhg.webp",
      "https://iili.io/3qsbATF.webp",
      "https://iili.io/3qsbTp1.webp",
      "https://iili.io/3qsbYCJ.webp",
      "https://iili.io/3qsbaEv.webp",
      "https://iili.io/3qsbc4R.webp"
    ]
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const [showDetails, setShowDetails] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0); 

  const handleProjectClick = (index: number) => {
    setCurrentProject(index);
    setCurrentImage(0);
    setShowDetails(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === projects[currentProject].screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? projects[currentProject].screenshots.length - 1 : prev - 1
    );
  };

  if (!showDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#141B41] px-4">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-12">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl mx-auto text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3"
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transforming Industries Through AI Innovation
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(index)}
              >
                <div className="flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10">
                  <div className="flex-shrink-0">
                    {React.createElement(project.icon, { 
                      className: "w-12 h-12 text-cyan-400 transition-transform duration-300 group-hover:scale-110" 
                    })}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 mb-6">{project.subtitle}</p>
                    <div className="flex items-center text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="mr-2 font-medium">Explore Project</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#141B41]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/90 via-[#0A0F2C]/80 to-[#141B41]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <button
            onClick={() => setShowDetails(false)}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> 
            Back to Projects
          </button>
          
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="mt-8 text-center"
          >
            <motion.div variants={fadeIn} className="flex items-center space-x-4 mb-6">
              {React.createElement(projects[currentProject].icon, { className: "w-12 h-12 text-cyan-400" })}
              <h1 className="text-4xl md:text-5xl font-bold text-white">{projects[currentProject].title}</h1>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-3xl mt-6 mx-auto">
              {projects[currentProject].description.main}
            </motion.p>
            {projects[currentProject].description.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects[currentProject].description.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative h-[500px] rounded-2xl overflow-hidden group bg-black/20"
        >
          <img
            src={projects[currentProject].screenshots[currentImage]}
            alt={`${projects[currentProject].title} Screenshot`}
            className="w-full h-full object-contain"
          />
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/50 px-4 py-2 rounded-full">
            {projects[currentProject].screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                } hover:bg-white`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentProject === 0 ? (
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Supercharge Your Lead Generation with {projects[currentProject].title}
              </span>
            ) : currentProject === 1 ? (
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionize Education with {projects[currentProject].title}
              </span>
            ) : currentProject === 2 ? (
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Enhance Patient Care with {projects[currentProject].title}
              </span>
            ) : (
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Interested in {projects[currentProject].title}?
              </span>
            )}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentProject === 0 ? (
              "Experience the power of AI-driven lead discovery and automated content creation. Schedule a demo to see how we can revolutionize your business development process."
            ) : currentProject === 1 ? (
              "Transform your educational content creation process with AI-powered tools. Book a demo to see how we can enhance your teaching materials and student engagement."
            ) : currentProject === 2 ? (
              "Experience how AI can enhance your medical practice. Schedule a demo to see how we can help you deliver better patient care with intelligent assistance."
            ) : (
              "Get in touch to learn more about how we can help transform your business."
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-white px-12 py-4 rounded-full text-lg font-medium transition-all shadow-lg ${
              currentProject === 1
                ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 shadow-emerald-500/20"
                : currentProject === 2
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 shadow-indigo-500/20"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-cyan-500/20"
            }`}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}