
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Donate = () => {
  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Support</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Donation Hub</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Your contributions directly help communities affected by disasters. Choose where and how you want to make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="tech-card h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-sahaya-blue/20 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-sahaya-blue" />
              </div>
              <h3 className="text-xl font-semibold">Make a Financial Donation</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Your financial support will be directed to immediate relief efforts or long-term recovery projects.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                {['$25', '$50', '$100', '$500'].map((amount, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="flex-1 border-sahaya-blue text-sahaya-blue hover:bg-sahaya-blue/10"
                  >
                    {amount}
                  </Button>
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-gray-300">Custom: </span>
                <Input 
                  type="number" 
                  placeholder="Amount" 
                  className="bg-gray-900/50 border-gray-700"
                />
              </div>
              
              <Button className="w-full bg-sahaya-blue hover:bg-sahaya-blue/90 text-white">
                Donate Now
              </Button>
            </div>
          </div>
          
          <div className="tech-card h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-sahaya-purple/20 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-sahaya-purple" />
              </div>
              <h3 className="text-xl font-semibold">In-Kind Donations</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Donate essential supplies, equipment, or services to support disaster relief and recovery efforts.
            </p>
            
            <div className="mb-6 space-y-4">
              {['Medical Supplies', 'Food & Water', 'Clothing & Blankets', 'Construction Materials'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 border border-gray-800 rounded-lg bg-gray-900/50">
                  <input type="checkbox" id={`item-${index}`} className="rounded bg-gray-900 border-gray-700" />
                  <label htmlFor={`item-${index}`} className="flex-grow cursor-pointer">{item}</label>
                </div>
              ))}
              
              <Button className="w-full bg-sahaya-purple hover:bg-sahaya-purple/90 text-white">
                Pledge Support
              </Button>
            </div>
          </div>
        </div>
        
        <div className="tech-card">
          <h3 className="text-xl font-semibold mb-6">Current High-Priority Needs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { area: 'Central Ghana', need: 'Clean Water', progress: 60 },
              { area: 'Philippines', need: 'Medical Supplies', progress: 40 },
              { area: 'Nepal', need: 'Temporary Shelter', progress: 25 }
            ].map((item, index) => (
              <div key={index} className="p-4 border border-gray-800 rounded-lg bg-gray-900/50">
                <h4 className="font-medium">{item.area}</h4>
                <p className="text-sm text-gray-400 mb-2">{item.need}</p>
                <div className="w-full h-2 bg-gray-800 rounded-full mb-2">
                  <div 
                    className="h-2 bg-sahaya-blue rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>{item.progress}% funded</span>
                  <span className="text-sahaya-blue cursor-pointer">Donate</span>
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

export default Donate;
