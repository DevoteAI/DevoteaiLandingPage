import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import BookCall from './components/BookCall';
import MeetCreators from './components/MeetCreators';
import AIContentGeneration from './pages/AIContentGeneration';
import CustomAISolutions from './pages/CustomAISolutions';
import ChatbotDevelopment from './pages/ChatbotDevelopment';
import AIIntegration from './pages/AIIntegration';
import AIVoiceAgents from './pages/AIVoiceAgents';
import ProcessAutomation from './pages/ProcessAutomation';
import CaseStudies from './pages/CaseStudies';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatbotWidget />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Services />
            <MeetCreators />
            <BookCall />
          </main>
        } />
        <Route path="/services/ai-content-generation" element={<AIContentGeneration />} />
        <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
        <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
        <Route path="/services/ai-voice-agents" element={<AIVoiceAgents />} />
        <Route path="/services/ai-integration" element={<AIIntegration />} />
        <Route path="/services/process-automation" element={<ProcessAutomation />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
