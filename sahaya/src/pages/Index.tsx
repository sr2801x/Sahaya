
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DisasterMap from '@/components/DisasterMap';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <Hero />
      <DisasterMap />
      <Features />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
