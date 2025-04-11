
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Education = () => {
  // Sample courses data
  const courses = [
    {
      title: "Disaster Preparedness Basics",
      description: "Learn essential skills for preparing your home and family for common natural disasters.",
      level: "Beginner",
      duration: "2 hours",
      icon: <BookOpen className="h-5 w-5 text-sahaya-green" />
    },
    {
      title: "Emergency First Aid",
      description: "Essential first aid techniques to help people during the critical minutes after a disaster.",
      level: "Intermediate",
      duration: "4 hours",
      icon: <BookOpen className="h-5 w-5 text-sahaya-green" />
    },
    {
      title: "Community Response Team Training",
      description: "Advanced training to help you lead community response efforts during disasters.",
      level: "Advanced",
      duration: "8 hours",
      icon: <BookOpen className="h-5 w-5 text-sahaya-green" />
    }
  ];

  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
          <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Knowledge Center</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Disaster Education</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Access interactive learning materials and safety guides to better prepare for different types of disasters and emergencies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="tech-card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sahaya-green/20 flex items-center justify-center">
                    {course.icon}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
                    {course.level}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{course.duration}</span>
                  <Button 
                    variant="ghost" 
                    className="text-sahaya-green hover:text-white hover:bg-sahaya-green/20 p-0 group"
                  >
                    Start Learning 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="tech-card">
          <h3 className="text-xl font-semibold mb-4">Safety Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Earthquakes", "Floods", "Wildfires", "Hurricanes"].map((disaster, index) => (
              <div key={index} className="p-4 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-all cursor-pointer group">
                <h4 className="font-medium mb-2 group-hover:text-sahaya-green transition-colors">{disaster} Safety Guide</h4>
                <p className="text-sm text-gray-400">Essential tips and procedures</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
