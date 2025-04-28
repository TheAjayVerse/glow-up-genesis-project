
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-glow-soft-purple">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-glow-purple to-glow-purple-dark bg-clip-text text-transparent">
                We Glow
              </span>
            </Link>
            <p className="text-sm text-glow-neutral-gray mb-4">
              Your journey to holistic self-improvement and lasting confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-serif font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/categories/skin" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Skin</Link></li>
                <li><Link to="/categories/hair" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Hair</Link></li>
                <li><Link to="/categories/body" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Body</Link></li>
                <li><Link to="/categories/teeth" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Teeth</Link></li>
                <li><Link to="/categories/mind" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Mind</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">About Us</Link></li>
                <li><Link to="/experts" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Our Experts</Link></li>
                <li><Link to="/contact" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Contact</Link></li>
                <li><Link to="/career" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Careers</Link></li>
                <li><Link to="/press" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-glow-neutral-gray hover:text-glow-purple transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="greek-pillar-divider mt-8 mb-6"></div>
        
        <div className="text-center text-sm text-glow-neutral-gray">
          <p>&copy; {new Date().getFullYear()} We Glow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
