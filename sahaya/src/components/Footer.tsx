
import React from 'react';
import { Shield, Twitter, Facebook, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sahaya-dark border-t border-sahaya-blue/20 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-sahaya-blue" />
              <span className="text-xl font-bold text-white">
                <span className="text-sahaya-blue">S</span>ahaya
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your One-Stop Platform for Disaster Preparedness, Response & Recovery.
              Connecting communities and providing tools for safety during critical times.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#alerts" className="text-gray-400 hover:text-sahaya-blue transition-colors">Disaster Alerts</a></li>
              <li><a href="#volunteer" className="text-gray-400 hover:text-sahaya-blue transition-colors">Volunteer Network</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-sahaya-blue transition-colors">Disaster Education</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-sahaya-blue transition-colors">Donation Hub</a></li>
              <li><a href="#prediction" className="text-gray-400 hover:text-sahaya-blue transition-colors">Prediction & Simulation</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Sahaya. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-sahaya-blue transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
