
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <CategoriesSection />
        
        <BeforeAfterSection />
        
        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-white to-glow-light-gray/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose We Glow</h2>
              <p className="text-glow-neutral-gray max-w-2xl mx-auto">
                Our platform offers a unique, holistic approach to self-improvement based on timeless principles.
              </p>
              <div className="greek-pillar-divider mx-auto w-24"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Recommendations",
                  description: "Get custom advice tailored to your unique needs and goals."
                },
                {
                  title: "Expert Guidance",
                  description: "Access insights from top professionals in wellness and beauty."
                },
                {
                  title: "Track Your Progress",
                  description: "Visualize your transformation journey with our before & after tools."
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-glow-soft-purple">
                  <div className="bg-glow-soft-purple rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <Star className="text-glow-purple h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-glow-neutral-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-glow-purple to-glow-purple-dark text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Begin Your Transformation Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of others who have discovered their inner radiance with We Glow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <h3 className="font-serif font-semibold text-xl mb-4">Free Account</h3>
                <ul className="space-y-3 mb-8">
                  {["Basic recommendations", "Community access", "Limited photo uploads"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-glow-purple hover:bg-white/90">
                  Get Started
                </Button>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white text-glow-purple px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4">Premium Account</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Personalized routines", 
                    "Unlimited photo uploads", 
                    "Expert consultation", 
                    "Exclusive content"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-glow-purple hover:bg-white/90">
                  Go Premium
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
