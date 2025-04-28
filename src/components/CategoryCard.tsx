
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  path: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  path,
  className,
}) => {
  return (
    <Link to={path}>
      <div 
        className={cn(
          "category-card group h-full", 
          className
        )}
      >
        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full" style={{ backgroundColor: color + '20' }}>
          <Icon className="w-7 h-7" style={{ color }} />
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
        <p className="text-sm text-glow-neutral-gray">{description}</p>
        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r transition-all duration-300 ease-in-out" style={{ backgroundImage: `linear-gradient(to right, ${color}, ${color}80)` }}></div>
      </div>
    </Link>
  );
};

export default CategoryCard;
