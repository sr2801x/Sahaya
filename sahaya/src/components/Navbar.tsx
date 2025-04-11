
import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-sahaya-dark/80 backdrop-blur-lg border-b border-sahaya-blue/20" 
          : "py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-sahaya-blue" />
          <span className="text-xl font-bold text-white">
            <span className="text-sahaya-blue">S</span>ahaya
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/alerts" 
            className={cn(
              "transition-colors",
              isActive('/alerts') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Alerts
          </Link>
          <Link 
            to="/volunteer" 
            className={cn(
              "transition-colors",
              isActive('/volunteer') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Volunteer
          </Link>
          <Link 
            to="/education" 
            className={cn(
              "transition-colors",
              isActive('/education') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Education
          </Link>
          <Link 
            to="/donate" 
            className={cn(
              "transition-colors",
              isActive('/donate') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Donate
          </Link>
          <Link 
            to="/prediction" 
            className={cn(
              "transition-colors",
              isActive('/prediction') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Prediction
          </Link>
          <Link 
            to="/admin" 
            className={cn(
              "transition-colors",
              isActive('/admin') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
          >
            Admin
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="notification-dot absolute top-1 right-1" />
          </Button>
          <Link to="/get-started">
            <Button className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="notification-dot absolute top-1 right-1" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-sahaya-dark/95 z-40 flex flex-col pt-20 px-6 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 text-lg">
          <Link 
            to="/alerts" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/alerts') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Alerts
          </Link>
          <Link 
            to="/volunteer" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/volunteer') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Volunteer
          </Link>
          <Link 
            to="/education" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/education') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Education
          </Link>
          <Link 
            to="/donate" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/donate') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate
          </Link>
          <Link 
            to="/prediction" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/prediction') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Prediction
          </Link>
          <Link 
            to="/admin" 
            className={cn(
              "transition-colors py-2 border-b border-gray-800",
              isActive('/admin') 
                ? "text-sahaya-blue" 
                : "text-gray-300 hover:text-sahaya-blue"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Admin
          </Link>
          <Link 
            to="/get-started" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white mt-4 w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
