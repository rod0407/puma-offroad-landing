import React from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const PricingSection = () => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end md:max-w-4xl mx-auto md:ml-auto">
        {/* Card 1 (Dark) */}
        <div className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <div>
            <h3 className="text-[#F6FCFF] text-[22px] font-medium mb-4">Monthly Partnership</h3>
            <p className="text-[#E0EBF0] mb-8">A dedicated creative design team.<br/>You work directly with Viktor.</p>
          </div>
          <div>
            <div className="text-[#F6FCFF] text-2xl font-medium mb-1">$5,000</div>
            <div className="text-[#E0EBF0] text-sm mb-8">Monthly</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="https://halaskastudio.com/book" variant="primary" className="bg-white text-[#051A24] shadow-none">Start a chat</Button>
              <Button href="https://halaskastudio.com/book" variant="secondary" className="bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10">How it works</Button>
            </div>
          </div>
        </div>

        {/* Card 2 (Light) */}
        <div className={`bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="text-[#0D212C] text-[22px] font-medium mb-4">Custom Project</h3>
            <p className="text-[#051A24]/70 mb-8">Fixed scope, fixed timeline.<br/>Same team, same standards.</p>
          </div>
          <div>
            <div className="text-[#0D212C] text-2xl font-medium mb-1">$5,000</div>
            <div className="text-[#051A24]/70 text-sm mb-8">Minimum</div>
            <Button variant="tertiary">Start a chat</Button>
          </div>
        </div>
      </div>
    </section>
  );
};