import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionContent } from '../types';

interface Props {
  data: SectionContent;
  isOpen: boolean;
  onClick: () => void;
}

const SectionCard: React.FC<Props> = ({ data, isOpen, onClick }) => {
  const Icon = data.icon;

  return (
    <div className={`border rounded-xl transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-md ${isOpen ? 'ring-2 ring-anvisa-500 border-transparent' : 'border-gray-200'}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${isOpen ? 'bg-anvisa-100 text-anvisa-700' : 'bg-gray-100 text-gray-500'}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-lg font-bold ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
              {data.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{data.description}</p>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {/* Expandable Content */}
      <div className={`transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50">
          {data.content}
        </div>
      </div>
    </div>
  );
};

export default SectionCard;