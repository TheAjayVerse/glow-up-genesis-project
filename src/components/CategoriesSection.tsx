
import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { Brain, Droplet, Flame, Sparkle, Smile } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: "Skin",
      description: "Personalized skincare routines and product recommendations for radiant skin.",
      icon: Droplet,
      color: "#E57CD8", // pink
      path: "/categories/skin"
    },
    {
      title: "Hair",
      description: "Expert haircare tips and styles tailored to your hair type and goals.",
      icon: Sparkle,
      color: "#9B87F5", // purple
      path: "/categories/hair"
    },
    {
      title: "Body",
      description: "Customized fitness plans and nutrition advice to achieve your ideal physique.",
      icon: Flame,
      color: "#4BBEEC", // blue
      path: "/categories/body"
    },
    {
      title: "Teeth",
      description: "Dental care recommendations and whitening techniques for a perfect smile.",
      icon: Smile,
      color: "#FFBE5C", // orange
      path: "/categories/teeth"
    },
    {
      title: "Mind",
      description: "Mental wellness practices and exercises for inner clarity and confidence.",
      icon: Brain,
      color: "#62D99C", // green
      path: "/categories/mind"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore Categories</h2>
          <p className="text-glow-neutral-gray max-w-2xl mx-auto">
            Discover personalized recommendations across all aspects of your wellness journey.
          </p>
          <div className="greek-pillar-divider mx-auto w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              color={category.color}
              path={category.path}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
