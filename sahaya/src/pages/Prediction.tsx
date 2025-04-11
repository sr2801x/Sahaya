
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BarChart4, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Prediction = () => {
  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">AI-Powered</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Disaster Prediction</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Utilize advanced AI algorithms to predict potential disasters and assess risks in your area.
        </p>

        <div className="tech-card mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-sahaya-purple/20 flex items-center justify-center">
              <BarChart4 className="w-6 h-6 text-sahaya-purple" />
            </div>
            <h3 className="text-xl font-semibold">Risk Assessment Tool</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6">
                Enter your location to receive a personalized risk assessment for different types of natural disasters.
              </p>
              
              <div className="relative mb-6">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Enter your location" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-sahaya-blue focus:outline-none"
                />
                <Button className="absolute right-2 top-2 h-8 bg-sahaya-purple hover:bg-sahaya-purple/90 text-white">
                  Analyze
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Earthquakes', 'Floods', 'Wildfires', 'Hurricanes'].map((disaster, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id={`disaster-${index}`} 
                      defaultChecked
                      className="rounded bg-gray-900 border-gray-700" 
                    />
                    <label htmlFor={`disaster-${index}`}>{disaster}</label>
                  </div>
                ))}
              </div>
              
              <Button className="bg-sahaya-purple hover:bg-sahaya-purple/90 text-white">
                Generate Risk Report
              </Button>
            </div>
            
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1548611716-4d42ff113b2d')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="bg-card/70 backdrop-blur-sm p-2 rounded-md text-sm">
                  Risk Analysis Map
                </div>
                <div className="bg-card/70 backdrop-blur-sm p-2 rounded-md text-xs text-gray-300 self-start">
                  Select a location to view detailed risk factors
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="tech-card h-full">
            <h3 className="text-xl font-semibold mb-4">Historical Disaster Data</h3>
            <p className="text-gray-300 mb-6">
              Access and analyze historical disaster data to understand patterns and improve preparedness.
            </p>
            <Button 
              variant="ghost" 
              className="text-sahaya-purple hover:text-white hover:bg-sahaya-purple/20 p-0 group"
            >
              Explore Data 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="tech-card h-full">
            <h3 className="text-xl font-semibold mb-4">Simulation Tools</h3>
            <p className="text-gray-300 mb-6">
              Run disaster simulations to test emergency response plans and identify potential weaknesses.
            </p>
            <Button 
              variant="ghost" 
              className="text-sahaya-purple hover:text-white hover:bg-sahaya-purple/20 p-0 group"
            >
              Start Simulation 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prediction;
