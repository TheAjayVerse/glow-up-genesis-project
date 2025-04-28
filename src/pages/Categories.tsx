
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { Brain, Droplet, Flame, Sparkle, Smile } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: "Skin",
      description: "Personalized skincare routines and product recommendations for radiant skin.",
      icon: Droplet,
      color: "#E57CD8", // pink
      path: "/categories/skin",
      features: [
        "Custom skincare routines",
        "Product recommendations",
        "Skin condition analysis",
        "Texture improvement tips"
      ]
    },
    {
      title: "Hair",
      description: "Expert haircare tips and styles tailored to your hair type and goals.",
      icon: Sparkle,
      color: "#9B87F5", // purple
      path: "/categories/hair",
      features: [
        "Hair type assessment",
        "Style recommendations",
        "Product suggestions",
        "Treatment protocols"
      ]
    },
    {
      title: "Body",
      description: "Customized fitness plans and nutrition advice to achieve your ideal physique.",
      icon: Flame,
      color: "#4BBEEC", // blue
      path: "/categories/body",
      features: [
        "Fitness plans",
        "Nutrition guides",
        "Body transformation tracking",
        "Exercise tutorials"
      ]
    },
    {
      title: "Teeth",
      description: "Dental care recommendations and whitening techniques for a perfect smile.",
      icon: Smile,
      color: "#FFBE5C", // orange
      path: "/categories/teeth",
      features: [
        "Whitening techniques",
        "Dental hygiene tips",
        "Product recommendations",
        "Smile enhancement"
      ]
    },
    {
      title: "Mind",
      description: "Mental wellness practices and exercises for inner clarity and confidence.",
      icon: Brain,
      color: "#62D99C", // green
      path: "/categories/mind",
      features: [
        "Meditation guides",
        "Stress management",
        "Confidence boosting",
        "Mental clarity exercises"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Categories</h1>
            <p className="text-glow-neutral-gray max-w-2xl mx-auto">
              Explore our comprehensive categories designed to help you achieve your transformation goals.
            </p>
            <div className="greek-pillar-divider mx-auto w-24"></div>
          </div>
          
          {/* Categories */}
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-glow-soft-purple">
                <div className="flex flex-col md:flex-row">
                  {/* Category info */}
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: category.color + '20' }}>
                        <category.icon className="h-6 w-6" style={{ color: category.color }} />
                      </div>
                      <h2 className="text-2xl font-serif font-semibold">{category.title}</h2>
                    </div>
                    
                    <p className="text-glow-neutral-gray mb-6">{category.description}</p>
                    
                    <h3 className="font-medium mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: category.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={category.path} 
                      className="inline-flex items-center font-medium text-sm"
                      style={{ color: category.color }}
                    >
                      Explore {category.title}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                  
                  {/* Category image */}
                  <div className="md:w-1/2 h-64 md:h-auto bg-glow-light-gray relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <category.icon className="w-24 h-24 opacity-20" style={{ color: category.color }} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
