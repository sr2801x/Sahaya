
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Volunteer = () => {
  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Help Others</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Volunteer Network</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Join our global network of volunteers helping communities prepare for, respond to, and recover from disasters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="tech-card h-full">
            <h3 className="text-xl font-semibold mb-4">Become a Volunteer</h3>
            <p className="text-gray-300 mb-6">
              Register to join our network of trained volunteers who respond to emergencies and help communities in need.
            </p>
            <Button className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white w-full">
              Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="tech-card h-full">
            <h3 className="text-xl font-semibold mb-4">Request Volunteer Help</h3>
            <p className="text-gray-300 mb-6">
              Need assistance with disaster preparation or recovery? Submit a request and our volunteers will help.
            </p>
            <Button className="bg-sahaya-purple hover:bg-sahaya-purple/90 text-white w-full">
              Request Assistance <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="tech-card mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-sahaya-purple/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-sahaya-purple" />
            </div>
            <h3 className="text-xl font-semibold">Current Volunteer Opportunities</h3>
          </div>
          
          <div className="space-y-4">
            {['Flood Relief in Mumbai', 'Earthquake Recovery in Mexico', 'Wildfire Prevention in California'].map((item, index) => (
              <div key={index} className="p-4 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors">
                <div className="flex justify-between">
                  <h4 className="font-medium">{item}</h4>
                  <span className="text-sahaya-blue">10 volunteers needed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
