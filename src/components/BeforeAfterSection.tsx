import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const testimonials = [{
  name: "Sophia K.",
  beforeImg: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&q=80",
  afterImg: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&q=80",
  quote: "We Glow transformed my skincare routine completely. My skin is clearer than ever!",
  category: "Skin"
}, {
  name: "Alex M.",
  beforeImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=800&fit=crop&q=80",
  afterImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=800&fit=crop&q=80",
  quote: "The fitness recommendations were tailored perfectly to my goals, and I'm seeing real results.",
  category: "Body"
}, {
  name: "Maya L.",
  beforeImg: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=800&fit=crop&q=80",
  afterImg: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=800&fit=crop&q=80",
  quote: "My mental clarity has improved so much since following the mind exercises.",
  category: "Mind"
}];
const BeforeAfterSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  const activeTestimonial = testimonials[activeIndex];
  return <section className="py-16 bg-gradient-to-b from-glow-light-gray/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Transformation Stories</h2>
          <p className="text-glow-neutral-gray max-w-2xl mx-auto">
            See the amazing results our users have achieved on their journey to their best selves.
          </p>
          <div className="greek-pillar-divider mx-auto w-24"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl bg-white shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1">
                <div className="flex-1 relative">
                  <span className="absolute top-4 left-4 bg-glow-soft-purple rounded-full px-3 py-1 text-xs font-medium text-glow-purple-dark z-10">
                    Before
                  </span>
                  <img src={activeTestimonial.beforeImg} alt={`${activeTestimonial.name} before`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 relative">
                  <span className="absolute top-4 left-4 bg-glow-soft-peach rounded-full px-3 py-1 text-xs font-medium text-glow-purple-dark z-10">
                    After
                  </span>
                  
                  <div className="absolute bottom-4 right-4 bg-glow-purple text-white text-xs font-medium rounded-full px-3 py-1">
                    {activeTestimonial.category}
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BeforeAfterSection;