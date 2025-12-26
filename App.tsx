
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoDemo from './components/VideoDemo';
import Capabilities from './components/Capabilities';
import Scenarios from './components/Scenarios';
import Values from './components/Values';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Advanced Video Interaction Section */}
        <VideoDemo />

        {/* Technical Core */}
        <Capabilities />
        
        {/* Application Scenarios */}
        <Scenarios />
        
        {/* Value Proposition */}
        <Values />
        
        {/* Product Highlights */}
        <Highlights />
      </main>
      <Footer />
      
      {/* AI Assistant Chatbot */}
      <AIChatBot />
    </div>
  );
};

export default App;
