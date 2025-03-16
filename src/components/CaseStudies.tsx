import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "leadgen-ai",
    title: "LeadGen AI: Revolutionizing Lead Generation",
    description:
      "Discover how our AI-powered lead generation platform transformed business prospecting with intelligent automation and personalized content creation.",
    href: "/projects",
    image: "https://iili.io/3qQgTIR.webp"
  },
  {
    id: "genbook",
    title: "GenBook: AI-Powered Educational Content",
    description:
      "Learn how our AI platform revolutionized educational content creation, making it easier for educators to generate engaging, customized learning materials.",
    href: "/projects",
    image: "https://iili.io/3qLcMZB.png"
  },
  {
    id: "medimind",
    title: "MediMind: Intelligent Medical Assistant",
    description:
      "Explore how our AI medical assistant is transforming patient care with real-time analysis and evidence-based recommendations.",
    href: "/projects",
    image: "https://iili.io/3qsb5Qa.png"
  }
];

export default function CaseStudies() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0A0F2C] to-[#141B41]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              Case Studies
            </h2>
            <p className="max-w-lg text-gray-400">
              Discover how our AI solutions are transforming businesses across industries. 
              These case studies showcase real-world applications and success stories.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {caseStudies.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent via-[#0A0F2C]/40 to-[#0A0F2C]/80" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-gray-200 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-cyan-400">
                        Read more{" "}
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-cyan-400" : "bg-white/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}