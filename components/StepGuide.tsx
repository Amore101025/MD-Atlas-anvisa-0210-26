import React from 'react';
import { TimelineStep } from '../types';

interface Props {
  steps: TimelineStep[];
}

const StepGuide: React.FC<Props> = ({ steps }) => {
  return (
    <div className="relative border-l-2 border-anvisa-200 ml-4 space-y-8 my-8">
      {steps.map((step, index) => (
        <div key={index} className="relative pl-8 group">
          {/* Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-anvisa-400 group-hover:border-anvisa-600 group-hover:bg-anvisa-50 transition-colors shadow-sm" />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
             <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-3">{step.description}</p>
          
          {step.details && (
            <ul className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm space-y-1">
              {step.details.map((detail, idx) => (
                <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-anvisa-400" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepGuide;