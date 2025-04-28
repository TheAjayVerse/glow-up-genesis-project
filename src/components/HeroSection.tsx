
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background decoration - Greek-inspired subtle pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-glow-purple/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-glow-soft-purple/30 to-transparent"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
          Discover Your <span className="bg-gradient-to-r from-glow-purple to-glow-purple-dark bg-clip-text text-transparent">Inner Radiance</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-glow-neutral-gray">
          Holistic self-improvement inspired by timeless beauty. Transform your skin, hair, body, teeth, and mind with personalized care routines and expert advice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="glow-button animate-glow">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-glow-purple text-glow-purple hover:bg-glow-soft-purple/30">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "87%", label: "Success Rate" },
            { number: "30+", label: "Expert Contributors" },
            { number: "4.9", label: "User Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-serif font-bold text-glow-purple-dark">{stat.number}</p>
              <p className="text-sm text-glow-neutral-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
