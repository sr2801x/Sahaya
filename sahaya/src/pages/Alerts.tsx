
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertTriangle } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Emergency Information</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Disaster Alerts</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Stay informed with real-time updates on natural disasters and emergencies worldwide.
          Configure your alert preferences and notification settings below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="tech-card relative">
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <h3 className="font-semibold">Critical Alert</h3>
                </div>
                <span className="text-xs text-gray-400">Just now</span>
              </div>
              <p className="text-gray-300 mb-3">Flood Warning in Jakarta, Indonesia</p>
              <span className="text-xs px-2 py-1 rounded-full border bg-red-500/20 text-red-300 border-red-500/30">
                Critical
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alerts;
