import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  study: {
    id: string;
    title: string;
    description: string;
    image: string;
    href?: string;
    detailedInfo?: any;
  };
  onReadMore?: (study: any) => void;
}

export default function CaseStudyCard({ study, onReadMore }: CaseStudyCardProps) {
  const handleClick = () => {
    if (study.detailedInfo && onReadMore) {
      onReadMore(study);
    }
  };

  const content = (
    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-black group">
      <img 
        src={study.image} 
        alt={study.title}
        className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105 px-12 py-16"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-xl font-light leading-tight mb-2 text-white">{study.title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2 font-extralight leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{study.description}</p>
        <div className="flex items-center text-sm font-light text-cyan-400">
          Read more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  if (study.href) {
    return (
      <motion.a 
        href={study.href}
        className="block group cursor-pointer h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div 
      onClick={handleClick}
      className="block group cursor-pointer h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {content}
    </motion.div>
  );
}