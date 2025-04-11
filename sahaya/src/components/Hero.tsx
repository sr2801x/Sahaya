
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, AlertTriangle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Simple particle animation
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    canvas.width = particlesRef.current.offsetWidth;
    canvas.height = particlesRef.current.offsetHeight;
    particlesRef.current.appendChild(canvas);
    
    const particles: {x: number; y: number; size: number; vx: number; vy: number; color: string}[] = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      const colors = ['rgba(0, 166, 251, 0.5)', 'rgba(123, 97, 255, 0.5)', 'rgba(0, 245, 212, 0.5)'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hexagon-grid"></div>
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mt-16 md:mt-24">
          {/* Alert bar */}
          <div className="flex items-center gap-2 bg-red-900/30 text-red-200 rounded-full py-1.5 px-4 mb-8 border border-red-800/50 animate-pulse-glow">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Active alerts in 3 regions</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            <span className="text-sahaya-blue animate-text-glow">Sahaya</span> Nexus Shield
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-6">
            Your One-Stop Platform for Disaster Preparedness, 
            Response & Recovery
          </p>
          
          {/* Feature rings */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <Link to="/alerts" className="flex items-center gap-2 text-sm bg-sahaya-dark/90 border border-sahaya-blue/30 rounded-full py-1.5 px-4 hover:bg-sahaya-dark/70 transition-colors">
              <div className="text-sahaya-blue"><AlertTriangle className="w-5 h-5" /></div>
              <span>Disaster Alerts</span>
            </Link>
            <Link to="/volunteer" className="flex items-center gap-2 text-sm bg-sahaya-dark/90 border border-sahaya-blue/30 rounded-full py-1.5 px-4 hover:bg-sahaya-dark/70 transition-colors">
              <div className="text-sahaya-blue"><Heart className="w-5 h-5" /></div>
              <span>Volunteer Network</span>
            </Link>
            <Link to="/prediction" className="flex items-center gap-2 text-sm bg-sahaya-dark/90 border border-sahaya-blue/30 rounded-full py-1.5 px-4 hover:bg-sahaya-dark/70 transition-colors">
              <div className="text-sahaya-blue"><ArrowRight className="w-5 h-5" /></div>
              <span>AI Predictions</span>
            </Link>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/get-started">
              <Button 
                size="lg" 
                className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white"
              >
                Get Started
              </Button>
            </Link>
            <Link to="#features">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-sahaya-purple text-sahaya-purple hover:bg-sahaya-purple/10"
              >
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            { count: "50+", label: "Countries Covered" },
            { count: "10K+", label: "Volunteer Network" },
            { count: "24/7", label: "Monitoring & Alerts" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="tech-card text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-sahaya-blue mb-2">{stat.count}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sahaya-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
