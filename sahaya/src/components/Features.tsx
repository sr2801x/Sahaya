
import React from 'react';
import FeatureCard from './FeatureCard';
import { Users, BookOpen, HeartHandshake, BarChart4, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      title: "Volunteer Network",
      description: "Connect with volunteers near you or sign up to help those in need during emergencies. Our global network provides rapid response and assistance.",
      icon: <Users className="w-6 h-6 text-sahaya-purple" />,
      iconBg: "bg-sahaya-purple/20",
      id: "volunteer",
      link: "/volunteer"
    },
    {
      title: "Disaster Education",
      description: "Access interactive learning materials and safety guides to better prepare for different types of disasters and emergencies.",
      icon: <BookOpen className="w-6 h-6 text-sahaya-green" />,
      iconBg: "bg-sahaya-green/20",
      id: "education",
      link: "/education"
    },
    {
      title: "Donation Hub",
      description: "Transparent platform for donating resources, funds, and supplies to affected areas with real-time tracking of your contribution's impact.",
      icon: <HeartHandshake className="w-6 h-6 text-sahaya-blue" />,
      iconBg: "bg-sahaya-blue/20",
      id: "donate",
      link: "/donate"
    },
    {
      title: "Prediction & Simulation",
      description: "AI-powered risk assessment and disaster prediction tools to help communities prepare with greater accuracy and lead time.",
      icon: <BarChart4 className="w-6 h-6 text-sahaya-purple" />,
      iconBg: "bg-sahaya-purple/20",
      id: "prediction",
      link: "/prediction"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Features</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions</h2>
        <p className="text-gray-300 max-w-2xl">
          Sahaya provides a complete ecosystem for disaster management with tools for every phase -
          from preparation and response to recovery and mitigation.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div id={feature.id} key={index}>
              <Link to={feature.link} className="block h-full">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconBg={feature.iconBg}
                  actionText={`Explore ${feature.title}`}
                />
              </Link>
            </div>
          ))}
        </div>
        
        {/* Central shield graphic */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-sahaya-blue/10 flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-sahaya-blue/30 absolute animate-rotate"></div>
              <Shield className="w-12 h-12 text-sahaya-blue" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sahaya-green opacity-50"></div>
              <div className="relative inline-flex rounded-full h-6 w-6 bg-sahaya-green/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
