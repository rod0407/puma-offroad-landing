import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  { title: "evr", desc: "From idea to millions raised for a web3 AI product", img: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif" },
  { title: "Automation Machines", desc: "Streamlining industrial automation processes", img: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif" },
  { title: "xPortfolio", desc: "Modern portfolio management platform", img: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif" }
];

const ProjectItem = ({ title, desc, img }: { title: string, desc: string, img: string }) => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div ref={ref} className={`flex flex-col gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="ml-20 md:ml-28">
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24]">{title}</h3>
        <p className="text-sm md:text-base text-[#051A24]/70 mt-1">{desc}</p>
      </div>
      <img src={img} alt={title} className="w-full rounded-2xl shadow-lg object-cover" />
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20">
      {projects.map((p, idx) => <ProjectItem key={idx} {...p} />)}
    </section>
  );
};