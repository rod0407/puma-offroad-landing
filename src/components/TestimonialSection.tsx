import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const TestimonialSection = () => {
  const { ref, isInView } = useInViewAnimation();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Parallax effect constraint
      setOffsetY(Math.min(offset * 0.15, 200));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="py-12 px-6 max-w-2xl mx-auto text-center flex flex-col items-center">
      <Quote 
        className={`w-6 h-6 text-slate-900 mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} 
        style={{ animationDelay: '0.1s' }} 
      />
      <h2 className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] color-[#0D212C] tracking-tight mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        'I left <span className="font-mondwest">Apple</span> to build the studio I always wanted to work with'
      </h2>
      <p className={`italic text-sm text-[#273C46] mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
        Viktor Oddy
      </p>
      
      <div className={`flex items-center justify-center gap-8 text-slate-900 font-medium text-[24px] mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        <span style={{ width: '80px' }}>Apple</span>
        <span style={{ width: '83px' }}>IDEO</span>
        <span style={{ width: '110px' }}>Polygon</span>
      </div>

      <div 
        className={`w-full max-w-xs ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} 
        style={{ animationDelay: '0.5s', transform: `translateY(${offsetY}px)` }}
      >
        <img 
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" 
          alt="Chris Halaska" 
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};