import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const testimonials = [
  { name: "Marcus Anderson", role: "CEO, Data.storage", quote: "With very little guidance team delivered designs that were consistently spot on...", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "alexwu", role: "Founder, Nexgate", quote: "Viktor led the creation of our best fundraising deck to date!...", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "James Mitchell", role: "VP Product, LaunchPad", quote: "Working with Viktor transformed our product vision...", avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "Rachel Foster", role: "Co-founder, Nexus Labs", quote: "The design quality exceeded our expectations...", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" },
  { name: "David Zhang", role: "Head of Design, Paradigm Labs", quote: "Incredible work from start to finish...", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" }
];

// Tripled for infinite illusion
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const TestimonialCarousel = () => {
  const { ref, isInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => setCurrentIndex(prev => prev - 1);
  const handleNext = () => setCurrentIndex(prev => prev + 1);

  return (
    <section ref={ref} className={`w-full py-20 overflow-hidden ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="md:max-w-4xl mx-auto px-6 flex justify-between items-end mb-10">
        <h2 className="text-[32px] md:text-[40px] text-[#0D212C] leading-[1.1]">
          What <span className="font-mondwest">builders</span> say
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
          </div>
          <span className="text-sm font-medium">Clutch 5/5</span>
        </div>
      </div>

      <div 
        className="relative flex gap-6 px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          transform: `translateX(calc(-${currentIndex * (427.5 + 24)}px + 50vw - 213.75px))`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
        }}
      >
        {infiniteTestimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-white shrink-0 w-full md:w-[427.5px] rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8"
            style={{
              opacity: Math.abs(idx - currentIndex) > 2 ? 0 : 1,
              transform: `scale(${Math.abs(idx - currentIndex) > 1 ? 0.95 : 1})`,
              transition: 'all 0.8s ease'
            }}
          >
            <svg className="w-8 h-8 mb-4 text-[#0D212C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-base text-[#0D212C] leading-relaxed mb-8">{t.quote}</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-sm text-[#051A24]/70">→ {t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-gray-50 transition">
          <ChevronLeft className="w-6 h-6 text-[#0D212C]" />
        </button>
        <button onClick={handleNext} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-gray-50 transition">
          <ChevronRight className="w-6 h-6 text-[#0D212C]" />
        </button>
      </div>
    </section>
  );
};