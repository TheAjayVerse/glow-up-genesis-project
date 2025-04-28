
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-glow-soft-purple">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold bg-gradient-to-r from-glow-purple to-glow-purple-dark bg-clip-text text-transparent">
            We Glow
          </span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border-b border-glow-soft-purple p-4 animate-fade-in">
                <nav className="flex flex-col space-y-4">
                  <Link to="/profile" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                    Profile
                  </Link>
                  <Link to="/categories" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                    Categories
                  </Link>
                  <Link to="/progress" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                    Progress
                  </Link>
                  <Link to="/community" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                    Community
                  </Link>
                  <Button className="glow-button w-full">Sign In</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/profile" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                Profile
              </Link>
              <Link to="/categories" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                Categories
              </Link>
              <Link to="/progress" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                Progress
              </Link>
              <Link to="/community" className="text-glow-dark-purple hover:text-glow-purple transition-colors">
                Community
              </Link>
            </nav>
            <Button className="glow-button flex items-center gap-2">
              <User size={16} />
              <span>Sign In</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
