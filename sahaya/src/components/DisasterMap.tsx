
import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DisasterMap = () => {
  // Mock disaster alerts data
  const alerts = [
    { id: 1, type: 'Earthquake', location: 'San Francisco, USA', severity: 'Medium', time: '2 hours ago' },
    { id: 2, type: 'Flooding', location: 'Mumbai, India', severity: 'High', time: '30 minutes ago' },
    { id: 3, type: 'Wildfire', location: 'Sydney, Australia', severity: 'Critical', time: 'Just now' },
  ];

  // Function to determine alert color based on severity
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Medium': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'High': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Critical': return 'bg-red-800/20 text-red-300 border-red-800/30';
      default: return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <section id="alerts" className="py-20 relative">
      {/* Section title */}
      <div className="container mx-auto mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Live Updates</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Disaster Alerts</h2>
        <p className="text-gray-300 max-w-2xl">
          Real-time monitoring and alerts for natural disasters worldwide. Get immediate notifications about 
          earthquakes, floods, wildfires, and other emergency situations.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Alert list */}
          <div className="lg:col-span-1 space-y-4">
            {alerts.map(alert => (
              <div 
                key={alert.id} 
                className={`tech-card relative ${
                  alert.severity === 'Critical' ? 'border-red-500/30' : ''
                }`}
              >
                {alert.severity === 'Critical' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></div>
                    <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.severity === 'Critical' ? 'text-red-500' : 
                      alert.severity === 'High' ? 'text-red-400' :
                      'text-orange-400'
                    }`} />
                    <h3 className="font-semibold">{alert.type}</h3>
                  </div>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </div>
                
                <p className="text-gray-300 mb-3">{alert.location}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-1 rounded-full border ${getSeverityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                  <Button variant="ghost" size="sm" className="text-sahaya-blue hover:text-white p-0">
                    Details <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
            
            <Link to="/alerts">
              <Button className="w-full bg-transparent hover:bg-sahaya-blue/10 border border-sahaya-blue/50 text-sahaya-blue">
                View All Alerts
              </Button>
            </Link>
          </div>
          
          {/* Map visualization */}
          <div className="lg:col-span-2 tech-card aspect-[16/9] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            </div>
            
            {/* World map overlay */}
            <div className="relative h-full w-full flex flex-col justify-between p-4">
              <div className="flex justify-between">
                <div className="bg-card/70 backdrop-blur-sm p-2 rounded-md text-sm">
                  Global Disaster Monitor
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Alert pins on map */}
              <div className="relative flex-1">
                {/* San Francisco */}
                <div className="absolute left-[15%] top-[35%]">
                  <div className="w-4 h-4 rounded-full bg-orange-500/30 animate-ping"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-1 left-1"></div>
                </div>
                
                {/* Mumbai */}
                <div className="absolute left-[60%] top-[45%]">
                  <div className="w-5 h-5 rounded-full bg-red-500/30 animate-ping"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 absolute top-1.5 left-1.5"></div>
                </div>
                
                {/* Sydney */}
                <div className="absolute left-[80%] top-[70%]">
                  <div className="w-6 h-6 rounded-full bg-red-700/30 animate-ping"></div>
                  <div className="w-3 h-3 rounded-full bg-red-700 absolute top-1.5 left-1.5"></div>
                </div>
              </div>
              
              <div className="bg-card/70 backdrop-blur-sm p-2 rounded-md text-xs text-gray-300 self-end">
                Last updated: Just now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisasterMap;
