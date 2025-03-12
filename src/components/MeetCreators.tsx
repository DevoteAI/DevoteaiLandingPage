import React from 'react';
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

const creators = [
  {
    name: 'Lasha',
    role: 'Tech Lead - Architects and oversees all technical implementations',
    image: 'https://static.tildacdn.com/tild3665-3863-4638-b935-306237393537/tornike8142_Nft_Cart.png'
  },
  {
    name: 'Rati',
    role: 'Project Lead - Manages timelines and ensures quality deliverables',
    image: 'https://static.tildacdn.com/tild6636-3830-4933-b863-643239633334/tornike8142_Nft_Cart.png'
  },
  {
    name: 'Tornike',
    role: 'Business Lead - Drives growth strategy and AI solution consulting',
    image: 'https://static.tildacdn.com/tild6361-3533-4535-b634-653264396137/tornike8142_Nft_Cart.png'
  }
];

export default function MeetCreators() {
  return (
    <section id="meet-creators" className="relative py-24 bg-gradient-to-b from-[#141B41] to-[#0A0F2C] overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Meet Creators</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are three like-minded individuals, backed by 5 external people helping us to create magic
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center flex flex-col items-center"
              >
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white/10"
                  />
                </div>
                <div className="bg-white/5 rounded-xl p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-3">{creator.name}</h3>
                  <p className="text-gray-400">{creator.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}