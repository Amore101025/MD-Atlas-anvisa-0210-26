import React, { useState } from 'react';
import { FileText, HelpCircle, ArrowRight, Activity, Menu, X } from 'lucide-react';
import { sections, comprehensiveQuestions, processSteps } from './data/content';
import SectionCard from './components/SectionCard';
import StepGuide from './components/StepGuide';

function App() {
  const [openSectionId, setOpenSectionId] = useState<string | null>('background');
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'qa'>('overview');
  const [openQA, setOpenQA] = useState<number | null>(null);

  const toggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  const toggleQA = (index: number) => {
    setOpenQA(openQA === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-anvisa-100 selection:text-anvisa-900">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-anvisa-600 rounded-lg flex items-center justify-center text-white">
              <Activity size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Regulatory<span className="text-anvisa-600">Brazil</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-full">
             <button 
               onClick={() => setActiveTab('overview')}
               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-anvisa-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
             >
               Factsheet
             </button>
             <button 
               onClick={() => setActiveTab('steps')}
               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === 'steps' ? 'bg-white text-anvisa-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
             >
               Step-by-Step
             </button>
             <button 
               onClick={() => setActiveTab('qa')}
               className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeTab === 'qa' ? 'bg-white text-anvisa-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
             >
               Q&A
             </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Intro / Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Factsheet for Manufacturers
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Navigating ANVISA <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-anvisa-600 to-teal-500">
              Medical Device Regulations
            </span>
          </h1>
          <p className="text-lg text-slate-600">
            A comprehensive interactive guide to understanding RDC 751/2022, risk classes, and market entry routes for Brazil.
          </p>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[600px]">
          
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {sections.map((section) => (
                <SectionCard
                  key={section.id}
                  data={section}
                  isOpen={openSectionId === section.id}
                  onClick={() => toggleSection(section.id)}
                />
              ))}
              
              <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to start the process?</h3>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto relative z-10">
                  Follow our step-by-step roadmap to ensure you don't miss any critical regulatory milestones.
                </p>
                <button 
                  onClick={() => setActiveTab('steps')}
                  className="bg-anvisa-500 hover:bg-anvisa-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2 relative z-10"
                >
                  View Roadmap <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* TAB: STEPS */}
          {activeTab === 'steps' && (
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                 <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Market Entry Roadmap</h2>
                      <p className="text-gray-500 text-sm">From classification to final approval</p>
                    </div>
                 </div>
                 <StepGuide steps={processSteps} />
              </div>
            </div>
          )}

          {/* TAB: Q&A */}
          {activeTab === 'qa' && (
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-500">Comprehensive follow-up questions for deep regulatory understanding.</p>
              </div>
              
              <div className="space-y-3">
                {comprehensiveQuestions.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-anvisa-300">
                    <button
                      onClick={() => toggleQA(index)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className={`font-semibold text-gray-800 ${openQA === index ? 'text-anvisa-700' : ''}`}>
                        {item.question}
                      </span>
                      <div className={`mt-1 transition-transform duration-300 text-gray-400 ${openQA === index ? 'rotate-180' : ''}`}>
                        <HelpCircle size={20} />
                      </div>
                    </button>
                    <div 
                      className={`transition-[max-height,opacity] duration-300 ease-in-out bg-gray-50 ${openQA === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-5 pt-2 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mobile Nav Bottom */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-2 flex justify-around items-center z-50 pb-safe">
        <button onClick={() => setActiveTab('overview')} className={`p-2 flex flex-col items-center gap-1 ${activeTab === 'overview' ? 'text-anvisa-600' : 'text-gray-400'}`}>
          <FileText size={20} />
          <span className="text-[10px] font-medium">Factsheet</span>
        </button>
        <button onClick={() => setActiveTab('steps')} className={`p-2 flex flex-col items-center gap-1 ${activeTab === 'steps' ? 'text-anvisa-600' : 'text-gray-400'}`}>
          <ArrowRight size={20} />
          <span className="text-[10px] font-medium">Steps</span>
        </button>
        <button onClick={() => setActiveTab('qa')} className={`p-2 flex flex-col items-center gap-1 ${activeTab === 'qa' ? 'text-anvisa-600' : 'text-gray-400'}`}>
          <HelpCircle size={20} />
          <span className="text-[10px] font-medium">Q&A</span>
        </button>
      </div>

    </div>
  );
}

export default App;